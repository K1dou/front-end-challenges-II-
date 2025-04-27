interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: number | "Custom";
    isActive?: boolean;
    color?: "custom";
}

export default function Button({ value, color, isActive, ...props }: ButtonProps) {
    const isCustom = value === "Custom";

    const baseClasses = "text-center font-bold rounded-sm py-1 w-[147px]";
    const customStyle = "bg-Grey-50 text-Grey-500";
    const activeStyle = "bg-Green-400 text-Green-900";
    const inactiveStyle = "bg-Green-900 text-white";

    const finalClass = `${baseClasses} ${isCustom ? customStyle : isActive ? activeStyle : inactiveStyle
        }`;


    return (
        <button className={finalClass} {...props}>
            {isCustom ? "Custom" : `${value}%`}
        </button>
    );
}
