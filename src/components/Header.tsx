import React, { useEffect, useState } from 'react';
import { ProfileInfo } from '../types/portfolio';

interface HeaderProps {
  profile: ProfileInfo;
}

export const Header: React.FC<HeaderProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
    setTheme(current);

    const observer = new MutationObserver(() => {
      const updated = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      setTheme(updated);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
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

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  return (
    <header className="hero-header animate-entry delay-1">
      <div className="hero-top-row">
        <div className="hero-identity">
          <h1>{profile.name}</h1>
          <p className="role-title">{profile.title}</p>
          <div className="status-pill">
            <span className="status-beacon"></span>
            <span>Available for opportunities</span>
          </div>
        </div>

        {/* Minimal theme toggle button for hero screen before sticky bar appears */}
        <button
          type="button"
          className="hero-theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

      {profile.tagline && <p className="hero-tagline">{profile.tagline}</p>}

      <div className="hero-actions-row">
        <div className="hero-primary-actions">
          {profile.pdfUrl && (
            <a
              href={profile.pdfUrl}
              className="btn-modern-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume / CV</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V8H8" />
              </svg>
            </a>
          )}

          <button
            type="button"
            className="btn-modern-ghost"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
          </button>
        </div>

        <div className="hero-social-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
          >
            <span>GitHub</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>

          <span style={{ color: 'var(--border-subtle)' }}>/</span>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link-item"
          >
            <span>LinkedIn</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </a>

          {profile.medium && (
            <>
              <span style={{ color: 'var(--border-subtle)' }}>/</span>
              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-item"
              >
                <span>Medium</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17l9.2-9.2M17 17V8H8" />
                </svg>
              </a>
            </>
          )}

          <span style={{ color: 'var(--border-subtle)' }}>/</span>

          <a
            href={`mailto:${profile.email}`}
            className="social-link-item"
          >
            <span>{profile.email}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
