export interface Skill {
  id: string;
  name: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  mediaUrl: string; // Replaces imageUrl to support video
  mediaType: 'image' | 'video';
  liveUrl?: string;
  githubUrl?: string;
}

export interface PortfolioData {
  name: string;
  profilePictureUrl: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  socialLinks: SocialLink[];
  contact: {
    email: string;
    whatsapp: string;
  };
}