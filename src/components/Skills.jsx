import './Skills.css';

const skillCategories = [
  {
    id: 'languages',
    icon: '⌨️',
    title: 'Languages',
    color: '#6366f1',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 88 },
    ],
  },
  {
    id: 'ai-ml',
    icon: '🧠',
    title: 'AI & Machine Learning',
    color: '#8b5cf6',
    skills: [
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'Deep Learning (CNN, RNN)', level: 82 },
      { name: 'NLP', level: 80 },
    ],
  },
  {
    id: 'gen-ai',
    icon: '✨',
    title: 'Generative AI',
    color: '#f59e0b',
    skills: [
      { name: 'RAG Architecture', level: 88 },
      { name: 'LLM Fine-tuning', level: 80 },
      { name: 'Hugging Face Transformers', level: 82 },
      { name: 'LangChain / LangGraph', level: 84 },
    ],
  },
  {
    id: 'data-eng',
    icon: '🗄️',
    title: 'Data Engineering',
    color: '#10b981',
    skills: [
      { name: 'Apache Airflow', level: 85 },
      { name: 'Google BigQuery', level: 87 },
      { name: 'PostgreSQL / MySQL', level: 88 },
      { name: 'Pandas / DataFlow', level: 90 },
    ],
  },
  {
    id: 'deployment',
    icon: '🚀',
    title: 'Deployment & APIs',
    color: '#3b82f6',
    skills: [
      { name: 'FastAPI / Flask', level: 87 },
      { name: 'Docker', level: 80 },
      { name: 'Google Cloud Platform', level: 84 },
      { name: 'Cloud Run / App Engine', level: 82 },
    ],
  },
  {
    id: 'viz',
    icon: '📊',
    title: 'Visualization',
    color: '#ec4899',
    skills: [
      { name: 'Power BI', level: 82 },
      { name: 'Apache Superset', level: 80 },
      { name: 'DASH / Matplotlib', level: 78 },
    ],
  },
];

const techTags = [
  'Python', 'SQL', 'TensorFlow', 'Keras', 'Scikit-learn', 'RAG', 'LangGraph',
  'Hugging Face', 'FastAPI', 'Flask', 'Docker', 'BigQuery', 'Airflow',
  'PostgreSQL', 'GCP', 'Power BI', 'FAISS', 'LLM', 'OpenAI GPT', 'NLP',
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Expertise</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider" />
          <p className="section-desc">
            A diverse toolkit spanning data engineering, machine learning, and generative AI.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-card glass-card">
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-category" style={{ color: cat.color }}>
                  {cat.title}
                </h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span>{skill.name}</span>
                      <span className="skill-bar-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          '--fill-width': `${skill.level}%`,
                          '--bar-color': cat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="tech-cloud">
          <p className="tech-cloud-title">Tech Stack at a glance</p>
          <div className="tech-tags">
            {techTags.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
