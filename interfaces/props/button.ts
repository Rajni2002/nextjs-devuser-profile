import * as React from "react";

export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    isLoading?: boolean;
    buttonType?: "primary" | "secondary"
}