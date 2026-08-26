import React, { useContext } from "react";
import "./Services.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const services = [
  {
    icon: "⚛️",
    title: "Full Stack Development",
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.1)",
    border: "rgba(97,218,251,0.3)",
    desc: "End-to-end web applications using React.js, Next.js, Node.js, NestJS, and Express.js — from pixel-perfect UI to scalable backend APIs.",
    tags: ["React.js", "Next.js", "Node.js", "NestJS", "TypeScript"],
  },
  {
    icon: "🐍",
    title: "Python & FastAPI Backend",
    color: "#4B8BBE",
    bg: "rgba(75,139,190,0.1)",
    border: "rgba(75,139,190,0.3)",
    desc: "High-performance REST APIs and microservices with Python and FastAPI, including data processing pipelines, async services, and server-side automation.",
    tags: ["Python", "FastAPI", "REST APIs", "Microservices", "Async"],
  },
  {
    icon: "🤖",
    title: "AI Engineering & LLMs",
    color: "#B794F4",
    bg: "rgba(183,148,244,0.1)",
    border: "rgba(183,148,244,0.3)",
    desc: "Production AI systems — RAG pipelines, LangGraph agentic workflows, LLM-powered chatbots, OCR, document intelligence, and conversational AI using OpenAI, Claude, Qwen, and AWS Bedrock.",
    tags: ["RAG", "LangGraph", "Agentic AI", "LLMs", "Chatbots", "LangChain"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    color: "#FCA61F",
    bg: "rgba(252,166,31,0.1)",
    border: "rgba(252,166,31,0.3)",
    desc: "Scalable cloud deployments on AWS (EC2, S3, Lambda, EKS, RDS, API Gateway) with automated CI/CD pipelines using GitHub Actions and GitLab CI.",
    tags: ["AWS", "CI/CD", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    icon: "🗄️",
    title: "Database Design",
    color: "#68D391",
    bg: "rgba(104,211,145,0.1)",
    border: "rgba(104,211,145,0.3)",
    desc: "Schema design, query optimization, indexing, and caching strategies across PostgreSQL, MongoDB, Redis, DynamoDB, Supabase, and Firebase.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "Supabase"],
  },
  {
    icon: "🔗",
    title: "API & Third-Party Integrations",
    color: "#4FD1C5",
    bg: "rgba(79,209,197,0.1)",
    border: "rgba(79,209,197,0.3)",
    desc: "Seamless integrations with payment gateways, communication platforms, analytics, and cloud services to power complete business workflows.",
    tags: ["Stripe", "Twilio", "Mailgun", "GraphQL", "WebSockets"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, type: "spring" } },
};

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="services-section" id="services">
      {/* Header */}
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="services-label">What I Offer</span>
        <h2 className="services-title" style={{ color: darkMode ? "white" : "" }}>
          My <span className="services-highlight">Services</span>
        </h2>
        <p className="services-sub" style={{ color: darkMode ? "#aaa" : "" }}>
          From React frontends to Python backends, AI-powered pipelines, and
          cloud infrastructure — I deliver complete, production-ready solutions.
        </p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {services.map((svc) => (
          <motion.div
            key={svc.title}
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -8, boxShadow: "0 28px 56px rgba(0,0,0,0.18)" }}
            style={{
              background: darkMode ? "rgba(255,255,255,0.05)" : svc.bg,
              borderColor: darkMode ? "rgba(255,255,255,0.1)" : svc.border,
            }}
          >
            <div
              className="service-icon-wrap"
              style={{ background: svc.color + "22" }}
            >
              <span className="service-icon">{svc.icon}</span>
            </div>

            <h3
              className="service-card-title"
              style={{ color: svc.color }}
            >
              {svc.title}
            </h3>

            <p
              className="service-card-desc"
              style={{ color: darkMode ? "#cbd5e0" : "#4a5568" }}
            >
              {svc.desc}
            </p>

            <div className="service-tags">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="service-tag"
                  style={{
                    borderColor: svc.color + "55",
                    color: darkMode ? "#e2e8f0" : "#374151",
                    background: darkMode ? "rgba(255,255,255,0.07)" : "white",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative blurs */}
      <div className="srv-blur srv-blur--tl" />
      <div className="srv-blur srv-blur--br" />
    </section>
  );
};

export default Services;
