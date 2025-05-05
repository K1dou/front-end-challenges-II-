import type { ReactNode } from "react";

interface ContainerPros {
    children: ReactNode,
    className?: string;

}

export default function Container({ children, className }: ContainerPros) {
    return (
        <div className={`  w-full max-w-screen-md md:max-w-screen-lg lg:max-w-full mx-auto px-3  md:px-12 lg:px-20 ${className}`}>
            {children}
        </div>
    )
}