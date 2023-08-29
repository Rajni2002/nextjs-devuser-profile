import React from 'react';
import ChipProps from '@/interfaces/props/chip';
import { cn } from '@/lib/utils';
import Avatar from './avatar';

const Chip: React.FunctionComponent<ChipProps> = (
    {
        children,
        className,
        iconPath
    }
) => {
    return (
        <span className={
            cn(className, "px-2 text-xs py-1 m-1 bg-gray-100 rounded")
        }>
            {iconPath && <Avatar className='w-4 h-4 inline-block mr-2' src={iconPath}/>}
            {children}
        </span>
    );
};

export default Chip;
