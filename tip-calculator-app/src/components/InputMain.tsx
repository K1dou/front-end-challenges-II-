interface InputProps {
    type?: "bill" | "people";
    inputClassName?: string;
}



export default function InputMain({ type, inputClassName }: InputProps) {

    const src = type === "bill" ? "/icon-dollar.svg" : "/icon-person.svg";

    return (


        <div className={`relative ${inputClassName} `}>
            <label className="font-bold text-[16px] text-Grey-500 ml-[1px]" htmlFor="input"> {type === "bill" ? "Bill" : "Number of People"}</label>
            <span className="absolute  left-3 bottom-[9px]  -translate-y-1/2  text-Grey-500"><img src={src} alt="" /></span>

            <input name="input" id="input" placeholder="0" className="focus:outline-none text-Green-900 bg-Grey-50 pr-4 text-right text-[24px] font-bold placeholder:text-neutral-grey placeholder:text-[24px] placeholder:font-bold placeholder:pl-6   h-9 w-full rounded-sm"  >

            </input>
        </div>





    )



}