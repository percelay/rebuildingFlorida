"use client";

import { CheckCircle, Shield, Quote } from "lucide-react";

const STATS = [
  { number: "30+", label: "Years in Business" },
  { number: "500+", label: "Homes Restored" },
  { number: "A+", label: "BBB Rating" },
  { number: "6", label: "Counties Served" },
];

const CREDENTIALS = [
  "State Certified General Contractor — License CGC-1510334",
  "Fully Licensed & Insured",
  "BBB Accredited — A+ Rating",
  "Family Owned & Operated",
  "Mobile Home Exterior Specialists",
  "30+ Years of Construction Experience",
];

const TESTIMONIALS = [
  {
    quote:
      "I have used many contractors over the years — some good and some not so good. My experience with Robert and RFH Construction set the new high water mark with the recent addition of a large screened-in patio. From the initial meeting through the final inspection, all details were handled very professionally and on schedule. His crew was courteous and did an amazing job bringing the project to life. I'd give them 6 stars if there was one!",
    name: "Bob B.",
    project: "Screened Patio Addition",
  },
  {
    quote:
      "I hired Robert at RFH Construction to repair damage caused by a tree falling against the side of my house. Repairs included a flat roof, complete rebuild of the outside and inside wall, window, exterior siding, and french doors. All work is excellent — his crew was there working early every day. No complaints. I've even asked for a quote on additional work.",
    name: "Angela B.",
    project: "Storm Damage Repair",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#161616",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Left Column */}
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
                Our Story
              </span>
            </div>

            <h2
              style={{
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "#FFFFFF",
                marginBottom: "2rem",
              }}
            >
              ABOUT US
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              RFH Construction Consultants has been restoring and improving manufactured and mobile homes throughout Tampa Bay for over 30 years. Robert and his crew know the unique challenges that Florida weather — heat, humidity, and hurricane season — puts on exterior materials, and they know exactly how to fix them.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              What started as hands-on exterior work in local mobile home communities has grown into a full-service operation trusted by homeowners from Pasco County to Sarasota. Unlike general contractors, we specialize in the unique construction of manufactured homes — meaning we bring the right approach, not just the closest available crew.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "2rem",
              }}
            >
              Every job starts with an honest estimate, and every project is handled by our own team — no subcontractors. We work until the job is done right.
            </p>

            {/* Credential Checklist */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {CREDENTIALS.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.6rem",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    color: "#D4D4D4",
                  }}
                >
                  <CheckCircle
                    size={15}
                    strokeWidth={2}
                    style={{ color: "#E8843A", flexShrink: 0, marginTop: "2px" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            {/* Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "1.5rem",
              }}
            >
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "#1e1e1e",
                    padding: "2rem 1.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: "2.5rem",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: "#E8843A",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#A3A3A3",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Our Commitment Card */}
            <div
              style={{
                background: "#1e1e1e",
                border: "1px solid rgba(232,132,58,0.25)",
                borderLeft: "3px solid #E8843A",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "1rem",
                }}
              >
                <Shield size={18} strokeWidth={1.75} style={{ color: "#E8843A" }} />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#E8843A",
                  }}
                >
                  Our Promise
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "#A3A3A3",
                  marginBottom: "1rem",
                }}
              >
                We&apos;ve been doing this long enough to know that trust is earned one project at a time. Every estimate is free and honest, and we won&apos;t push materials or services you don&apos;t need.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {[
                  "Free, no-obligation estimates",
                  "Florida-rated materials",
                  "Clean jobsite, every day",
                  "No subcontractors — our crew only",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      color: "#D4D4D4",
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", background: "#E8843A", flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ marginTop: "5rem" }}>
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
              Satisfied Customers
            </span>
          </div>
          <h3
            style={{
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#FFFFFF",
              marginBottom: "2.5rem",
            }}
          >
            WHAT HOMEOWNERS SAY
          </h3>

          <div
            className="testimonials-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "#1e1e1e",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <Quote
                  size={28}
                  strokeWidth={1.5}
                  style={{
                    color: "#E8843A",
                    opacity: 0.4,
                    marginBottom: "1rem",
                  }}
                />
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    color: "#A3A3A3",
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#E8843A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: "0.9rem",
                      color: "#FFFFFF",
                      flexShrink: 0,
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        color: "#FFFFFF",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#E8843A",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      {t.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
