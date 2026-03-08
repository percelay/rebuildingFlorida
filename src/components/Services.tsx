"use client";

import { Home, Layers, Sun, CheckCircle, Clock } from "lucide-react";

const SIDING_SERVICES = [
  "Mobile Home Vinyl Siding Replacement",
  "Aluminum to Vinyl Conversion",
  "Fascia & Soffit Installation",
  "Exterior Repair & Restoration",
  "Skirting & Trim",
  "Window Replacement",
];

const OUTDOOR_SERVICES = [
  "Sunroom Design & Build",
  "Screened Rooms & Enclosures",
  "Pool Enclosures",
  "Carports & Patio Covers",
  "Aluminum Frame Structures",
];

const FLORIDA_READY = [
  "Wind & moisture-resistant systems",
  "Florida building code compliant",
  "Materials rated for Florida climate",
  "Low-maintenance vinyl panels",
  "Custom color matching available",
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "#161616",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <div style={{ width: "24px", height: "2px", background: "#E8843A" }} />
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#E8843A",
                }}
              >
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#FFFFFF",
              }}
            >
              SERVICES
            </h2>
          </div>
          <p
            style={{
              maxWidth: "340px",
              fontSize: "0.875rem",
              lineHeight: 1.7,
              color: "#A3A3A3",
              textAlign: "right",
            }}
          >
            Specializing in the exterior needs of manufactured and mobile homes throughout Tampa Bay — from siding to sunrooms.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.35fr 1fr",
            gridTemplateRows: "auto auto",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Card 1 — Siding & Exterior (spans 2 rows) */}
          <div
            style={{
              gridRow: "span 2",
              background: "#1a1a1a",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Watermark number */}
            <span
              style={{
                position: "absolute",
                top: "1rem",
                right: "1.5rem",
                fontSize: "7rem",
                fontWeight: 900,
                color: "rgba(255,255,255,0.03)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              01
            </span>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                border: "1px solid rgba(232,132,58,0.4)",
                marginBottom: "1.5rem",
                color: "#E8843A",
              }}
            >
              <Home size={22} strokeWidth={1.75} />
            </div>

            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8843A",
                marginBottom: "0.5rem",
              }}
            >
              Core Service
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.5rem",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Siding &amp; Exterior Work
            </h3>

            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#E8843A",
                marginBottom: "1.5rem",
              }}
            />

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "2rem" }}>
              {SIDING_SERVICES.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    color: "#A3A3A3",
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle size={14} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Quick turnaround callout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(232,132,58,0.1)",
                border: "1px solid rgba(232,132,58,0.25)",
                borderLeft: "3px solid #E8843A",
                padding: "0.75rem 1rem",
                marginBottom: "2rem",
              }}
            >
              <Clock size={16} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0 }} />
              <span style={{ fontSize: "0.8rem", color: "#D4D4D4", lineHeight: 1.5 }}>
                Most siding projects are completed <strong style={{ color: "#FFFFFF" }}>in about one week</strong>.
              </span>
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#E8843A",
                borderBottom: "1px solid rgba(232,132,58,0.4)",
                paddingBottom: "0.2rem",
                transition: "color 0.2s ease, border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#E8843A";
                e.currentTarget.style.borderColor = "rgba(232,132,58,0.4)";
              }}
            >
              Get a Free Estimate &rarr;
            </a>
          </div>

          {/* Card 2 — Outdoor Living */}
          <div
            style={{
              background: "#202020",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "1rem",
                fontSize: "5rem",
                fontWeight: 900,
                color: "rgba(255,255,255,0.03)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              02
            </span>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                border: "1px solid rgba(232,132,58,0.4)",
                marginBottom: "1.25rem",
                color: "#E8843A",
              }}
            >
              <Sun size={20} strokeWidth={1.75} />
            </div>

            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8843A",
                marginBottom: "0.4rem",
              }}
            >
              Outdoor Living
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Sunrooms &amp; Screen Rooms
            </h3>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1rem" }}>
              {OUTDOOR_SERVICES.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.8rem",
                    color: "#A3A3A3",
                  }}
                >
                  <CheckCircle size={13} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(163,163,163,0.7)",
                lineHeight: 1.6,
                marginTop: "0.75rem",
              }}
            >
              Designed and built from start to finish — we handle permitting, framing, and final inspection.
            </p>
          </div>

          {/* Card 3 — Florida-Ready Materials */}
          <div
            style={{
              background: "#1e2232",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "1rem",
                fontSize: "5rem",
                fontWeight: 900,
                color: "rgba(255,255,255,0.04)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              03
            </span>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                border: "1px solid rgba(232,132,58,0.4)",
                marginBottom: "1.25rem",
                color: "#E8843A",
              }}
            >
              <Layers size={20} strokeWidth={1.75} />
            </div>

            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8843A",
                marginBottom: "0.4rem",
              }}
            >
              Florida-Ready
            </p>
            <h3
              style={{
                fontWeight: 900,
                fontSize: "1.25rem",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Built for Florida Weather
            </h3>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.5rem" }}>
              {FLORIDA_READY.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.8rem",
                    color: "#A3A3A3",
                  }}
                >
                  <CheckCircle size={13} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(232,132,58,0.12)",
                border: "1px solid rgba(232,132,58,0.3)",
                padding: "0.4rem 0.75rem",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#E8843A",
                textTransform: "uppercase",
              }}
            >
              Mobile Home Specialists
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .services-grid > div:first-child {
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
