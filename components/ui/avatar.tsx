import { cn } from '@/lib/util';
import Image from 'next/image';
import React from 'react';

type AvatarPropType = {
    className?: string;
    showBadge?: boolean;
    src?: string;
}

const Avatar = (props: AvatarPropType) => {
    return (
        <div className={cn("relative", props.className)}>
            <Image className="rounded-full" src={
                props.src?.length ? props.src : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
            } alt="Avtr"
                layout='fill'
                objectFit='cover' />
            {props.showBadge && <span className="top-0 left-7 absolute w-3 h-3 bg-green-400 rounded-full"></span>}
        </div>
    );
};

export default Avatar;
