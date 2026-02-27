import './Education.css';

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering (Data Science)',
    institution: 'Sri Venkateswara College of Engineering and Technology',
    location: 'Chittoor',
    period: '2020 – 2024',
    cgpa: '8.67',
    icon: '🎓',
    color: '#6366f1',
  },
];

const certifications = [
  {
    title: 'Data Analysis',
    issuer: 'Udemy',
    icon: '📊',
    color: '#f59e0b',
  },
  {
    title: 'Statistics for Business Analytics',
    issuer: 'L&T Edu Tech',
    icon: '📈',
    color: '#10b981',
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    issuer: 'Tems Tech Solutions',
    icon: '🤖',
    color: '#8b5cf6',
  },
];

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Certifications</h2>
          <div className="section-divider" />
          <p className="section-desc">
            Academic foundation and professional certifications backing the expertise.
          </p>
        </div>

        <div className="edu-layout">
          {/* Education */}
          <div className="edu-column">
            <h3 className="edu-column-title">
              <span className="edu-col-icon">🎓</span>
              Academic Education
            </h3>
            {education.map((edu, i) => (
              <div key={i} className="edu-card glass-card" style={{ '--edu-color': edu.color }}>
                <div className="edu-card-accent" style={{ background: edu.color }} />
                <div className="edu-card-body">
                  <div className="edu-badge" style={{ color: edu.color, background: `${edu.color}15` }}>
                    {edu.icon} {edu.degree}
                  </div>
                  <h4 className="edu-field">{edu.field}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-meta">
                    <span className="edu-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {edu.location}
                    </span>
                    <span className="edu-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {edu.period}
                    </span>
                    <span className="cgpa-badge" style={{ color: edu.color, background: `${edu.color}15`, border: `1px solid ${edu.color}40` }}>
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="edu-column">
            <h3 className="edu-column-title">
              <span className="edu-col-icon">🏆</span>
              Certifications
            </h3>
            <div className="cert-list">
              {certifications.map((cert, i) => (
                <div key={i} className="cert-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="cert-icon-wrap" style={{ background: `${cert.color}15`, color: cert.color }}>
                    <span>{cert.icon}</span>
                  </div>
                  <div className="cert-info">
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-issuer">Issued by {cert.issuer}</p>
                  </div>
                  <div className="cert-check" style={{ color: cert.color }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
