"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Shield, CheckCircle, Loader } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const PROJECT_TYPES = [
  "Commercial Interior Painting",
  "Commercial Exterior Painting",
  "Residential Interior Painting",
  "Residential Exterior Painting",
  "Cabinet Refinishing",
  "Epoxy Floor Coating",
  "Specialty / Industrial Coating",
  "Other / Not Sure",
];

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "#E8843A";
    e.currentTarget.style.outline = "none";
    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(232,132,58,0.15)";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
    e.currentTarget.style.boxShadow = "none";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#1c1c1c",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
              Get In Touch
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
            REQUEST A QUOTE
          </h2>
        </div>

        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column — Info */}
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.75,
                color: "#A3A3A3",
                marginBottom: "2rem",
              }}
            >
              Ready to get started? Fill out the form and we'll get back to you within one business day with a detailed, no-obligation quote.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                {
                  icon: <Phone size={18} strokeWidth={1.75} />,
                  label: "Phone",
                  value: "(512) 847-2301",
                  href: "tel:+15128472301",
                },
                {
                  icon: <Mail size={18} strokeWidth={1.75} />,
                  label: "Email",
                  value: "info@apexpainting.co",
                  href: "mailto:info@apexpainting.co",
                },
                {
                  icon: <MapPin size={18} strokeWidth={1.75} />,
                  label: "Address",
                  value: "4821 Industrial Pkwy, Suite 200\nAustin, TX 78741",
                  href: "https://maps.google.com/?q=4821+Industrial+Pkwy+Austin+TX",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "42px",
                      height: "42px",
                      flexShrink: 0,
                      border: "1px solid rgba(232,132,58,0.3)",
                      color: "#E8843A",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#A3A3A3",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.label === "Address" ? "_blank" : undefined}
                      rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                      style={{
                        fontSize: "0.9rem",
                        color: "#FFFFFF",
                        whiteSpace: "pre-line",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#E8843A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Box */}
            <div
              style={{
                background: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "1.25rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Shield size={16} strokeWidth={1.75} style={{ color: "#E8843A" }} />
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#A3A3A3",
                  }}
                >
                  Why Choose Us
                </span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "Free, detailed written estimates",
                  "No hidden fees or surprise charges",
                  "Licensed, bonded & insured",
                  "Satisfaction guarantee in writing",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.8rem",
                      color: "#A3A3A3",
                    }}
                  >
                    <div
                      style={{ width: "4px", height: "4px", background: "#E8843A", flexShrink: 0 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column — Form */}
          <div>
            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4rem 2rem",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textAlign: "center",
                  gap: "1rem",
                }}
              >
                <CheckCircle size={48} strokeWidth={1.5} style={{ color: "#E8843A" }} />
                <h3
                  style={{
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                  }}
                >
                  Message Received
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#A3A3A3", maxWidth: "320px" }}>
                  Thanks for reaching out! We'll review your request and get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "2rem",
                }}
              >
                {/* Row 1: Name + Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#A3A3A3",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#A3A3A3",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(512) 555-0000"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#A3A3A3",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={inputStyle}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#A3A3A3",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" style={{ background: "#1a1a1a" }}>
                      Select a service...
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} style={{ background: "#1a1a1a" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#A3A3A3",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project — square footage, timeline, any special requirements..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div
                    style={{
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.3)",
                      color: "#fca5a5",
                      padding: "0.75rem 1rem",
                      fontSize: "0.85rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {errorMsg}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    background: "#E8843A",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.875rem 2rem",
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    opacity: status === "sending" ? 0.7 : 1,
                    transition: "background 0.2s ease, opacity 0.2s ease",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") e.currentTarget.style.background = "#d4722e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#E8843A";
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <Loader
                        size={16}
                        strokeWidth={2}
                        style={{ animation: "spin 0.8s linear infinite" }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send My Request"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .contact-grid form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
