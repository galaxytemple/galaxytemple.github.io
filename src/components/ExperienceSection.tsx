import React, { useState } from 'react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    items.forEach((item) => {
      if (item.isDefaultOpen) {
        initial.add(item.id);
      }
    });
    return initial;
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="portfolio-section animate-entry delay-3">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="experience-list">
        {items.map((item) => {
          const isOpen = openIds.has(item.id);

          return (
            <div
              key={item.id}
              className={`experience-card ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="experience-trigger-btn"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <div className="exp-main-col">
                  <div className="exp-company-line">
                    <span className="exp-company-name">{item.company}</span>
                  </div>
                  <span className="exp-role-title">{item.role}</span>
                </div>

                <div className="exp-meta-col">
                  <div className="exp-period-location">
                    <div>{item.period}</div>
                    <div>{item.location}</div>
                  </div>

                  <svg
                    className="exp-chevron-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              <div className="expandable-grid">
                <div className="expandable-inner">
                  <div className="exp-body-content">
                    <p className="exp-summary-text">{item.summary}</p>

                    <ul className="exp-achievements-list">
                      {item.achievements.map((achieve, idx) => (
                        <li key={idx}>
                          <span>{achieve}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tags && item.tags.length > 0 && (
                      <div className="tags-row">
                        {item.tags.map((tag) => (
                          <span key={tag} className="tag-chip">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
