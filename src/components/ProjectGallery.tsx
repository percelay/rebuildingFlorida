"use client";

import { MapPin, CheckCircle } from "lucide-react";

const SERVICE_AREAS = [
  { city: "Tampa", county: "Hillsborough County" },
  { city: "Clearwater", county: "Pinellas County" },
  { city: "St. Petersburg", county: "Pinellas County" },
  { city: "Lakeland", county: "Polk County" },
  { city: "Bradenton", county: "Manatee County" },
  { city: "Riverview", county: "Hillsborough County" },
  { city: "Sarasota", county: "Sarasota County" },
  { city: "Zephyrhills", county: "Pasco County" },
  { city: "New Port Richey", county: "Pasco County" },
  { city: "Sun City Center", county: "Hillsborough County" },
];

const COUNTIES = [
  "Hillsborough County",
  "Pinellas County",
  "Pasco County",
  "Polk County",
  "Manatee County",
  "Sarasota County",
];

export default function ProjectGallery() {
  return (
    <section
      id="areas"
      style={{
        background: "#1c1c1c",
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
                Service Coverage
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
              WHERE WE WORK
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
            We regularly work in mobile home parks and communities across Tampa Bay and Central Florida.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="areas-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "360px 280px",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        >
          {/* Featured card — Full Coverage */}
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              background: "#1a1a1a",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Background watermark */}
            <span
              style={{
                position: "absolute",
                bottom: "-1rem",
                right: "-0.5rem",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(232,132,58,0.04)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              FL
            </span>

            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(232,132,58,0.12)",
                  border: "1px solid rgba(232,132,58,0.3)",
                  padding: "0.3rem 0.75rem",
                  marginBottom: "1.25rem",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E8843A",
                }}
              >
                <MapPin size={12} strokeWidth={2} />
                Tampa Bay &amp; Central Florida
              </div>

              <h3
                style={{
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                  maxWidth: "420px",
                }}
              >
                Serving Mobile Home Communities Throughout the Region
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "#A3A3A3",
                  marginBottom: "2rem",
                  maxWidth: "460px",
                }}
              >
                From Tampa to Sarasota, we&apos;ve worked in hundreds of mobile home parks and communities across the Tampa Bay area. If you&apos;re not sure we cover your area, give us a call — chances are we do.
              </p>

              {/* City grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem 2rem",
                  marginBottom: "2rem",
                }}
              >
                {SERVICE_AREAS.map((area) => (
                  <div
                    key={area.city}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      color: "#D4D4D4",
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", background: "#E8843A", flexShrink: 0 }} />
                    {area.city}
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#E8843A",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                width: "fit-content",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4722e";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8843A";
              }}
            >
              Check Your Area &rarr;
            </a>
          </div>

          {/* Card 2 — Counties Served */}
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
              6
            </span>

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
              Counties Covered
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
              Service Area
            </h3>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {COUNTIES.map((county) => (
                <li
                  key={county}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.82rem",
                    color: "#A3A3A3",
                  }}
                >
                  <CheckCircle size={13} strokeWidth={2} style={{ color: "#E8843A", flexShrink: 0 }} />
                  {county}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Mobile Home Parks */}
          <div
            style={{
              background: "#1e2232",
              padding: "2rem",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontWeight: 900,
                fontSize: "3.5rem",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: "#E8843A",
                marginBottom: "0.5rem",
              }}
            >
              30+
            </div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                marginBottom: "0.75rem",
              }}
            >
              Years Serving Tampa Bay
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.6,
                color: "#A3A3A3",
              }}
            >
              We know Tampa Bay&apos;s mobile home communities because we&apos;ve been working in them for over three decades. No subcontractors — our own crew, every time.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .areas-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .areas-grid > div:first-child {
            grid-column: auto !important;
            grid-row: auto !important;
            min-height: 400px;
          }
          .areas-grid > div:not(:first-child) {
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
