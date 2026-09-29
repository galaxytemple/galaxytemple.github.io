import React, { useEffect, useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const SECTIONS: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
];

interface SectionNavProps {
  name: string;
}

export const SectionNav: React.FC<SectionNavProps> = ({ name }) => {
  const [activeSection, setActiveSection] = useState<string>('experience');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Sync theme
    const currentTheme = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
    setTheme(currentTheme);

    const handleThemeChange = () => {
      const updated = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      setTheme(updated);
    };

    window.addEventListener('storage', handleThemeChange);

    // Scroll listener: show top bar when scrolling down near 'experience' section
    const handleScroll = () => {
      const expEl = document.getElementById('experience');
      if (expEl) {
        // When experience section is about to reach the top (e.g. within 120px from top)
        const rect = expEl.getBoundingClientRect();
        setIsVisible(rect.top <= 120);
      } else {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setIsVisible(scrollY > 220);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // IntersectionObserver for section tabs active highlighting
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0,
    });

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('theme', nextTheme);
    } catch (e) {
      console.error(e);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky-top-bar ${isVisible ? 'is-visible' : 'is-hidden'}`}>
      <div className="sticky-bar-inner">
        {/* Left top: Name shown when bar appears */}
        <div className="sticky-left-slot">
          <button
            type="button"
            className="sticky-bar-brand"
            onClick={scrollToTop}
            title="Back to top"
            aria-label="Back to top"
          >
            <span className="sticky-brand-dot"></span>
            <span className="sticky-brand-name">{name}</span>
          </button>
        </div>

        {/* Right: Section Navigation Tabs & Theme Toggle */}
        <div className="sticky-right-slot">
          <nav className="sticky-nav-tabs" aria-label="Section Navigation">
            {SECTIONS.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`sticky-nav-tab-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <button
            type="button"
            className="sticky-theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
