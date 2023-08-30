import * as React from 'react';
import Loading from '../ui/circular-loading';
import ButtonProps, { ButtonTypeClass } from '@/interfaces/props/button';
import { cn } from '@/lib/utils';

const Button: React.FunctionComponent<ButtonProps> =
    (
        { isLoading = false,
            buttonType = "primary",
            children,
            className,
            ...attr
        }
    ) => {
        const baseClassName: string = "py-1 px-4 rounded-lg hover:scale-105 transition border";
        return (
            <button
                {...attr}
                className={cn(baseClassName, className, ButtonTypeClass[buttonType])}
            >{isLoading ? <Loading
                color={buttonType === "primary" ? "#feffff" : "#000000"} /> : children}</button>
        )
    }

export default Button;
