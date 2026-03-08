"use client";

import Image from "next/image";
import { ShieldCheck, Star, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Hero Background Image */}
      <Image
        src="/projects/mobile-home-siding-replacement_thumbnail-scaled.webp"
        alt="Mobile home siding replacement in Tampa Bay"
        fill
        priority
        quality={95}
        style={{
          objectFit: "cover",
          objectPosition: "center 40%",
        }}
      />

      {/* Bottom Gradient Scrim */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Left-side mid scrim for text contrast */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "70%",
          height: "65%",
          background: "linear-gradient(to top right, rgba(0,0,0,0.48) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: "4rem",
          left: "1.5rem",
          maxWidth: "clamp(300px, 58vw, 700px)",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "1rem",
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
            Tampa Bay &amp; Central Florida
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            marginBottom: "1rem",
          }}
        >
          Mobile Home Exteriors<br />Done Right. Built to Last.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            marginBottom: "1.5rem",
            maxWidth: "500px",
          }}
        >
          Siding replacement, exterior repairs, screen rooms, and carports — built
          specifically for Florida-style manufactured homes. Serving Tampa Bay communities for over 30 years.
        </p>

        {/* Trust Badges */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem",
          }}
        >
          {[
            { icon: <ShieldCheck size={13} strokeWidth={2} />, label: "BBB A+ Rated" },
            { icon: <Star size={13} strokeWidth={2} />, label: "Family Owned & Operated" },
            { icon: <Award size={13} strokeWidth={2} />, label: "Licensed General Contractor" },
          ].map((badge) => (
            <div
              key={badge.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "0.35rem 0.75rem",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
              }}
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "#E8843A",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.875rem 1.75rem",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4722e";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#E8843A";
            }}
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:+18132600046"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "0.875rem 1.75rem",
              border: "1px solid rgba(255,255,255,0.4)",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Call 813-260-0046
          </a>
        </div>

        {/* Quick note */}
        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.02em",
          }}
        >
          Most siding projects completed in about one week.
        </p>
      </div>
    </section>
  );
}
