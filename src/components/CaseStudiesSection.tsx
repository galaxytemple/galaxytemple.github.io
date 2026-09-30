import React, { useState } from 'react';
import { CaseStudyItem } from '../types/portfolio';

interface CaseStudiesSectionProps {
  items: CaseStudyItem[];
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ items }) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    return items.length > 0 ? new Set([items[0].id]) : new Set();
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
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
    <section id="case-studies" className="portfolio-section animate-entry delay-4">
      <div className="section-header">
        <h2 className="section-title">Case Studies</h2>
      </div>

      <div className="case-studies-container">
        {items.map((item) => {
          const isExpanded = expandedIds.has(item.id);

          return (
            <article
              key={item.id}
              className={`case-study-card ${isExpanded ? 'is-open' : ''}`}
            >
              <div className="case-study-meta-row">
                <div className="case-study-badge-group">
                  {item.category && (
                    <span className="cs-category-badge">{item.category}</span>
                  )}
                  {item.publication && (
                    <span className="cs-publication-badge">{item.publication}</span>
                  )}
                </div>
                <span className="case-study-year-badge">{item.year}</span>
              </div>

              <div className="case-study-header-row">
                <h3 className="case-study-title">{item.title}</h3>
              </div>

              <p className="case-study-tagline">{item.tagline}</p>


              <p className="case-study-overview-p">{item.overview}</p>

              <div className="case-study-actions-row">
                <button
                  type="button"
                  className="case-study-toggle-action"
                  onClick={() => toggleExpand(item.id)}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Hide case study' : 'View case study'}</span>
                  <span className="action-arrow">↓</span>
                </button>

                {item.articleUrl && (
                  <a
                    href={item.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-study-article-link"
                  >
                    <span>Read on {item.publication || 'Medium'}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V8H8" />
                    </svg>
                  </a>
                )}
              </div>

              <div className="expandable-grid">
                <div className="expandable-inner">
                  <div className="case-study-details-box">
                    <div className="cs-deep-dive-block">
                      <h4>The Challenge</h4>
                      <p>{item.challenge}</p>
                    </div>

                    <div className="cs-deep-dive-block">
                      <h4>The Solution & Approach</h4>
                      <p>{item.solution}</p>
                    </div>

                    <div className="cs-deep-dive-block">
                      <h4>Technical Architecture & Decisions</h4>
                      <p>{item.architecture}</p>
                    </div>

                    <div className="cs-deep-dive-block">
                      <h4>Impact & Outcomes</h4>
                      <ul>
                        {item.results.map((res, idx) => (
                          <li key={idx}>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {item.learnings && (
                      <div className="cs-deep-dive-block">
                        <h4>Key Learnings</h4>
                        {item.learnings.split('\n\n').map((para, idx) => (
                          <p key={idx}>{para}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
