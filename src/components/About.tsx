"use client";

import { CheckCircle, Shield } from "lucide-react";

const STATS = [
  { number: "18+", label: "Years in Business" },
  { number: "2,400+", label: "Projects Completed" },
  { number: "97%", label: "Client Satisfaction" },
  { number: "50+", label: "Commercial Clients" },
];

const CREDENTIALS = [
  "Licensed General Painting Contractor — Texas TDLR",
  "Fully Insured — $2M General Liability",
  "Sherwin-Williams Certified Applicator",
  "Lead-Safe Certified (EPA RRP)",
  "Occupational Safety & Health (OSHA 10) Trained",
  "Better Business Bureau A+ Rated",
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
              Apex Painting Co. was founded in 2006 by Marcus Webb, a third-generation painter who grew up watching his grandfather and father transform spaces across central Texas. What started as a two-man residential crew has grown into one of Austin's most trusted commercial and residential painting contractors.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "1.25rem",
              }}
            >
              We believe great painting work starts long before the first brush stroke — in thorough surface preparation, the right product selection, and honest communication with every client. Our team of 22 full-time painters brings this standard to every project, whether it's a single bedroom or a 60,000 sq ft commercial build-out.
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "2rem",
              }}
            >
              Headquartered in East Austin, we serve the greater Austin metro and surrounding counties. Every quote is free, every estimate is detailed, and every job is backed by our written satisfaction guarantee.
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

            {/* Credentials Card */}
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
                  Our Commitment
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
                Every Apex project comes with our written satisfaction guarantee. If you're not 100% happy with the finished result, we'll make it right — no questions asked.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                {[
                  "Written scope & fixed-price quotes",
                  "Clean jobsite, every day",
                  "On-time project delivery",
                  "2-year workmanship warranty",
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
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
