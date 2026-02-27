import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Data Engineer',
    company: 'Knowillence Private Limited',
    location: 'Chennai',
    period: 'Aug 2024 – Present',
    type: 'Full-Time',
    color: '#6366f1',
    icon: '🏢',
    highlights: [
      'Built and maintained a cloud-based data warehouse on Google Cloud using BigQuery, Cloud Storage, Apache Airflow, and Cloud Run.',
      'Built a scalable ETL pipeline using Cloud Run to migrate PostgreSQL data to BigQuery with schema validation, automated table management, parallel processing, and data integrity checks.',
      'Developed parallel, fault-tolerant ETL jobs with retry mechanisms and row-count validation to ensure data accuracy.',
      'Scheduled Cloud Run ETL jobs using Cloud Scheduler to support automated, time-based batch processing.',
      'Designed and orchestrated ETL pipelines from SQL Server to PostgreSQL using Apache Airflow, enabling automated data movement and analytics reporting in Apache Superset.',
      'Implemented Change Data Capture (CDC) in SQL Server and orchestrated incremental ingestion workflows using Apache Airflow for near real-time data.',
      'Built and deployed a scalable Flask REST API with JWT authentication, RBAC permissions, and PostgreSQL (Cloud SQL) on Google Cloud.',
      'Developed a FastAPI-based backend with PostgreSQL, JWT authentication, role-based access control, and RESTful CRUD APIs with SQLAlchemy ORM.',
    ],
    tags: ['BigQuery', 'Cloud Run', 'Airflow', 'PostgreSQL', 'FastAPI', 'Flask', 'ETL', 'Docker'],
  },
  {
    id: 2,
    role: 'AI/ML Intern',
    company: 'Tems Tech Solutions',
    location: 'Chennai',
    period: 'Apr 2024 – Jun 2024',
    type: 'Internship',
    color: '#8b5cf6',
    icon: '🤖',
    highlights: [
      'Engineered a Virtual Hiring Chatbot using Generative AI by integrating OpenAI GPT LLM, which automates resume screening and generates tailored technical questions.',
      'Acquired and applied core machine learning fundamentals through structured training, gaining proficiency in data preprocessing, EDA, and feature selection for supervised and unsupervised learning.',
    ],
    tags: ['OpenAI GPT', 'LLM', 'NLP', 'Python', 'Machine Learning', 'EDA'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Building production-grade data and AI systems in real-world environments.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Connector dot */}
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}55` }}>
                <span>{exp.icon}</span>
              </div>

              <div className="exp-card glass-card">
                {/* Header */}
                <div className="exp-header">
                  <div>
                    <div className="exp-type-badge" style={{ color: exp.color, borderColor: `${exp.color}40`, background: `${exp.color}12` }}>
                      {exp.type}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {exp.period}
                    </span>
                    <span className="exp-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="exp-divider" style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

                {/* Highlights */}
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="exp-highlight-item">
                      <span className="highlight-dot" style={{ background: exp.color }} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="exp-tag" style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}10` }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
