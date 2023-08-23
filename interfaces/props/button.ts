import * as React from "react";

type buttonType = "primary" | "secondary";

export const ButtonTypeClass= {
    "primary": "text-black bg-orange-400",
    "secondary": "text-zinc-900 bg-zinc-100"
};

export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    isLoading?: boolean;
    buttonType?: buttonType
}