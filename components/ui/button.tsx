import * as React from 'react';
import Loading from './circular-loading';
import { ButtonProps } from '@/interfaces/props/button';

const Button: React.FunctionComponent<ButtonProps> =
    (
        { isLoading = false,
            buttonType = "primary",
            children,
            className = "",
            ...restProps
        }
    ) => {
        let customClassName: string = className += " py-2 px-4 rounded-lg ";
        customClassName += (buttonType === "primary") ? "bg-[#4F46E5] text-white" : (buttonType === "secondary" ? "bg-zinc-100 text-zinc-900" : "");
        return (
            <button {...restProps} className={customClassName}>{isLoading ? <Loading /> : children}</button>
        )
    }

export default Button;
