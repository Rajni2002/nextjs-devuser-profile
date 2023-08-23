import { cn } from '@/lib/util';
import Image from 'next/image';
import React from 'react';

const Avatar = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative", className)}>
            <Image className="rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="Avtr" width={40} height={40} />
            <span className="top-0 left-7 absolute  w-3 h-3 bg-green-400 rounded-full"></span>
        </div>
    );
};

export default Avatar;
