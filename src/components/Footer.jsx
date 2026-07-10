import footerLogo from "../assets/images/access_edge.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: 14 }}>
              <img src={footerLogo} alt="Access Edge Garage Door" className="footer-logo-img" />
              <div className="logo-text" style={{ marginLeft: 10 }}>
                <span className="logo-brand">ACCESS EDGE</span>
                <span className="logo-sub">GARAGE DOOR</span>
              </div>
            </div>
            <p className="footer-desc">
              Access Edge Garage Door is a trusted provider of garage door repair and installation
              services in Atlanta, GA, serving both residential and commercial customers.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Yelp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.265 13.195l-2.182 1.4c-.24.154-.563.085-.717-.155-.066-.103-.086-.226-.055-.34l.615-2.485c.048-.193.244-.31.437-.262.08.02.153.065.21.126l1.692 1.822c.166.18.155.459-.025.625-.097.09-.218.14-.344.145l.37-.876zm-4.795.06l-2.525 1.046c-.28.116-.6-.018-.716-.298-.05-.12-.05-.252 0-.372l1.038-2.462c.075-.178.28-.262.458-.187.078.033.145.087.193.155l1.538 2.062c.17.23.122.554-.108.724-.088.065-.19.104-.297.112l.42-.78zm-2.98-2.915l.213-1.468c.024-.164.175-.278.34-.254.072.01.138.046.188.1l1.17 1.225c.133.14.128.36-.012.493-.057.054-.13.087-.207.093l-2.716.19c-.176.012-.33-.12-.342-.297-.005-.075.014-.15.054-.212l1.312-.87zm7.042-1.418l-2.86-.86c-.3-.09-.47-.404-.38-.704.036-.12.11-.224.212-.298l2.264-1.655c.146-.107.356-.074.463.072.045.062.068.136.065.21l-.178 2.958c-.01.18-.164.318-.344.308-.08-.004-.156-.03-.222-.075l.98.044zM12.79 4.41l.045.122.554 2.22c.058.232-.083.468-.315.526-.1.025-.205.01-.293-.04l-1.855-1.19c-.16-.103-.207-.316-.104-.477.045-.07.114-.122.195-.148l2.058-.672c.084-.028.176-.02.254.022-.288-.17-.38-.363-.38-.363h-.16z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#">New Garage Door Installation</a></li>
              <li><a href="#">Garage Door Repairs</a></li>
              <li><a href="#">Spring Replacement</a></li>
              <li><a href="#">Opener Repair and Installation</a></li>
              <li><a href="#">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <span className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>accessedgellc@gmail.com</span>
                </span>
              </li>
              <li>
                <span className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Atlanta, Metro-Atlanta</span>
                </span>
              </li>
              <li>
                <span className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>
                    <strong>Call us now</strong><br />
                    4706664097
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; 2026 Accessedge Garage. All Rights Reserved. | Garage Door Repair & Installation in Atlanta.
        </div>
      </div>
    </footer>
  );
}
