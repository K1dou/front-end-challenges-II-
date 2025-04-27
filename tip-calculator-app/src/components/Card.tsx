
interface CardProps {
    tipAmount: number;
    total: number;
    inputClassName?: string;
    onClickCustom: () => void;
    isreset?: boolean;
}



export default function Card({ tipAmount, total, inputClassName, onClickCustom, isreset }: CardProps) {


    return (

        <div className={`lg:justify-normal flex flex-col items-center justify-between w-full px-3 py-6 bg-Green-900 rounded-2xl ${inputClassName}`}>
            <div className=" flex justify-between w-full mb-6">
                <div><p className="font-bold text-White text-[16px]">Tip Amount <br /> <span className="font-bold text-[13px] text-Grey-400">/person </span>  </p></div>
                <div><p className="font-bold text-Green-400 text-[32px] md:text-[44px]">${tipAmount}</p></div>

            </div>

            <div className="flex justify-between w-full mb-6">
                <div><p className="font-bold text-White text-[16px]">Total <br /> <span className="font-bold text-[13px] text-Grey-400">/person </span>  </p></div>
                <div><p className="font-bold text-Green-400 text-[32px] md:text-[44px]">${total}</p></div>

            </div>


            <button aria-label="button Reset" onClick={onClickCustom} className={`${isreset ? "bg-[#0D686D] text-[#085C61]" : " bg-Green-400 text-Green-900 lg:hover:bg-Grey-200 cursor-pointer"} lg:mt-17  font-bold uppercase w-full text-center py-2 rounded-sm `}>Reset</button>

        </div>
    )



}