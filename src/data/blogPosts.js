import rawPosts from "./posts.json";

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function categorizePost(title, categories) {
  // Use WordPress categories if not "Uncategorized"
  if (categories && categories.length > 0) {
    const cat = categories[0];
    if (cat !== "Uncategorized") return cat;
  }

  const t = title.toLowerCase();

  if (t.includes("spring")) return "Repairs";
  if (t.includes("insulat") || t.includes("r-value") || t.includes("energy") || t.includes("heat")) return "Insulation";
  if (t.includes("security") || t.includes("secure") || t.includes("safety") || t.includes("sensor") || t.includes("camera") || t.includes("weakest")) return "Safety";
  if (t.includes("opener") || t.includes("remote") || t.includes("reset")) return "Openers";
  if (t.includes("maintenance") || t.includes("prevent") || t.includes("weather") || t.includes("inspection")) return "Maintenance";
  if (t.includes("replace") || t.includes("repair vs") || t.includes("choose") || t.includes("single vs") || t.includes("automatic")) return "Installation";
  if (t.includes("noisy") || t.includes("close") || t.includes("wont close") || t.includes("broken")) return "Repairs";
  if (t.includes("how garage door")) return "Guides";

  return "Guides";
}

function extractSlug(slug) {
  // Some slugs are truncated in WordPress export, ensure we have a clean slug
  return slug || "";
}

function getImage(post) {
  if (post.featuredImage) return post.featuredImage;
  // Fallback images based on category
  const cat = categorizePost(post.title, post.categories).toLowerCase();
  const fallbacks = {
    repairs: "/images/blog/blog-1.webp",
    insulation: "/images/blog/blog-2.webp",
    safety: "/images/blog/blog-3.webp",
    openers: "/images/blog/blog-4.webp",
    maintenance: "/images/blog/blog-5.webp",
    installation: "/images/blog/blog-6.webp",
    guides: "/images/blog/blog-1.webp",
  };
  return fallbacks[cat] || "/images/blog/blog-1.webp";
}

function sanitizeHtml(html) {
  if (!html) return "";
  // Remove WordPress-specific alignment classes and inline styles from images
  let cleaned = html
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, (match, src) => {
      // Keep only the src attribute and add proper styling
      return `<img src="${src}" alt="Garage door blog post image" style="max-width:100%;height:auto;border-radius:12px;margin:1.5rem 0;" />`;
    })
    // Clean up excessive <span> wrappers but preserve text content
    .replace(/<span[^>]*>/gi, "")
    .replace(/<\/span>/gi, "")
    // Clean up nested <b> inside <a>
    .replace(/<a([^>]*)><b>([^<]*)<\/b><\/a>/gi, '<a$1>$2</a>')
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/gi, "")
    // Remove hr tags
    .replace(/<hr[^>]*>/gi, "")
    // Clean up WordPress data attributes
    .replace(/\sdata-[a-z-]+="[^"]*"/gi, "")
    // Remove &nbsp;
    .replace(/&nbsp;/gi, " ")
    // Clean up double spaces in HTML
    .replace(/<p>\s+<img/gi, "<p><img")
    .replace(/<\/p>\s+<p>/gi, "</p><p>")
    .replace(/\s{2,}/g, " ")
    .trim();

  return cleaned;
}

export const blogPosts = rawPosts.map((post) => {
  const category = categorizePost(post.title, post.categories);
  return {
    id: post.id,
    slug: extractSlug(post.slug),
    title: post.title,
    teaser: post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").substring(0, 200) + "..."
      : "",
    image: getImage(post),
    alt: post.title,
    date: formatDate(post.date),
    category,
    readingTimeMinutes: post.readingTimeMinutes || 8,
    content: sanitizeHtml(post.content || ""),
  };
});

// Sort by date descending (newest first)
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getPostsByCategory(category) {
  return blogPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}
