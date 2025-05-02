import { useFormContext } from "@/contexts/FormContext";
import CheckboxMain from "./CheckboxMain";

export default function CardStep3() {

    const { addOns, toggleAddOn } = useFormContext();

    const { isYearly } = useFormContext()



    return (
        <div className=" flex-1 relative">

            <div className="w-[90%] max-h-[calc(100dvh-190px)] overflow-y-auto pb-[110px] mx-auto bg-White absolute lg:static -top-[69px]  py-6  left-1/2 transform -translate-x-1/2 lg:translate-0  rounded-lg  shadow-lg flex flex-col gap-4 lg:bg-none lg:shadow-none">

                <div className="mx-auto w-[85%] lg:w-[92%]">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Pick add-ons</h1>
                    <p className="text-Grey-500 text-[17px] lg:mb-9">Add-ons help enhance your gaming experience</p>



                    {addOns.map(addon => (
                        <div
                            key={addon.id}
                            className={`flex justify-between items-center w-full mt-4  border rounded-[8px] py-2 px-3 lg:py-4 lg:mt-5 ${addon.selected ? "border-Purple-600 bg-[#F8F9FE]" : "border-gray-400"
                                }`}
                        >
                            <div className="contents lg:flex lg:items-center lg:gap-5 ">
                                <CheckboxMain
                                    onChange={() => toggleAddOn(addon.id)}
                                    id={addon.id}
                                    checked={addon.selected}

                                />
                                <div>
                                    <h1 className="text-Blue-950 font-medium text-[15px]">{addon.title}</h1>
                                    <p className="text-Grey-500 text-[13px]">{addon.description}</p>
                                </div>
                            </div>
                            <p className="text-[13px] text-Purple-600 font-medium">{isYearly ? addon.price.year : addon.price.month}</p>
                        </div>
                    ))}








                </div>
            </div>
        </div>
    )



}