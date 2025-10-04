import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
    {
        id: '1',
        title: 'SSQ Platform',
        description:
            "Designed from paper and pencil product and developed a workforce questionnaire and role mapping web app tool with interactive data map. Worked closely with our client to digitise his life's work",
        tags: [
            'React.js',
            'JavaScript',
            'Vite',
            'TanStack Query (React Query)',
            'React Testing Library',
            'Jest',
            'Figma',
            'Data visualisation',
            'Prototyping',
        ],
        image: '/ssq-platform.png',
        figmaUrl:
            'https://www.figma.com/proto/6UIEDn6O43cpYVzlA20RBh/SSQ---Role-Questionnaire?page-id=0%3A1&node-id=33-227&p=f&viewport=38%2C296%2C0.16&t=W9lK36SvlbdaYGW3-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A588',
        // demoUrl: 'https://example.com/demo1',
        // githubUrl: 'https://github.com/example/project1',
    },
    {
        id: '2',
        title: 'Coach Platform and ACE',
        description:
            'Coach Platform: The main reporting channel and participant management and leadership portal. Designed and implemented reports and features closely with our clients and stakeholders. ACE: Custom data visualisation and reporting for franchisee satisfaction, transformed a static PPT report into an interactive platform for local and international clients.',
        tags: [
            'React.js',
            'JavaScript',
            'Webpack',
            'React Testing Library',
            'Jest',
            'Data visualisation',
            'Figma',
            'Printing CSS',
            'Adobe Acrobat',
            'Adobe Illustrator',
            'Prototyping',
            'Reporting',
        ],
        figmaUrl: 'https://example.com/demo2',
        githubUrl: 'https://github.com/example/project2',
    },
    {
        id: '3',
        title: 'Private component library package',
        description:
            'Built and deployed a TypeScript component library via Azure DevOps, using Storybook for interactive documentation. Streamlined UI consistency across apps through reusable, accessible, and securely hosted components',
        tags: ['React.js', 'TypeScript', 'Vite', 'Storybook', 'npm', 'Azure DevOps'],
        demoUrl: 'https://example.com/demo3',
        githubUrl: 'https://github.com/example/project3',
    },
    {
        id: '4',
        title: 'Menu Driven',
        description:
            'Built and deployed a TypeScript component library via Azure DevOps, using Storybook for interactive documentation. Streamlined UI consistency across apps through reusable, accessible, and securely hosted components',
        tags: ['Figma'],
        image: '/import.png',
        figmaUrl:
            'https://www.figma.com/design/hmg1AhnGByidQtepWeUoWG/Menu-Driven?node-id=0-1&t=y8r2woNTYUotb2Pt-1',
    },
];

export const skillTags = [
    'React.js',
    'JavaScript',
    'TypeScript',
    'Vite',
    'TanStack Query (React Query)',
    'React Testing Library',
    'Jest',
    'Storybook',
    'Webpack',
    'npm',
    'Figma',
    'Adobe Illustrator',
    'Adobe Acrobat',
    'Data visualisation',
    'Prototyping',
    'Printing CSS',
    'Reporting',
    'Azure DevOps',
];
