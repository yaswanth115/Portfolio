import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Multi-Agent RAG System with MCP Integration',
    category: 'Generative AI',
    emoji: '🤖',
    color: '#6366f1',
    description:
      'A production-ready Multi-Agent Retrieval-Augmented Generation system using LangGraph to dynamically route user queries across document knowledge base, real-time web search, structured memory, and direct LLM responses.',
    highlights: [
      'Hybrid search pipeline combining FAISS vector similarity with BM25 keyword scoring for large PDFs (50+ pages)',
      'Integrated Groq (LLaMA 3) as the primary LLM with intelligent query classification',
      'Full-stack: FastAPI backend + single-page HTML/CSS/JS frontend with session-based chat',
      'Supports document upload, DuckDuckGo MCP-style web search, and real-time streaming',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph', 'Groq (LLaMA 3)', 'FAISS', 'BGE Embeddings', 'BM25', 'DuckDuckGo MCP'],
    github: 'https://github.com/yaswanth115',
  },
  {
    id: 2,
    title: 'AI-Powered Job-Specific Cold Email Generator',
    category: 'Generative AI',
    emoji: '✉️',
    color: '#8b5cf6',
    description:
      'An AI-powered tool that automatically generates personalized cold emails by extracting details directly from job posting links, leveraging OpenAI GPT for context-aware, professional email crafting.',
    highlights: [
      'Extracts job details directly from job posting URLs provided by the user',
      'Integrates OpenAI GPT LLM to analyze job descriptions and generate tailored emails',
      'Enhances recruitment outreach efficiency with role-specific, professional communication',
    ],
    tags: ['Python', 'OpenAI GPT', 'LangChain', 'ChromaDB', 'Streamlit'],
    github: 'https://github.com/yaswanth115',
  },
  {
    id: 3,
    title: 'Restaurant Rating Forecasting Model',
    category: 'Machine Learning',
    emoji: '🍽️',
    color: '#10b981',
    description:
      'A machine learning model to predict restaurant ratings through comprehensive data cleaning, feature engineering, and exploratory data analysis on restaurant attributes and reviews.',
    highlights: [
      'Implemented Random Forest, Gradient Boosting, and Linear Regression models',
      'Achieved 92% prediction accuracy through systematic hyperparameter tuning',
      'Comprehensive EDA and feature engineering on restaurant attributes and reviews',
    ],
    tags: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'EDA', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/yaswanth115',
  },
  {
    id: 4,
    title: 'Deep Learning Model for Household Energy Forecasting',
    category: 'Deep Learning',
    emoji: '⚡',
    color: '#f59e0b',
    description:
      'A deep learning model using Keras and TensorFlow to predict household electricity consumption with comprehensive data preprocessing and feature engineering.',
    highlights: [
      'Achieved 95% prediction accuracy using neural networks',
      'Performed comprehensive data cleaning, preprocessing, and feature engineering',
      'Neural network architecture optimized for time-series energy consumption data',
    ],
    tags: ['Python', 'Keras', 'TensorFlow', 'Pandas', 'EDA', 'Matplotlib', 'Scikit-learn', 'XGBoost'],
    github: 'https://github.com/yaswanth115',
  },
];

const categories = ['All', 'Generative AI', 'Machine Learning', 'Deep Learning'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Real-world AI and data engineering solutions — from RAG pipelines to deep learning models.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`project-card glass-card ${expanded === project.id ? 'expanded' : ''}`}
              style={{ '--card-color': project.color }}
            >
              {/* Card top accent */}
              <div className="card-accent" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

              <div className="project-card-inner">
                {/* Header */}
                <div className="project-header">
                  <div className="project-emoji">{project.emoji}</div>
                  <div>
                    <span className="project-category" style={{ color: project.color }}>
                      {project.category}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="project-desc">{project.description}</p>

                {/* Highlights */}
                <ul className={`project-highlights ${expanded === project.id ? 'show' : ''}`}>
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="check-icon" style={{ color: project.color }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Toggle */}
                <button
                  className="expand-btn"
                  style={{ color: project.color }}
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? 'Show less ↑' : 'Show more ↓'}
                </button>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="project-tag"
                      style={{ borderColor: `${project.color}30`, color: project.color, background: `${project.color}10` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
