"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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
          <Image
            src="/logo.png"
            alt="Apex Painting Co."
            width={180}
            height={56}
            priority
            style={{ objectFit: "contain", height: "56px", width: "auto" }}
          />
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
                color: hoveredLink === link.href ? "#FFFFFF" : "#A3A3A3",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                setHoveredLink(link.href);
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                setHoveredLink(null);
                e.currentTarget.style.color = "#A3A3A3";
              }}
            >
              {link.label}
            </a>
          ))}
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
            Get a Quote
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
          maxHeight: menuOpen ? "300px" : "0px",
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
            Get a Quote
          </a>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
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
