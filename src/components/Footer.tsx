import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-modern-footer">
      <div>
        <span>© {new Date().getFullYear()} {name}.</span>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="back-top-trigger"
        aria-label="Scroll to top"
      >
        <span>Back to top</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};
