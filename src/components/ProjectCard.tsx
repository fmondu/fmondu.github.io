import type { FC } from 'react';

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    figmaUrl?: string;
    demoUrl?: string;
    githubUrl?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow duration-200">
            {project.image && (
                <div className="w-full h-48 bg-slate-100 dark:bg-slate-700 rounded-md mb-4 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                {project.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <div className="flex gap-3">
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                    >
                        Live Demo →
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 text-sm font-medium transition-colors"
                    >
                        GitHub →
                    </a>
                )}
                {project.figmaUrl && (
                    <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
                    >
                        Figma →
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
