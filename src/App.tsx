import { useState, useMemo } from 'react';
import type { FC } from 'react';
import { Tooltip } from 'react-tooltip';

import { projects, skillTags } from './data/projects';

import Tag from './components/Tag';
import ProjectCard from './components/ProjectCard';

const App: FC = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [showProjects, setShowProjects] = useState(true);
    const [tagsInteracted, setTagsInteracted] = useState(false);

    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) {
            return projects;
        }

        return projects.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)));
    }, [selectedTags, tagsInteracted]);

    const toggleTag = (tag: string) => {
        setTagsInteracted(true);
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        );
        if (!showProjects) setShowProjects(true);
    };

    const clearFilters = () => {
        setSelectedTags([]);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            <div className="flex flex-col gap-12 container mx-auto px-4 py-8 md:py-16 max-w-6xl">
                {/* Header */}
                <header className="flex flex-col gap-6 text-left md:text-center items-start md:items-center">
                    <div className="flex flex-row gap-2 md:gap-4 text-left md:text-center w-max items-center">
                        <img
                            src="/me.jpg"
                            alt="Wedding day with my mother"
                            data-tooltip-id="profile-photo-tooltip"
                            data-tooltip-content="Me and my mother on my wedding day 2023"
                            data-tooltip-place="left"
                            className="mx-auto w-8 h-8 md:w-14 md:h-14 rounded-full object-cover border-2 md:border-4 border-slate-200 dark:border-slate-700 shadow hover:scale-[2] transition-transform"
                            style={{ aspectRatio: 1 }}
                        />
                        <Tooltip id="profile-photo-tooltip" />
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-200 font-title">
                            Fabio Monsalve
                        </h1>
                    </div>
                    <div className="flex flex-col gap-3 text-left md:text-center">
                        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto dark:text-slate-400">
                            Developer and designer with 7 years experience creating web applications
                            and digital experiences. Also dabbles in{' '}
                            <a
                                className="text-blue-600 hover:underline"
                                href="https://soundcloud.com/balacera"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                music
                            </a>{' '}
                            production and sound design.
                        </p>
                        <div className="flex flex-row gap-4 items-start md:justify-center">
                            <a
                                className="text-blue-600 hover:underline"
                                href="mailto:fmondu@protonmail.com"
                            >
                                Email me
                            </a>
                            <a
                                className="text-blue-600 hover:underline"
                                href="/Fabio Monsalve - Resume.pdf"
                                download="Fabio Monsalve - Resume.pdf"
                            >
                                Download my resumé
                            </a>
                        </div>
                    </div>
                </header>

                {/* Skills/Filter Tags */}
                <section className="flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 text-left md:text-center">
                        Skills & Technologies
                    </h2>
                    <div className="flex flex-wrap gap-3 items-start md:justify-center max-w-4xl mx-auto">
                        {skillTags.map((tag) => (
                            <Tag
                                key={tag}
                                label={tag}
                                isActive={selectedTags.includes(tag)}
                                onClick={() => toggleTag(tag)}
                            />
                        ))}
                    </div>
                    {selectedTags.length > 0 && (
                        <div className="flex items-start md:justify-center">
                            <button
                                onClick={clearFilters}
                                className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                            >
                                Clear filters ({selectedTags.length})
                            </button>
                        </div>
                    )}
                </section>

                {/* Projects */}
                {showProjects && (
                    <section className="flex flex-col gap-6">
                        <h2 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 text-left md:text-center">
                            Projects {selectedTags.length > 0 && `(${filteredProjects.length})`}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            {filteredProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    selectedTags={selectedTags}
                                />
                            ))}
                        </div>
                        {filteredProjects.length === 0 && selectedTags.length > 0 && (
                            <div className="text-left md:text-center py-12">
                                <p className="text-slate-500 dark:text-slate-400">
                                    No projects found with the selected tags.
                                </p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-2 text-teal-600 hover:text-teal-700 transition-colors"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </section>
                )}

                {/* Footer */}
                <footer className="flex flex-col gap-2 justify-center max-w-2xl mx-auto text-left md:text-center text-slate-500 text-sm">
                    <p>
                        © 2025 Fabio Monsalve. This project is free software: you can redistribute
                        it and/or modify it under the terms of the{' '}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://www.gnu.org/licenses/gpl-3.0.html"
                        >
                            GNU General Public License
                        </a>{' '}
                        as published by the Free Software Foundation, either version 3 of the
                        License, or (at your option) any later version.
                    </p>
                    <p>This website was built with React, TypeScript, Vite and Tailwind CSS.</p>
                    <p>
                        The source code is available on{' '}
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://github.com/fmondu/fmondu.github.io"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default App;
