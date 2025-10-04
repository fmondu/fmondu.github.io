import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { useState, type FC } from 'react';

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
    selectedTags: string[];
}

const ProjectCard: FC<ProjectCardProps> = ({ project, selectedTags }) => {
    const [showFull, setShowFull] = useState(false);

    const MAX_WORDS = 60;
    const words = project.description.split(/\s+/);
    const shortDescription = words.slice(0, MAX_WORDS).join(' ');
    const hasMore = words.length > MAX_WORDS;

    return (
        <div className="flex flex-col gap-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow duration-200 h-full">
            {project.image && (
                <div className="w-full h-48 bg-slate-100 dark:bg-slate-700 rounded-md overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {showFull || !hasMore ? project.description : shortDescription}
                    {hasMore && !showFull && (
                        <button
                            className="text-xs font-medium text-teal-600 ml-1 cursor-pointer bg-transparent border-0 p-0"
                            onClick={() => setShowFull(true)}
                            tabIndex={0}
                            aria-label="Show full description"
                        >
                            show more...
                        </button>
                    )}
                    {hasMore && showFull && (
                        <button
                            className="text-xs font-medium text-teal-600 ml-1 cursor-pointer bg-transparent border-0 p-0"
                            onClick={() => setShowFull(false)}
                            tabIndex={0}
                            aria-label="Show less"
                        >
                            show less
                        </button>
                    )}
                </p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                        <span
                            key={tag}
                            className={`px-2 py-1 text-xs font-medium rounded-md
                ${
                    isSelected
                        ? 'bg-teal-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
                        >
                            {tag}
                        </span>
                    );
                })}
            </div>
            <div className="flex min-w-full place-self-end mt-auto">
                <div className="flex gap-3 justify-between w-full">
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row gap-1 items-center text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                    >
                        Learn more
                    </a>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-1 items-center text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                        >
                            Live Demo <ArrowTopRightOnSquareIcon className="size-4" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-1 items-center text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 text-sm font-medium transition-colors"
                        >
                            GitHub <ArrowTopRightOnSquareIcon className="size-4" />
                        </a>
                    )}
                    {project.figmaUrl && (
                        <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-1 items-center text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
                        >
                            Figma
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
