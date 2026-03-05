"use client";

import { Shield, Award, Zap, Star, ExternalLink } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  "Commercial Painting",
  "Residential Painting",
  "Epoxy Floor Coatings",
  "Cabinet Refinishing",
  "Specialty Coatings",
];

const REVIEW_PLATFORMS = [
  {
    name: "BBB",
    label: "Better Business Bureau",
    rating: "A+",
    detail: "Accredited since 2009",
    color: "#0070A8",
    href: "https://www.bbb.org",
    stars: 5,
  },
  {
    name: "AG",
    label: "Angi (Angie's List)",
    rating: "4.9",
    detail: "Super Service Award 2023",
    color: "#FF6B35",
    href: "https://www.angi.com",
    stars: 5,
  },
  {
    name: "G",
    label: "Google Reviews",
    rating: "4.9",
    detail: "140+ verified reviews",
    color: "#4285F4",
    href: "https://g.page",
    stars: 5,
  },
];

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
            <div
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                marginBottom: "0.5rem",
              }}
            >
              APEX PAINTING CO.
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <Zap size={14} strokeWidth={2} style={{ color: "#E8843A" }} />
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#A3A3A3",
                  letterSpacing: "0.05em",
                }}
              >
                Precision Coating, Lasting Impressions
              </span>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "#A3A3A3",
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              Austin's trusted commercial and residential painting contractor since 2006. Licensed, insured, and Sherwin-Williams certified.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { icon: <Shield size={14} strokeWidth={2} />, text: "Licensed & Insured" },
                { icon: <Award size={14} strokeWidth={2} />, text: "BBB Accredited A+" },
                { icon: <Zap size={14} strokeWidth={2} />, text: "SW Certified Applicator" },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    color: "#A3A3A3",
                  }}
                >
                  <span style={{ color: "#E8843A" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
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

          {/* Col 4 — Customer Reviews */}
          <div>
            <h4
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#A3A3A3",
                marginBottom: "0.4rem",
              }}
            >
              Customer Reviews
            </h4>
            <p
              style={{
                fontSize: "0.75rem",
                color: "rgba(163,163,163,0.6)",
                marginBottom: "1rem",
              }}
            >
              Rated top contractor across platforms
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {REVIEW_PLATFORMS.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    padding: "0.6rem 0.75rem",
                    transition: "background 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Platform Badge */}
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: platform.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.7rem",
                      color: "#FFFFFF",
                      flexShrink: 0,
                      letterSpacing: "0",
                    }}
                  >
                    {platform.name}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "0.15rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {platform.rating} &nbsp;
                      {Array.from({ length: platform.stars }).map((_, i) => (
                        <Star
                          key={i}
                          size={9}
                          strokeWidth={0}
                          fill="#F59E0B"
                          style={{ display: "inline", verticalAlign: "middle" }}
                        />
                      ))}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#A3A3A3",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {platform.detail}
                    </div>
                  </div>

                  <ExternalLink size={12} strokeWidth={2} style={{ color: "#A3A3A3", flexShrink: 0 }} />
                </a>
              ))}
            </div>
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
            &copy; {currentYear} Apex Painting Co. All rights reserved. &nbsp;|&nbsp; TX License #TDLR-2006-4821
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(163,163,163,0.6)",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#A3A3A3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(163,163,163,0.6)";
                }}
              >
                {item}
              </a>
            ))}
          </div>
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
