interface ButtonProps {
    value: number | "Custom";
    color?: "main" | "active" | "custom";
}



export default function Button({ value, color }: ButtonProps) {


    return (


        <>
            <button className={`text-center font-bold rounded-sm py-1 w-[147px] ${color === "main" ? "bg-Green-900 text-white" : color === "active" ? "bg-Green-400 text-Green-900" : color === "custom" ? "bg-Grey-50 text-Grey-500" : ""} `}>
                {value === "Custom" ? "Custom" : value + "%"}
            </button>


        </>
    )



}