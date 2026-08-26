import React, { useContext } from "react";
import "./Skills.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "#61DAFB",
    bg: "rgba(97, 218, 251, 0.12)",
    border: "rgba(97, 218, 251, 0.35)",
    skills: [
      "React.js", "Next.js", "TypeScript", "JavaScript ES6+",
      "Redux", "Zustand", "HTML5", "CSS3",
      "Tailwind CSS", "Bootstrap", "Material UI", "Vite",
      "Webpack", "Babel"
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "#68D391",
    bg: "rgba(104, 211, 145, 0.12)",
    border: "rgba(104, 211, 145, 0.35)",
    skills: [
      "Node.js", "NestJS", "Express.js", "Python",
      "FastAPI", "RESTful APIs", "GraphQL", "WebSocket",
      "Socket.IO", "WebHooks", "Microservices", "Serverless"
    ],
  },
  {
    title: "AI & LLM",
    icon: "🤖",
    color: "#B794F4",
    bg: "rgba(183, 148, 244, 0.12)",
    border: "rgba(183, 148, 244, 0.35)",
    skills: [
      "OpenAI", "ChatGPT", "Claude", "Qwen",
      "RAG", "LangChain", "OCR", "AI Automation",
      "Conversational AI", "Document Intelligence",
      "Embeddings", "Vector Search",
      "AWS Bedrock", "OpenSearch"
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    color: "#FCA61F",
    bg: "rgba(252, 166, 31, 0.12)",
    border: "rgba(252, 166, 31, 0.35)",
    skills: [
      "AWS EC2", "S3", "Lambda", "RDS",
      "API Gateway", "SES", "EKS", "Azure",
      "Google Cloud", "Vercel", "CI/CD",
      "GitHub Actions", "GitLab CI", "Jenkins",
      "Nginx", "PM2"
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    color: "#F6AD55",
    bg: "rgba(246, 173, 85, 0.12)",
    border: "rgba(246, 173, 85, 0.35)",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis",
      "DynamoDB", "Supabase", "Firebase",
      "Database Indexing", "Performance Optimization"
    ],
  },
  {
    title: "Integrations",
    icon: "🔗",
    color: "#4FD1C5",
    bg: "rgba(79, 209, 197, 0.12)",
    border: "rgba(79, 209, 197, 0.35)",
    skills: [
      "Stripe", "PayPal", "Twilio",
      "Mailgun", "Mailchimp", "SendGrid", "Filestack"
    ],
  },
  {
    title: "Security",
    icon: "🔐",
    color: "#FC8181",
    bg: "rgba(252, 129, 129, 0.12)",
    border: "rgba(252, 129, 129, 0.35)",
    skills: [
      "OAuth2", "JWT Authentication",
      "RBAC", "Secure API Development"
    ],
  },
  {
    title: "Tools & Methods",
    icon: "🛠️",
    color: "#76E4F7",
    bg: "rgba(118, 228, 247, 0.12)",
    border: "rgba(118, 228, 247, 0.35)",
    skills: [
      "Git", "GitHub", "Jira", "Slack",
      "Agile / Scrum", "Code Reviews",
      "Technical Leadership", "Responsive Design"
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, type: "spring" } },
};

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className="skills-section" id="skills">
      {/* Section heading */}
      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="skills-label">What I Know</span>
        <h2 className="skills-title" style={{ color: darkMode ? "white" : "" }}>
          Technical <span className="skills-highlight">Skills</span>
        </h2>
        <p className="skills-sub" style={{ color: darkMode ? "#aaa" : "" }}>
          10+ years of hands-on experience across the full stack — from pixel-perfect
          UIs to scalable backends, cloud infrastructure, and production AI systems.
        </p>
      </motion.div>

      {/* Grid of category cards */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.title}
            className="skill-card"
            variants={cardVariants}
            whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.18)" }}
            style={{
              background: darkMode ? "rgba(255,255,255,0.05)" : cat.bg,
              borderColor: darkMode ? "rgba(255,255,255,0.12)" : cat.border,
            }}
          >
            {/* Card header */}
            <div className="skill-card-header">
              <span className="skill-icon">{cat.icon}</span>
              <h3
                className="skill-category-title"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
            </div>

            {/* Skill badges */}
            <div className="skill-badges">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="skill-badge"
                  whileHover={{ scale: 1.08 }}
                  style={{
                    borderColor: cat.color + "55",
                    color: darkMode ? "#e2e8f0" : "#374151",
                    background: darkMode
                      ? "rgba(255,255,255,0.07)"
                      : "white",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative blurs */}
      <div className="skills-blur skills-blur--left" />
      <div className="skills-blur skills-blur--right" />
    </section>
  );
};

export default Skills;
