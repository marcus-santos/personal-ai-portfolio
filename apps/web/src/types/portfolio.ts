export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  role:
    | 'Full Stack Developer'
    | 'Frontend Developer'
    | 'Backend Developer'
    | 'Mobile Developer';
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  startDate: string;
  endDate?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  current: boolean;
  description: string;
  technologies: string[];
  location?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description: string;
  image?: string;
  type: 'degree' | 'certificate' | 'course';
}

// Legacy interface for backward compatibility
export interface PortfolioData {
  projects: Project[];
  experiences: Experience[];
  education: Education[];
}

// Legacy interface for backward compatibility
export interface LocalizedPortfolioData {
  en: PortfolioData;
  pt: PortfolioData;
}
