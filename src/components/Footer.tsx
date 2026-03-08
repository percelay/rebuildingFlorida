"use client";

import { Shield, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Mobile Home Vinyl Siding",
  "Exterior Repairs",
  "Sunrooms & Screen Rooms",
  "Carports & Patio Covers",
  "Window Replacement",
  "Skirting & Trim",
];

function FooterLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
      <svg
        width="44"
        height="38"
        viewBox="0 0 56 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon points="28,3 1,17 55,17" fill="#E8843A" />
        <rect x="3" y="17" width="50" height="26" fill="#E8843A" fillOpacity="0.1" stroke="#E8843A" strokeWidth="1.5" />
        <line x1="3" y1="22" x2="53" y2="22" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="27" x2="53" y2="27" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="32" x2="53" y2="32" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="37" x2="53" y2="37" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <rect x="7" y="19" width="9" height="5" fill="#E8843A" fillOpacity="0.55" />
        <rect x="40" y="19" width="9" height="5" fill="#E8843A" fillOpacity="0.55" />
        <rect x="22" y="34" width="12" height="9" fill="#E8843A" fillOpacity="0.65" />
      </svg>
      <div>
        <div
          style={{
            fontWeight: 900,
            fontSize: "0.95rem",
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            lineHeight: 1.2,
          }}
        >
          RESTORING FLORIDA HOMES
        </div>
        <div
          style={{
            fontWeight: 600,
            fontSize: "0.48rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E8843A",
            marginTop: "2px",
          }}
        >
          Siding &amp; Exterior Specialists
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#111111",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Main Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
            gap: "3rem",
            paddingBottom: "3.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <FooterLogo />
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#A3A3A3",
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              Tampa Bay&apos;s mobile home siding and exterior repair specialists. Family owned, BBB A+ rated, and serving the region for over 30 years.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              <a
                href="tel:+18132600046"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  color: "#A3A3A3",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#A3A3A3";
                }}
              >
                <Phone size={14} strokeWidth={2} style={{ color: "#E8843A" }} />
                813-260-0046
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.82rem",
                  color: "#A3A3A3",
                }}
              >
                <MapPin size={14} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0, marginTop: "2px" }} />
                1100 N. 50th Street, Unit 4-I<br />Tampa, FL 33619
              </div>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#A3A3A3",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#A3A3A3";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    style={{
                      fontSize: "0.875rem",
                      color: "#A3A3A3",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#A3A3A3";
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — License & Credentials */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              Credentials
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { icon: <Shield size={14} strokeWidth={2} />, text: "Licensed General Contractor" },
                { icon: <Shield size={14} strokeWidth={2} />, text: "CGC-1510334" },
                { icon: <Shield size={14} strokeWidth={2} />, text: "BBB Accredited — A+" },
                { icon: <Shield size={14} strokeWidth={2} />, text: "Fully Licensed & Insured" },
                { icon: <Shield size={14} strokeWidth={2} />, text: "Family Owned & Operated" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.82rem",
                    color: "#A3A3A3",
                  }}
                >
                  <span style={{ color: "#E8843A" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                marginTop: "1.5rem",
                background: "#E8843A",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "0.6rem 1rem",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4722e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8843A";
              }}
            >
              Free Estimate &rarr;
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="footer-bottom"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 0",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(163,163,163,0.6)",
            }}
          >
            &copy; {currentYear} RFH Construction Consultants, Inc. All rights reserved.&nbsp;&nbsp;|&nbsp;&nbsp;State Certified General Contractor — CGC-1510334
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(163,163,163,0.4)",
            }}
          >
            Tampa Bay &amp; Central Florida
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) and (min-width: 769px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
