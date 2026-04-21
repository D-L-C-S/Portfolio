import "./Projects.css";

const projects = [
  {
    title: "medRxiv Knowledge Graph",
    date: "Oct 2025",
    tags: ["NLP", "Python", "Neo4j"],
    emoji: "🔬",
    description:
      "Built an NLP pipeline to construct a biomedical knowledge graph from research abstracts. Performed entity and relation extraction using biomedical models, then exported graph data to Neo4j with visualization.",
    highlights: [
      "Entity & relation extraction from biomedical text",
      "Neo4j graph database integration",
      "Interactive graph visualization",
    ],
    github: "https://github.com/D-L-C-S/medRxiv-knowledge-graph",
    isCourseProject: false,
  },
  {
    title: "OPSD PowerDesk – Load Forecasting & Anomaly Detection",
    date: "2025",
    tags: ["SARIMA", "LSTM", "LightGBM", "Streamlit"],
    emoji: "⚡",
    description:
      "End-to-end time series pipeline on the Open Power System Dataset. Covers STL decomposition, SARIMA & neural (LSTM/GRU/RNN) day-ahead forecasting, Z-score + CUSUM anomaly detection, ML-based anomaly classification, and a live streaming simulation with online GRU fine-tuning.",
    highlights: [
      "24-step day-ahead forecasting with SARIMA & LSTM/GRU/RNN",
      "Z-score + CUSUM anomaly detection with LightGBM classifier",
      "Live streaming simulation with EWMA drift detection",
      "Interactive Streamlit monitoring dashboard",
    ],
    github:
      "https://github.com/D-L-C-S/OPSD-PowerDesk-Load-Forecasting-Anomaly-Detection",
    isCourseProject: false,
  },
  {
    title: "Satellite Land Classification",
    date: "Aug 2025",
    tags: ["CNN", "PyTorch", "Keras"],
    emoji: "🛰️",
    description:
      "Built an image classification pipeline using CNN models on satellite imagery. Evaluated performance with precision, recall, F1 score and confusion matrices, and compared CNN vs Vision Transformer approaches.",
    highlights: [
      "CNN and Vision Transformer comparison",
      "Precision, Recall, F1 & confusion matrix evaluation",
      "End-to-end PyTorch + Keras pipeline",
    ],
    github: null,
    isCourseProject: true,
  },
  {
    title: "RAG Q&A System",
    date: "Sep – Oct 2025",
    tags: ["LangChain", "Chroma", "LLMs"],
    emoji: "💬",
    description:
      "Built a document question answering system using LangChain. Implemented PDF ingestion and vector embeddings into ChromaDB, then developed a retriever-based chatbot for intelligent document Q&A.",
    highlights: [
      "PDF ingestion & vector embedding pipeline",
      "ChromaDB vector store integration",
      "LangChain retriever-based chatbot",
    ],
    github: null,
    isCourseProject: true,
  },
];

function Projects() {
  return (
    <main className="projects-page">
      <div className="projects-header">
        <p className="projects-label">— What I've Built</p>
        <h1 className="projects-heading">Projects</h1>
        <p className="projects-sub">
          A collection of AI/ML projects spanning NLP, computer vision, time
          series, and generative AI.
        </p>
      </div>

      <div className="projects-list">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="project-card-left">
              <div className="project-emoji">{project.emoji}</div>
              <div className="project-meta">
                <span className="project-date">{project.date}</span>
              </div>
            </div>
            <div className="project-card-body">
              <div className="project-top">
                <h2 className="project-title">{project.title}</h2>
                <div className="project-tags">
                  {project.tags.map((t, j) => (
                    <span className="project-tag" key={j}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className="project-actions">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.833 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.243 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                ) : (
                  <span className="course-badge">
                    🎓 IBM AI Engineering — Course Project
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
