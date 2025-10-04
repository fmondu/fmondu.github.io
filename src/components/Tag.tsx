import type { FC } from 'react';

interface TagProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

const Tag: FC<TagProps> = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 hover:scale-105 backdrop-blur-sm
        ${
            isActive
                ? 'bg-teal-600 text-white border-teal-600 shadow-lg'
                : 'bg-white/90 text-slate-700 border-slate-300/60 hover:border-teal-600 hover:text-teal-600 hover:bg-white/100 dark:bg-slate-800/90 dark:text-slate-300 dark:border-slate-600/60 dark:hover:border-teal-600 dark:hover:bg-slate-800/100'
        }
        text-xs px-1.5 py-0.5
        md:text-sm md:px-2 md:py-1
    `}
        >
            {label}
        </button>
    );
};

export default Tag;
