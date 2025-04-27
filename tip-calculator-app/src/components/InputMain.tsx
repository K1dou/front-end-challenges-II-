interface InputProps {
    type?: "bill" | "people";
    inputClassName?: string;
    value?: number | null;
    onChange?: (value: number) => void;
    hasError?: boolean;
    onBlur?: () => void;
}



export default function InputMain({ onChange, value, type, inputClassName, onBlur, hasError }: InputProps) {

    const src = type === "bill" ? "/icon-dollar.svg" : "/icon-person.svg";

    return (


        <div className={`relative ${inputClassName} `}>
            <label className="font-bold text-[16px] text-Grey-500 ml-[1px]" htmlFor="input"> {type === "bill" ? "Bill" : "Number of People"}</label>
            <span className="absolute  left-3 bottom-[9px]  -translate-y-1/2  text-Grey-500"><img src={src} alt="" /></span>
            {hasError && <span className="hidden lg:inline absolute text-red-500 font-bold text-[16px] bottom-10 right-0">Can’t be zero</span>}

            <input
                onBlur={onBlur}
                onChange={(e) => onChange?.(Number(e.target.value))}
                value={value ?? ""}
                name="input"

                placeholder="0"
                className={`cursor-pointer text-Green-900 bg-Grey-50 pr-4 text-right text-[24px] font-bold placeholder:text-Grey-400 placeholder:text-[24px]   placeholder:font-bold placeholder:pl-6   h-9 w-full rounded-sm border-2 focus:outline-none 
                    
                    ${hasError ? "lg:border-red-500" : "border-transparent focus:border-Green-400"}
  `}
            />
        </div>





    )



}