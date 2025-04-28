import { useState } from "react"

interface InputRangeProps {
    className?: string;
    onValueChange: (value: number) => void;

}

export default function InputRange({ className, onValueChange }: InputRangeProps) {


    const [rageValue, setRangeValue] = useState(0)
    const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        setRangeValue(value);
        onValueChange(value);
    };
    const percent = (rageValue / 20) * 100;


    return (

        <>
            <div className={`relative ${className}`}>
                <span className="absolute right-0"><p className="text-Green-400">{rageValue}</p></span>
                <label className=" text-[16px] md:text-[18px] font-bold text-Grey-200" htmlFor="labels-range-input">Characer Length</label>
                <input id="labels-range-input" onChange={handleRangeChange} type="range" value={rageValue} min="0" max="20" style={{
                    background: `linear-gradient(to right, #4ade80 0%, #4ade80 ${percent}%, #1f2937 ${percent}%, #1f2937 100%)`
                }} className="w-full h-[8px]   appearance-none cursor-pointer accent-White slider-thumb-custom dark:bg-Grey-900" />

            </div>


        </>
    )


}