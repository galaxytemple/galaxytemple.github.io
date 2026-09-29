import React from 'react';
import { AwardItem } from '../types/portfolio';

interface AwardsSectionProps {
  items: AwardItem[];
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ items }) => {
  return (
    <section id="awards" className="portfolio-section">
      <div className="section-header">
        <h2 className="section-title">Awards & Acknowledgements</h2>
      </div>

      <div className="awards-container">
        {items.map((award) => (
          <div key={award.id} className="award-item-card">
            <div className="award-top-bar">
              <h3 className="award-title">{award.title}</h3>
              <span className="award-meta-text">
                {award.organization}, {award.year}
              </span>
            </div>
            <p className="award-desc-text">{award.description}</p>
            {award.details && (
              <p className="award-details-text">{award.details}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
