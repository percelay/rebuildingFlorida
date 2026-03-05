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
        src="/hero.jpg"
        alt="Professional painting project"
        fill
        priority
        quality={95}
        style={{
          objectFit: "cover",
          objectPosition: "center 38%",
        }}
      />

      {/* Bottom Gradient Scrim */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "42%",
          background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)",
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
          background: "linear-gradient(to top right, rgba(0,0,0,0.45) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: "4rem",
          left: "1.5rem",
          maxWidth: "clamp(300px, 55vw, 680px)",
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
            Austin, Texas
          </span>
        </div>

        {/* H1 */}
        <h1
          style={{
            fontWeight: 900,
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            textShadow: "0 2px 8px rgba(0,0,0,0.9)",
            marginBottom: "1rem",
          }}
        >
          Precision Coating.<br />Lasting Impressions.
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "1.5rem",
            maxWidth: "480px",
          }}
        >
          Commercial and residential painting you can trust — on time, on budget, and built to last. Serving Austin and the surrounding area since 2006.
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
            { icon: <ShieldCheck size={13} strokeWidth={2} />, label: "Licensed & Insured" },
            { icon: <Star size={13} strokeWidth={2} />, label: "4.9★ Avg Rating" },
            { icon: <Award size={13} strokeWidth={2} />, label: "SW Certified Applicator" },
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
            Request a Quote
          </a>
          <a
            href="#services"
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
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
