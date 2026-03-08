"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Why do a remodeling project?",
    a: "Remodeling lets you modernize your home's style, improve comfort, boost energy efficiency, and increase resale value — all while making the space work better for how you actually live.",
  },
  {
    q: "When is the right time to hire a contractor?",
    a: "When the scope of work goes beyond a weekend DIY project — whether you're adding space, updating a kitchen or bathroom, replacing windows, or tackling anything structural. A licensed contractor protects you with proper permits, warranties, and accountability. Thousands of Tampa Bay homeowners hire contractors every year for everything from small upgrades to full remodels.",
  },
  {
    q: "Why choose Restoring Florida Homes?",
    a: "Robert Hoskinson, our President and General Contractor, personally oversees every job we take on. That's not common — many contractors spread their license across multiple companies and let project managers run the show. With us, the person responsible is on the job.",
  },
  {
    q: "Do you pull the permits, or does the homeowner?",
    a: "We do. If any contractor asks you to pull your own building permits, that's a red flag. Restoring Florida Homes handles all required permits for every project.",
  },
  {
    q: "How soon can my project begin?",
    a: "Once all design and material decisions are finalized and selected products are in hand, we'll build a schedule together and get started. We won't begin work until everything needed to complete the job is ready — that's how we avoid delays.",
  },
  {
    q: "Do you offer financing?",
    a: "We don't offer in-house financing, but we'll work with you individually to structure payment terms that fit your budget. We also work with several lenders who can help finance your project, and we accept Visa, Mastercard, and debit cards.",
  },
  {
    q: "Do you use green construction methods?",
    a: "Yes. Ask your project manager for specifics — we're happy to walk through the eco-friendly options available for your project.",
  },
  {
    q: "Can I supply some of my own materials?",
    a: "We prefer to source all materials ourselves to ensure warranty coverage and keep the project on schedule. That said, we'll review requests case by case.",
  },
  {
    q: "How do you prevent project delays?",
    a: "With a detailed scope of work upfront and all materials secured before we break ground. We also maintain a master schedule throughout the project so you're never in the dark about where things stand.",
  },
  {
    q: "What if you fall behind schedule?",
    a: "Unexpected things happen in construction — we know that. When they do, we're willing to work outside normal hours to keep your timeline on track.",
  },
  {
    q: "Is any project too large or too small?",
    a: "No. We have the crew, knowledge, and experience to handle projects of any size throughout Tampa Bay and Central Florida.",
  },
  {
    q: "Where do I start with a remodel?",
    a: "Start by making a list — what you like about your home, what you don't, and what you need. Look at photos for inspiration. Think about how you use the space now and how you want to use it in the future. Bring that list to us and we'll help shape it into a plan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        background: "#161616",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
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
              Common Questions
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
            FAQ
          </h2>
        </div>

        {/* Accordion */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const isLast = i === FAQS.length - 1;

            return (
              <div
                key={i}
                style={{
                  borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1.1rem 1.5rem",
                    background: isOpen ? "rgba(232,132,58,0.06)" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.2s ease",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: isOpen ? "#FFFFFF" : "#D4D4D4",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "#E8843A",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {isOpen
                      ? <Minus size={16} strokeWidth={2.5} />
                      : <Plus size={16} strokeWidth={2.5} />
                    }
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "600px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 1.5rem 1.25rem 1.5rem",
                      fontSize: "0.875rem",
                      lineHeight: 1.75,
                      color: "#A3A3A3",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
