import React, { useState, useEffect } from "react";
import {
  Terminal,
  Code,
  Server,
  Database,
  Zap,
  Gamepad2,
  Brain,
  Rocket,
  Coffee,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const ImageCarousel = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${title} screenshot ${idx + 1}`}
            onClick={() => onImageClick(img)}
            style={{ cursor: 'zoom-in' }}
          />
        ))}
      </div>
      
      {images.length > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
            <ChevronLeft size={20} />
          </button>
          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
            <ChevronRight size={20} />
          </button>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => goToSlide(e, idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const CyberpunkProjects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [scanningPhase, setScanningPhase] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Empty projects array - no projects to display
  const projects = [
    {
      id: 8,
      title: "OYSAA — Signage & Advertisement Agency",
      description:
        "A full-stack government platform for the Oyo State Signage and Advertisement Agency. Digitizes the entire advertisement lifecycle — application, approval, licensing, compliance, and revenue tracking — across 6 distinct portals with role-based access control, GIS mapping, QR code enforcement, and PWA support for field officers.",
      images: [
        "/assets/images/oysaa-landing.png",
        "/assets/images/oysaa-dashboard.png",
        "/assets/images/oysaa-users.png",
        "/assets/images/oysaa-transactions.png",
        "/assets/images/oysaa-assets.png",
      ],
      category: "dev",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "MUI",
        "Tailwind CSS",
        "Zustand",
        "SWR",
        "Leaflet",
        "Recharts",
        "PWA",
      ],
      github: null,
      liveDemo: "https://oysaa-ng.com/",
    },
    {
      id: 1,
      title: "Eccommerce",
      description:
        "Eccommerce Website: A sleek and dynamic online store featuring a multilingual, multi-currency interface with rich product categories—ranging from electronics and fashion to beauty and accessories.",
      image: "/assets/images/AnonEccommerce.png",
      category: "dev",
      technologies: ["CSS", "js"],
      github: "https://github.com/Kolade1024/ecommerce_website",
      liveDemo: "https://ecommerce-website-seven-dusky.vercel.app/",
    },
    {
      id: 2,
      title: "Grilli Restaurant",
      description:
        "A modern, responsive restaurant website built with clean design and intuitive navigation. It showcases menus, chef profiles, customer testimonials, and a reservation system, providing an elegant digital experience for diners.",
      image: "/assets/images/Grilli.png",
      category: "dev",
      technologies: ["HTML", "CSS", "js"],
      github: "https://github.com/Mercy1024/Grilli-Restaurant",
      liveDemo: "https://grilli-restaurant-gamma.vercel.app/",
    },
    {
      id: 3,
      title: "Skin Care Eccommerce",
      description:
        "A modern e-commerce site designed for a skincare brand, featuring clean layouts, engaging product showcases, and promotional highlights like discounts and seasonal collections. The site provides an intuitive shopping experience with clear navigation, bestseller sections, and strong calls-to-action.",
      image: "/assets/images/ruby.png",
      category: "dev",
      technologies: ["HTML", "CSS", "js"],
      github: "https://github.com/Mercy1024/Glowing",
      liveDemo: "https://glowing-ruby.vercel.app/",
    },
    {
      id: 4,
      title: "AI Applicant Tracking System",
      description:
        " AI-powered Resume Analyzer with React, React Router, and Puter.js! With seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.",
      image: "/assets/images/Job-Details-Page.png",
      category: "dev",
      technologies: [
        "React",
        "React Router",
        "Puter.js",
        "Tailwind CSS",
        "Typescript",
        "Vite",
        "Zustand",
      ],
      github: "https://github.com/Mercy1024/AI--APPLICANT-TRACKING-SYSTEM",
      liveDemo: "https://ai-applicant-tracking-system-lovat.vercel.app/",
    },
    {
      id: 5,
      title:
        " BVN & NIN verification with facial recognition technology system",
      description:
        "Secure Identity Verification SDKs Fast and reliable BVN & NIN verification with facial recognition technology for your applications.",
      image: "/assets/images/SprintCheck.png",
      category: "dev",
      technologies: ["React", "React Router", "Vanilla CSS", "Vite"],
      github: "https://github.com/5Star-Inn-Company-Frontend/Sprint-Check",
      liveDemo: "https://sprint-check.dev.5starcompany.com.ng/",
    },
    {
      id: 6,
      title: "GTA VI",
      description: "GTA VI Landing Page",
      image: "/assets/images/gta.png",
      category: "dev",
      technologies: ["React", "React Router", "Vanilla CSS", "Vite"],
      github: "hhttps://github.com/Mercy1024/GTA-VI",
      liveDemo: "https://gta-vi-seven-fawn.vercel.app/",
    },

    {
      id: 7,
      title: "XORA",
      description: "SaaS Landing Page",
      image: "/assets/images/xora.png",
      category: "dev",
      technologies: ["React", "React Router", "Vanilla CSS", "Vite"],
      github: "https://github.com/Mercy1024/SaasLandingPage",
      liveDemo: "https://saas-landing-page-5ifo.vercel.app/",
    },
  ];

  useEffect(() => {
    const phases = [
      "Initializing quantum scanner...",
      "Scanning neural pathways...",
      "Detecting creative algorithms...",
      "Searching project database...",
      "Analyzing code repositories...",
      "Checking backup servers...",
      "Scanning parallel dimensions...",
      "ERROR: Projects not found",
      "FINAL_RESULT: Zero projects detected",
    ];

    const interval = setInterval(() => {
      setScanningPhase((prev) => {
        if (prev < phases.length - 1) {
          return prev + 1;
        } else {
          setShowMessage(true);
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const scanningMessages = [
    "Initializing quantum scanner...",
    "Scanning neural pathways...",
    "Detecting creative algorithms...",
    "Searching project database...",
    "Analyzing code repositories...",
    "Checking backup servers...",
    "Scanning parallel dimensions...",
    "ERROR: Projects not found",
    "FINAL_RESULT: Zero projects detected",
  ];

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  // Category icon mapping with more exciting icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "ai":
        return <Brain size={16} />;
      case "gaming":
        return <Gamepad2 size={16} />;
      case "blockchain":
        return <Database size={16} />;
      case "creative":
        return <Zap size={16} />;
      case "vr":
        return <Rocket size={16} />;
      case "experimental":
        return <Terminal size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="cyber-projects">
      <div className="cyber-grid"></div>
      <div className="floating-particles"></div>

      <div className="cyber-container">
        {/* Section header */}
        <div className="cyber-header">
          <div className="title-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>

            <h2 className="cyber-title">
              <span className="title-prefix">./execute</span>
              <span className="title-main">project.scan</span>
            </h2>
          </div>

          <p className="cyber-subtitle">
            &gt; {scanningMessages[scanningPhase]}
          </p>
        </div>

        {/* Project navigation */}
        <div className="cyber-tabs">
          <button
            className={`cyber-tab ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            <Terminal size={16} />
            <span>all_projects</span>
          </button>

          <button
            className={`cyber-tab ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            <Brain size={16} />
            <span>neural_ai</span>
          </button>

          <button
            className={`cyber-tab ${activeTab === "gaming" ? "active" : ""}`}
            onClick={() => setActiveTab("gaming")}
          >
            <Gamepad2 size={16} />
            <span>quantum_games</span>
          </button>

          <button
            className={`cyber-tab ${activeTab === "creative" ? "active" : ""}`}
            onClick={() => setActiveTab("creative")}
          >
            <Zap size={16} />
            <span>creative_tech</span>
          </button>

          <button
            className={`cyber-tab ${activeTab === "vr" ? "active" : ""}`}
            onClick={() => setActiveTab("vr")}
          >
            <Rocket size={16} />
            <span>immersive_vr</span>
          </button>

          <button
            className={`cyber-tab ${activeTab === "experimental" ? "active" : ""
              }`}
            onClick={() => setActiveTab("experimental")}
          >
            <Code size={16} />
            <span>experimental</span>
          </button>
        </div>

        {/* Projects grid */}
        <div className="projects-container">
          <div className="projects-count">
            <span className="count-indicator">{filteredProjects.length}</span>
            <span className="count-label">projects detected</span>
          </div>

          {/* Developer joke empty state */}

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects?.map((project) => (
                <div key={project.id} className="project-card">
                  {project.images ? (
                    <ImageCarousel
                      images={project.images}
                      title={project.title}
                      onImageClick={setSelectedImage}
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      onClick={() => setSelectedImage(project.image)}
                      style={{ cursor: 'zoom-in' }}
                    />
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-list">
                    {project?.technologies?.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                  <div className="links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : !showMessage ? (
            <div className="scanning-state">
              <div className="scanner-animation">
                <div className="scanner-line"></div>
              </div>
              <div className="scanning-text">
                <Terminal size={32} className="scanning-icon" />
                <p>SCANNING IN PROGRESS...</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(scanningPhase / 8) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-projects">
              <div className="empty-icon-container">
                <Code size={64} className="warning-icon" />
                <div className="glitch-text">// TODO: Add projects</div>
              </div>

              <div className="joke-message">
                <h3>99 little bugs in the code... 🐛</h3>
                <p>99 little bugs in the code,</p>
                <p>99 little bugs!</p>
                <p>Take one down, patch it around,</p>
                <p className="punchline">117 little bugs in the code! 😅</p>
              </div>

              <div className="dev-truth">
                <Coffee size={24} />
                <div className="truth-text">
                  <p>
                    <strong>Developer Status:</strong> Currently debugging why
                    there are no projects to show
                  </p>
                  <p>
                    <strong>Stack Overflow visits today:</strong> ∞
                  </p>
                  <p>
                    <strong>Coffee level:</strong> Dangerously low ☕
                  </p>
                </div>
              </div>

              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        {/* Fullscreen Lightbox */}
        {selectedImage && (
          <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={32} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Fullscreen preview" />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Project Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        /* Project Card */
        .project-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(6, 255, 165, 0.2);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 20px rgba(6, 255, 165, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 30px rgba(6, 255, 165, 0.4);
        }

        /* Project Image */
        .project-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          filter: brightness(0.8);
          transition: filter 0.3s ease;
        }

        .project-card:hover img {
          filter: brightness(1);
        }

        /* Carousel Styles */
        .carousel-container {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
        }

        .carousel-track img {
          min-width: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.6);
          color: #06ffa5;
          border: 1px solid rgba(6, 255, 165, 0.3);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s ease;
          opacity: 0;
        }

        .project-card:hover .carousel-btn {
          opacity: 1;
        }

        .carousel-btn:hover {
          background: rgba(6, 255, 165, 0.2);
          border-color: #06ffa5;
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-btn.prev { left: 10px; }
        .carousel-btn.next { right: 10px; }

        .carousel-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 10;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .carousel-dot.active {
          background: #06ffa5;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(6, 255, 165, 0.5);
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
          cursor: zoom-out;
        }

        .lightbox-close {
          position: absolute;
          top: 30px;
          right: 30px;
          background: none;
          border: none;
          color: #06ffa5;
          cursor: pointer;
          transition: transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-close:hover {
          transform: scale(1.2) rotate(90deg);
        }

        .lightbox-content {
          max-width: 90%;
          max-height: 90%;
          position: relative;
          cursor: default;
        }

        .lightbox-content img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border: 1px solid rgba(6, 255, 165, 0.2);
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
          animation: scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        /* Card Content */
        .project-card h3 {
          font-size: 1.4rem;
          margin: 1rem;
          color: #06ffa5;
        }

        .project-card p {
          font-size: 0.95rem;
          color: #94a3b8;
          margin: 0 1rem 1rem;
          line-height: 1.5;
        }

        /* Tech List */
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0 1rem 1rem;
        }

        .tech-list span {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.3rem 0.6rem;
          font-size: 0.8rem;
          color: #06ffa5;
          border-radius: 4px;
          font-family: "Courier New", monospace;
          transition: background 0.3s ease;
        }

        .tech-list span:hover {
          background: rgba(6, 255, 165, 0.1);
        }

        /* Links */
        .project-card .links {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-card .links a {
          text-decoration: none;
          color: #06ffa5;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          position: relative;
        }

        .project-card .links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 1px;
          background: #06ffa5;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: right;
        }

        .project-card .links a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Category Icon Overlay */
        .project-card::before {
          content: "ai";
          position: absolute;
          top: 10px;
          right: 10px;
          width: 35px;
          height: 35px;
          background: rgba(0, 255, 204, 0.1);
          border: 1px solid rgba(6, 255, 165, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #06ffa5;
          font-size: 1rem;
        }

        .cyber-projects {
          background: linear-gradient(
            135deg,
            #0a0e17 0%,
            #1a0b2e 50%,
            #16213e 100%
          );
          color: #d1e3ff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .cyber-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(
              rgba(0, 255, 204, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          opacity: 0.5;
          animation: gridPulse 4s ease-in-out infinite;
        }

        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(
              2px 2px at 20px 30px,
              #ff006e,
              transparent
            ),
            radial-gradient(2px 2px at 40px 70px, #06ffa5, transparent),
            radial-gradient(1px 1px at 90px 40px, #ff9500, transparent),
            radial-gradient(1px 1px at 130px 80px, #7209b7, transparent);
          background-size: 200px 200px;
          animation: float 20s linear infinite;
          opacity: 0.3;
          z-index: 0;
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
          }
        }

        .cyber-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }

        /* Enhanced header styling */
        .cyber-header {
          margin-bottom: 3rem;
          text-align: center;
        }

        .title-frame {
          display: inline-block;
          position: relative;
          padding: 1.5rem 2rem;
          margin: 0 auto 1rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
        }

        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid #ff006e;
          border-left: 2px solid #ff006e;
          animation: cornerGlow 2s ease-in-out infinite alternate;
        }

        .top-right {
          top: 0;
          right: 0;
          border-top: 2px solid #06ffa5;
          border-right: 2px solid #06ffa5;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 0.5s;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #ff9500;
          border-left: 2px solid #ff9500;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 1s;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #7209b7;
          border-right: 2px solid #7209b7;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 1.5s;
        }

        @keyframes cornerGlow {
          0% {
            opacity: 0.5;
            filter: brightness(1);
          }
          100% {
            opacity: 1;
            filter: brightness(1.5) drop-shadow(0 0 5px currentColor);
          }
        }

        .cyber-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title-prefix {
          display: block;
          font-size: 1rem;
          font-family: "Courier New", monospace;
          color: #06ffa5;
          margin-bottom: 0.5rem;
          opacity: 0.8;
          animation: typewriter 3s steps(30) infinite;
        }

        @keyframes typewriter {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0.5;
          }
        }

        .title-main {
          background: linear-gradient(
            90deg,
            #ff006e,
            #06ffa5,
            #ff9500,
            #7209b7
          );
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: gradientShift 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .cyber-subtitle {
          color: #94a3b8;
          font-family: "Courier New", monospace;
          margin-top: 1rem;
          animation: pulse 2s ease-in-out infinite;
          min-height: 1.5rem;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }

        /* Enhanced project tabs */
        .cyber-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 204, 0.1);
        }

        .cyber-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-family: "Courier New", monospace;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cyber-tab::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.5s;
        }

        .cyber-tab:hover::before {
          left: 100%;
        }

        .cyber-tab:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          transform: translateY(-2px);
        }

        .cyber-tab.active {
          background: linear-gradient(
            135deg,
            rgba(255, 0, 110, 0.1),
            rgba(6, 255, 165, 0.1)
          );
          color: #06ffa5;
          border-color: rgba(6, 255, 165, 0.3);
          box-shadow: 0 0 10px rgba(6, 255, 165, 0.2);
        }

        /* Projects count styling */
        .projects-count {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-family: "Courier New", monospace;
          justify-content: center;
        }

        .count-indicator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: linear-gradient(
            135deg,
            rgba(255, 0, 110, 0.1),
            rgba(255, 0, 110, 0.2)
          );
          color: #ff006e;
          border: 1px solid rgba(255, 0, 110, 0.3);
          border-radius: 50%;
          font-weight: 600;
          animation: countPulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
        }

        @keyframes countPulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 0, 110, 0.4);
          }
        }

        .count-label {
          color: #94a3b8;
          font-weight: 400;
        }

        /* Scanning state */
        .scanning-state {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          );
          border: 1px solid rgba(6, 255, 165, 0.2);
          border-radius: 8px;
          margin-top: 2rem;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .scanner-animation {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border: 2px solid rgba(6, 255, 165, 0.3);
          border-radius: 50%;
        }

        .scanner-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 80px;
          background: linear-gradient(to bottom, #06ffa5, transparent);
          transform-origin: bottom center;
          transform: translate(-50%, -100%) rotate(0deg);
          animation: scan 2s linear infinite;
        }

        @keyframes scan {
          0% {
            transform: translate(-50%, -100%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -100%) rotate(360deg);
          }
        }

        .scanning-text {
          color: #06ffa5;
          font-family: "Courier New", monospace;
        }

        .scanning-icon {
          margin-bottom: 1rem;
          animation: pulse 1s ease-in-out infinite;
        }

        .progress-bar {
          width: 100%;
          max-width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin: 1rem auto;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #06ffa5, #ff006e);
          border-radius: 2px;
          transition: width 0.5s ease;
        }

        /* Funny empty state */
        .no-projects {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.5)
          );
          border: 1px solid rgba(255, 0, 110, 0.2);
          border-radius: 8px;
          margin-top: 2rem;
          backdrop-filter: blur(10px);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .empty-icon-container {
          margin-bottom: 2rem;
        }

        .warning-icon {
          color: #06ffa5;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .glitch-text {
          font-family: "Courier New", monospace;
          font-size: 1.2rem;
          color: #06ffa5;
          animation: glitch 2s ease-in-out infinite;
          text-shadow: 1px 0 #ff006e, -1px 0 #ff9500;
        }

        @keyframes glitch {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-1px);
          }
          40% {
            transform: translateX(1px);
          }
          60% {
            transform: translateX(-1px);
          }
          80% {
            transform: translateX(1px);
          }
        }

        .joke-message {
          margin: 2rem 0;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border-left: 4px solid #ff006e;
        }

        .joke-message h3 {
          color: #ff006e;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .joke-message p {
          color: #94a3b8;
          margin-bottom: 0.3rem;
          line-height: 1.6;
          font-family: "Courier New", monospace;
        }

        .punchline {
          color: #06ffa5 !important;
          font-weight: bold;
          font-size: 1.1em;
          animation: pulse 2s ease-in-out infinite;
        }

        .dev-truth {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin: 2rem 0;
          padding: 1.5rem;
          background: linear-gradient(
            135deg,
            rgba(255, 149, 0, 0.1),
            rgba(255, 149, 0, 0.05)
          );
          border: 1px solid rgba(255, 149, 0, 0.3);
          border-radius: 8px;
          text-align: left;
        }

        .dev-truth svg {
          color: #ff9500;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .truth-text p {
          color: #94a3b8;
          margin-bottom: 0.5rem;
          line-height: 1.5;
          font-family: "Courier New", monospace;
        }

        /* Remove unused styles */

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #06ffa5;
          border-radius: 50%;
          animation: loadingDots 1.5s ease-in-out infinite;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes loadingDots {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          30% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .cyber-tabs {
            justify-content: center;
          }

          .cyber-title {
            font-size: 2rem;
          }

          .motivation-box {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .cyber-title {
            font-size: 1.75rem;
          }

          .no-projects {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkProjects;
