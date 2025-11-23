// types.ts
export interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  techList: string[];
}

export interface Resource {
  id: number;
  title: string;
  image: string;
  summary: string;
  link: string;
}

// data.ts
export const basicInfo = {
  name: 'Kyle Sontag',
  title: 'Full Stack Developer',
  bio: 'Full Stack Web Development student at Red River College',
  github: 'https://github.com/Kyle-Sontag',
  photo: '/profile.jpg',
};

export const workItems: WorkItem[] = [
  {
    id: 1,
    title: 'Component Library (Assignment 12-13)',
    description:
      'React TypeScript component library with Storybook, testing, and CI/CD.',
    image: '/projects/component-library.png',
    link: 'https://github.com/Kyle-Sontag/component-library',
    techList: ['React', 'TypeScript', 'Storybook', 'Docker', 'GitHub Actions'],
  },
];

export const skills = {
  description: 'Modern web development with React and DevOps focus.',
  languages: ['JavaScript', 'TypeScript', 'HTML/CSS', 'Python', 'SQL'],
  tools: ['React', 'Docker', 'Git', 'Storybook', 'Jest', 'VS Code'],
};

export const resources: Resource[] = [
  {
    id: 1,
    title: 'React Documentation',
    image: '/icons/react.png',
    summary: 'Official React documentation',
    link: 'https://react.dev',
  },
  {
    id: 2,
    title: 'TypeScript Handbook',
    image: '/icons/typescript.png',
    summary: 'Complete guide to TypeScript',
    link: 'https://www.typescriptlang.org/docs/',
  },
];

export const developerSetup = {
  vscode: ['ESLint', 'Prettier', 'Docker'],
  terminal: 'PowerShell',
};
