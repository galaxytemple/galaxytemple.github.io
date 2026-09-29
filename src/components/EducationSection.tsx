import React from 'react';
import { EducationItem } from '../types/portfolio';

interface EducationSectionProps {
  items: EducationItem[];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ items }) => {
  return (
    <section id="education" className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
      </div>

      <div className="education-container">
        {items.map((item) => (
          <div key={item.id} className="education-item-card">
            <div className="education-top-bar">
              <h3 className="edu-school-name">{item.institution}</h3>
              <span className="edu-meta-text">
                {item.location} • {item.period}
              </span>
            </div>

            <p className="edu-degree-title">{item.degree}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
