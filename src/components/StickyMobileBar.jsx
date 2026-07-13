import { IconPhone, IconClockAlt } from "../data/icons";

export default function StickyMobileBar() {
  return (
    <div className="sticky-mobile-bar">
      <a href="tel:+15551234567" className="sticky-mobile-btn sticky-mobile-btn--call">
        <IconPhone size={18} />
        Call Now
      </a>
      <a href="#quote" className="sticky-mobile-btn sticky-mobile-btn--quote">
        <IconClockAlt size={18} />
        Get Free Quote
      </a>
    </div>
  );
}
