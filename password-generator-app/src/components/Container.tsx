import { ReactNode } from "react"

interface ContainerPros {
    children: ReactNode,
    className?: string;

}

export default function Container({ children, className }: ContainerPros) {
    return (
        <div className={`min-h-screen w-full max-w-screen-md md:max-w-screen-lg lg:max-w-full mx-auto px-6  md:px-12 lg:px-20 ${className}`}>
            {children}
        </div>
    )
}