# Access Edge Garage Door — React Project

This is a React (Vite) conversion of the original static HTML page, with the exact same design, layout, colors, and content — broken down into reusable components.

## Structure
```
src/
  components/
    TopBar.jsx
    Navbar.jsx
    Hero.jsx
    Services.jsx
    About.jsx
    Features.jsx
    ServiceAreas.jsx
    CtaBanner.jsx
    Trust.jsx
    Reviews.jsx
    FaqBook.jsx      (functional FAQ accordion + booking form)
    Footer.jsx
  App.jsx
  index.css          (all original styles)
  main.jsx
```

## Setup
```bash
npm install
npm run dev       # start local dev server
npm run build     # production build (outputs to dist/)
```

## Notes
- FAQ items are now a working accordion (click to expand/collapse).
- The booking form is a controlled React form with state and a submit handler (currently logs to console + shows an alert — wire it to your backend/email service as needed).
- All original CSS/classes preserved for pixel-identical appearance.
