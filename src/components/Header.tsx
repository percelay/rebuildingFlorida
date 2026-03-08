"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Areas", href: "#areas" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function RFHLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
      {/* Mobile home icon with siding lines */}
      <svg
        width="54"
        height="44"
        viewBox="0 0 56 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Low-pitch roof — wide profile like a mobile home */}
        <polygon points="28,3 1,17 55,17" fill="#E8843A" />
        {/* Home body */}
        <rect x="3" y="17" width="50" height="26" fill="#E8843A" fillOpacity="0.1" stroke="#E8843A" strokeWidth="1.5" />
        {/* Horizontal siding lines */}
        <line x1="3" y1="22" x2="53" y2="22" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="27" x2="53" y2="27" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="32" x2="53" y2="32" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        <line x1="3" y1="37" x2="53" y2="37" stroke="#E8843A" strokeWidth="0.9" strokeOpacity="0.65" />
        {/* Left window */}
        <rect x="7" y="19" width="9" height="5" fill="#E8843A" fillOpacity="0.55" />
        {/* Right window */}
        <rect x="40" y="19" width="9" height="5" fill="#E8843A" fillOpacity="0.55" />
        {/* Door */}
        <rect x="22" y="34" width="12" height="9" fill="#E8843A" fillOpacity="0.65" />
      </svg>

      {/* Text stack */}
      <div style={{ lineHeight: 1 }}>
        <div
          style={{
            fontWeight: 900,
            fontSize: "1rem",
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
            fontSize: "0.5rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E8843A",
            marginTop: "3px",
          }}
        >
          Siding &amp; Exterior Specialists
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "72px",
        background: scrolled
          ? "rgba(22,22,22,0.97)"
          : "rgba(22,22,22,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
        transition: "background 0.2s ease, border-color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          height: "100%",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <RFHLogo />
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
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
          ))}

          {/* Phone number */}
          <a
            href="tel:+18132600046"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.875rem",
              fontWeight: 600,
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
            <Phone size={14} strokeWidth={2} />
            813-260-0046
          </a>

          <a
            href="#contact"
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
              background: "#E8843A",
              padding: "0.5rem 1.25rem",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4722e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#E8843A";
            }}
          >
            Free Estimate
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#FFFFFF",
            padding: "0.25rem",
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className="mobile-drawer"
        style={{
          maxHeight: menuOpen ? "360px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "rgba(22,22,22,0.98)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.07)" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 1.5rem 1.5rem",
            gap: "0",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#A3A3A3",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
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
          ))}
          <a
            href="tel:+18132600046"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#E8843A",
              padding: "0.75rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Phone size={16} strokeWidth={2} />
            813-260-0046
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "1rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#E8843A",
              padding: "0.75rem 1.25rem",
              textAlign: "center",
              transition: "background 0.2s ease",
            }}
          >
            Free Estimate
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
