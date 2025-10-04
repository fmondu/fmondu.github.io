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
            className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105 backdrop-blur-sm ${
                isActive
                    ? 'bg-teal-600 text-white border-teal-600 shadow-lg'
                    : 'bg-white/90 text-slate-700 border-slate-300/60 hover:border-teal-400 hover:text-teal-600 hover:bg-white/100 dark:bg-slate-800/90 dark:text-slate-300 dark:border-slate-600/60 dark:hover:border-teal-400 dark:hover:bg-slate-800/100'
            }`}
        >
            {label}
        </button>
    );
};

export default Tag;
