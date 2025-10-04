import { Project } from '../components/ProjectCard';

export const projects: Project[] = [
    {
        id: '1',
        title: 'SSQ Platform',
        description:
            "Designed from paper and pencil product and developed a workforce questionnaire and role mapping web app tool with interactive data map. Worked closely with our client to digitise his life's work. With this in mind a certain degree of care was required both in execution and stakeholder meetings and interaction. For this codebase we decided to go with an opinionated data-fetching/api management tool (TanStack Query) after finding ourselves missing a few important features and also not wanting to re-invent the wheel in terms of caching, refetch, background updates and mutation tracking. We also chose to go with Vite over CRA mostly for performance and bundling advantages. I got the most satisfaction from working on the create role page which utilised some of those great features from TanStack Query, it made sequential and conditional endpoint usage (create location, create department, different endpoints for different answer types etc all dependent on each other). Error handling was also very important as there were so many different kinds of errors that could go wrong depending on where the process had gone wrong, lots of care and thought went into writing good and clear error messages.",
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
            'https://www.figma.com/design/6UIEDn6O43cpYVzlA20RBh/SSQ---Role-Questionnaire?node-id=0-1',
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
        image: '/coach-platform.png',
    },
    {
        id: '3',
        title: 'Private component library package',
        description:
            'Built and deployed a TypeScript component library via Azure DevOps, using Storybook for interactive documentation. Streamlined UI consistency across apps through reusable, accessible, and securely hosted components. Having multiple applications that needed the same look feel we needed a way to share components and branding, having a single source of truth not only helps with maintenance and updates but also enables version control, dependency management, and continuous integration for UI components, ensuring updates can be rolled out safely and efficiently.',
        tags: ['React.js', 'TypeScript', 'Vite', 'Storybook', 'npm', 'Azure DevOps'],
        image: '/storybook.png',
    },
    {
        id: '4',
        title: 'Menu Driven',
        description:
            'As part of the first steps towards creating a new super admin portal the task was to build a multi-step workflow for creating and importing questions into our platform in a user-friendly and error-resistant way. It streamlines both manual question entry and bulk imports through a clear, guided process. The process includes five key stages: creating questions manually, uploading files, mapping data fields, reviewing imported items, and confirming a final summary before import.',
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
