import "./Home.css";
import profilePic from "../assets/profile.png";

const skills = [
  {
    category: "Languages",
    items: [
      "C",
      "Python",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "MATLAB",
      "MySQL",
    ],
  },
  {
    category: "Tools & Frameworks",
    items: ["LangChain", "Keras", "PyTorch", "Neo4j", "Chroma", "Git"],
  },
  { category: "Certifications", items: ["IBM AI Engineering (Coursera)"] },
];

const researchInterests = [
  {
    icon: "🧠",
    title: "NLP & Knowledge Graphs",
    desc: "Extracting structured knowledge from unstructured biomedical text using transformer-based models.",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    desc: "Image classification and segmentation with CNNs and Vision Transformers on real-world datasets.",
  },
  {
    icon: "🤖",
    title: "Generative AI & RAG",
    desc: "Building retrieval-augmented generation systems for intelligent document Q&A using LLMs.",
  },
  {
    icon: "📊",
    title: "Machine Learning",
    desc: "End-to-end ML pipelines with evaluation metrics, model comparison, and performance optimization.",
  },
];

const education = [
  {
    institution: "Mahindra University",
    degree: "B.Tech, Computer Science Engineering",
    period: "Aug 2023 – Present",
    score: "CGPA: 8.5 / 10",
    icon: "🎓",
  },
  {
    institution: "Narayana Junior College (TSBIE)",
    degree: "Intermediate (MPC)",
    period: "Jun 2021 – May 2023",
    score: "94%",
    icon: "🏫",
  },
  {
    institution: "FIITJEE World School (SSC)",
    degree: "10th Grade",
    period: "2021",
    score: "Grade: 10",
    icon: "📚",
  },
];

function Home() {
  return (
    <main className="home">
      {/* Hero / About */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-label">— Computer Science Engineer</p>
          <h1 className="hero-name">
            Deeti Laxmi Chandra
            <br />
            <span className="hero-name-accent">Siddharth</span>
          </h1>
          <p className="hero-bio">
            B.Tech CSE student at <strong>Mahindra University</strong> (CGPA
            8.5/10), passionate about AI/ML, knowledge graphs, and building
            intelligent systems. 250+ LeetCode problems solved.
          </p>
          <div className="hero-cta">
            <a
              href="https://github.com/D-L-C-S"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              GitHub Profile
            </a>
            <a
              href="https://linkedin.com/in/siddharth-deeti"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/u/Dlcs-/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LeetCode
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <img src={profilePic} alt="Siddharth" className="avatar-photo" />
            </div>
          </div>
          <div className="avatar-badge">
            <span>💡</span> Tech Enthusiast
          </div>
        </div>
      </section>

      {/* Personal Details */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">01.</span> Personal Details
        </h2>
        <div className="details-grid">
          <div className="detail-card">
            <span className="detail-icon">👤</span>
            <div>
              <p className="detail-label">Full Name</p>
              <p className="detail-value">Deeti Laxmi Chandra Siddharth</p>
            </div>
          </div>
          <div className="detail-card">
            <span className="detail-icon">✉️</span>
            <div>
              <p className="detail-label">Personal Email</p>
              <p className="detail-value">siddharthdeeti06@gmail.com</p>
            </div>
          </div>
          <div className="detail-card">
            <span className="detail-icon">🏛️</span>
            <div>
              <p className="detail-label">College Email</p>
              <p className="detail-value">
                se23ucse053@mahindrauniversity.edu.in
              </p>
            </div>
          </div>
          <div className="detail-card">
            <span className="detail-icon">📍</span>
            <div>
              <p className="detail-label">Location</p>
              <p className="detail-value">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">02.</span> Education
        </h2>
        <div className="edu-list">
          {education.map((e, i) => (
            <div className="edu-card" key={i}>
              <span className="edu-icon">{e.icon}</span>
              <div className="edu-body">
                <div className="edu-top">
                  <h3 className="edu-institution">{e.institution}</h3>
                  <span className="edu-period">{e.period}</span>
                </div>
                <p className="edu-degree">{e.degree}</p>
                <span className="edu-score">{e.score}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Interests */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">03.</span> Research Interests
        </h2>
        <div className="interests-grid">
          {researchInterests.map((r, i) => (
            <div className="interest-card" key={i}>
              <span className="interest-icon">{r.icon}</span>
              <h3 className="interest-title">{r.title}</h3>
              <p className="interest-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">04.</span> Skills
        </h2>
        <div className="skills-container">
          {skills.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-group-title">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill, j) => (
                  <span className="skill-tag" key={j}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">05.</span> Contact
        </h2>
        <div className="contact-box">
          <p className="contact-text">
            Interested in collaborating or have a question? Feel free to reach
            out.
          </p>
          <div className="contact-links">
            <a
              href="mailto:siddharthdeeti06@gmail.com"
              className="contact-item"
            >
              <span className="contact-icon">✉️</span>
              <span>siddharthdeeti06@gmail.com</span>
            </a>
            <a
              href="mailto:se23ucse053@mahindrauniversity.edu.in"
              className="contact-item"
            >
              <span className="contact-icon">🏛️</span>
              <span>se23ucse053@mahindrauniversity.edu.in</span>
            </a>
            <a
              href="https://linkedin.com/in/siddharth-deeti"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <span className="contact-icon">🔗</span>
              <span>linkedin.com/in/siddharth-deeti</span>
            </a>
          </div>
          <a
            href="mailto:siddharthdeeti06@gmail.com"
            className="btn btn-primary contact-btn"
          >
            Send me an Email
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
