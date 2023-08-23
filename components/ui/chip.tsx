import React from 'react';
import ChipProps from '@/interfaces/props/chip';
import { cn } from '@/lib/util';

const Chip: React.FunctionComponent<ChipProps> = (
    {
        children,
        className,
    }
) => {
    return (
        <span className={
            cn(className, "px-2 text-xs py-1 m-1 bg-gray-100 rounded")
        }>
            {children}
        </span>
    );
};

export default Chip;
