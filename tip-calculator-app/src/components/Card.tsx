interface CardProps {
    tipAmount: number;
    total: number;
}



export default function Card({ tipAmount, total }: CardProps) {


    return (

        <div className="flex flex-col items-center justify-between w-full px-3 py-6 bg-Green-900 rounded-2xl">
            <div className="flex justify-between w-full mb-6">
                <div><p className="font-bold text-White text-[16px]">Tip Amount <br /> <span className="font-bold text-[13px] text-Grey-400">/person </span>  </p></div>
                <div><p className="font-bold text-Green-400 text-[32px]">${tipAmount}</p></div>

            </div>

            <div className="flex justify-between w-full mb-6">
                <div><p className="font-bold text-White text-[16px]">Total <br /> <span className="font-bold text-[13px] text-Grey-400">/person </span>  </p></div>
                <div><p className="font-bold text-Green-400 text-[32px]">${total}</p></div>

            </div>

            <button className="bg-Green-400 text-Green-900 font-bold uppercase w-full text-center py-2 rounded-sm">Reset</button>

        </div>
    )



}