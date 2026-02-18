export default function SuggestionsFormPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar__container">
          <a href="/index.html" id="navbar__logo">PulseAsia</a>

          <ul className="navbar__menu">
            <li><a href="../aboutus/aboutus.html">About Us</a></li>
            <li><a href="../resourcesPage/resources.html">Resource Hub</a></li>
            <li><a href="../topthreeresources/topthreeresources.html">Top Three Resources</a></li>
            <li><a href="../suggestions/suggestions.html">Suggestions</a></li>
            <li><a href="../References/references.html">References</a></li>
            <li><a href="../interactiveMap/map.html">Interactive Maps</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="page-container">
        <div className="content-title">
          <h1>Suggestions</h1>
        </div>
        <p>
          This page is under construction.
        </p>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:ali.samina.star@gmail.com" className="contact-btn">
              Contact Us:
            </a>
            <p>Email: info@pulseasia.com</p>
            <p>Phone: 425-471-4324</p>

            <p className="footer-created">
              Created by students of:
              <br />
              Lake Washington High School
              <br />
              12033 NE 80th St, Kirkland, WA 98033
            </p>

            <p className="footer-copyright">
              ©2025 Pulse Asia. All Rights Reserved.
            </p>
          </div>

          <div className="footer-right">
            <nav className="footer-links">
              <a href="/aboutus/aboutus.html">About Us</a>
              <a href="/resourcesPage/resources.html">Resource Hub</a>
              <a href="/topthreeresources/topthreeresources.html">Top Three Resources</a>
              <a href="/suggestions/suggestions.html">Suggestions</a>
              <a href="/References/references.html">References</a>
              <a href="/interactiveMap/map.html">Interactive Maps</a>
            </nav>

            <img
              src="/PULSEASIALOGO.png"
              alt="Pulse Asia Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
