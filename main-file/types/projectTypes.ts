export interface Project {
    projectName: string;
    projectTagline: string;
    projectDescription?: string;
    projectCategory: {
      _id: string;
      name: string;
    };
    projectImage?: string;
    projectLink: string;
    projectOrder: number;
  }
  