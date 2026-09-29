import React from 'react';
import {
  profileData,
  experienceData,
  caseStudiesData,
  educationData,
  awardsData,
} from './data/portfolioData';

import { Header } from './components/Header';
import { SectionNav } from './components/SectionNav';
import { ExperienceSection } from './components/ExperienceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { EducationSection } from './components/EducationSection';
import { AwardsSection } from './components/AwardsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      {/* Full-width sticky bar fixed at the top with name on left & bottom border */}
      <SectionNav name={profileData.name} />

      <main className="main-content">
        <div className="cv-container">
          <Header profile={profileData} />
          <ExperienceSection items={experienceData} />
          <CaseStudiesSection items={caseStudiesData} />
          <EducationSection items={educationData} />
          <AwardsSection items={awardsData} />
        </div>
      </main>

      <Footer name={profileData.name} />
    </div>
  );
};

export default App;
