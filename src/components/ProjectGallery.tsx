"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string[];
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Downtown Austin Office Tower",
    category: "Commercial Interior",
    image: "/projects/project-1.jpg",
    description:
      "Full interior repaint of a 12-story office tower including common areas, tenant suites, stairwells, and parking structure. Completed over 6 weekends with zero disruption to weekday operations.",
    details: [
      "45,000 sq ft total coverage",
      "Sherwin-Williams Emerald commercial-grade paint",
      "Low-VOC formula required by building management",
      "Completed in 6 weekend phases",
      "Custom accent walls throughout executive floors",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Lakeway Estate Exterior",
    category: "Residential Exterior",
    image: "/projects/project-2.jpg",
    description: "Full exterior repaint of a 4,800 sq ft luxury estate including stucco body, wood trim, fascia, and wraparound porch.",
    details: [
      "Stucco body with elastomeric coating",
      "Cedar trim hand-brushed for adhesion",
      "3-color scheme custom-matched",
    ],
  },
  {
    id: 3,
    title: "Mueller District Retail Strip",
    category: "Commercial Exterior",
    image: "/projects/project-3.jpg",
    description: "Exterior repaint for a 6-unit retail strip mall in Austin's Mueller district, coordinated with property management.",
    details: [
      "6 storefronts, unified color palette",
      "Anti-graffiti topcoat applied",
      "Completed over one long weekend",
    ],
  },
  {
    id: 4,
    title: "South Lamar Kitchen Cabinets",
    category: "Cabinet Refinishing",
    image: "/projects/project-4.jpg",
    description: "Full cabinet refinishing for a modern kitchen — deglossed, primed, and sprayed with factory-smooth lacquer finish.",
    details: [
      "42 cabinet doors refinished",
      "Factory-smooth lacquer spray finish",
      "Benjamin Moore Advance enamel",
    ],
  },
  {
    id: 5,
    title: "Cedar Park Epoxy Garage",
    category: "Specialty Coating",
    image: "/projects/project-5.jpg",
    description: "Full 3-car garage epoxy floor system — diamond-ground substrate, moisture barrier, broadcast flake, and polyurea topcoat.",
    details: [
      "Diamond grinding surface prep",
      "Moisture vapor barrier applied",
      "Decorative flake broadcast",
      "Polyurea topcoat for UV stability",
    ],
  },
];

export default function ProjectGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
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
                Our Work
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
              PROJECTS
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
            A selection of recent commercial and residential work across Austin and surrounding areas.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className="gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "360px 280px",
            gap: "1px",
            backgroundColor: "rgba(255,255,255,0.06)",
          }}
        >
          {/* Featured card */}
          <div
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              position: "relative",
              overflow: "hidden",
              background: "#242424",
              cursor: "pointer",
            }}
            onClick={() => openModal(featured)}
            onMouseEnter={(e) => {
              setHoveredId(featured.id);
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              setHoveredId(null);
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "scale(1)";
            }}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              style={{
                objectFit: "cover",
                transition: "transform 0.35s ease",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "55%",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E8843A",
                  background: "rgba(232,132,58,0.15)",
                  border: "1px solid rgba(232,132,58,0.3)",
                  padding: "0.2rem 0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                {featured.category}
              </span>
              <h3
                style={{
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                }}
              >
                {featured.title}
              </h3>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#E8843A",
                  border: "none",
                  padding: "0.5rem 1rem",
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
                View Details
                <ExternalLink size={12} strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Rest of cards */}
          {rest.map((project) => (
            <div
              key={project.id}
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#242424",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                setHoveredId(project.id);
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                setHoveredId(null);
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{
                  objectFit: "cover",
                  transition: "transform 0.35s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "65%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  right: "1rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#E8843A",
                    background: "rgba(232,132,58,0.15)",
                    border: "1px solid rgba(232,132,58,0.3)",
                    padding: "0.15rem 0.4rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    color: "#FFFFFF",
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div>
            {/* Modal Image */}
            <div style={{ position: "relative", height: "320px", background: "#111" }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                style={{ objectFit: "cover", opacity: 0.85 }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(to top, rgba(30,30,30,1) 0%, transparent 100%)",
                }}
              />
            </div>

            {/* Modal Content */}
            <div style={{ padding: "2rem" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E8843A",
                  background: "rgba(232,132,58,0.12)",
                  border: "1px solid rgba(232,132,58,0.25)",
                  padding: "0.2rem 0.5rem",
                  marginBottom: "0.75rem",
                }}
              >
                {selectedProject.category}
              </span>
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: "1.75rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "#FFFFFF",
                  marginBottom: "1rem",
                }}
              >
                {selectedProject.title}
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "#A3A3A3",
                  marginBottom: "1.5rem",
                }}
              >
                {selectedProject.description}
              </p>

              <div style={{ width: "32px", height: "2px", background: "#E8843A", marginBottom: "1.25rem" }} />

              <h4
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#A3A3A3",
                  marginBottom: "0.75rem",
                }}
              >
                Project Details
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {selectedProject.details.map((detail) => (
                  <li
                    key={detail}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "#D4D4D4",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        background: "#E8843A",
                        flexShrink: 0,
                      }}
                    />
                    {detail}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "2rem" }}>
                <a
                  href="#contact"
                  onClick={() => setModalOpen(false)}
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
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#d4722e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#E8843A";
                  }}
                >
                  Request a Similar Project
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .gallery-grid > div:first-child {
            grid-column: auto !important;
            grid-row: auto !important;
            height: 300px;
          }
          .gallery-grid > div:not(:first-child) {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
