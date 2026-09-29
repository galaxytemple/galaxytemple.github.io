export interface ProfileInfo {
  name: string;
  title: string;
  tagline?: string;
  email: string;
  github: string;
  linkedin: string;
  medium?: string;
  pdfUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  tags?: string[];
  isDefaultOpen?: boolean;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  year: string;
  tagline: string;
  category?: string;
  publication?: string;
  articleUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  architecture: string;
  results: string[];
  learnings?: string;
}
export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  details?: string;
}
