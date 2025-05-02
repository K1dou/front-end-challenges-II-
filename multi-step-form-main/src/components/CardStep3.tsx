import { useFormContext } from "@/contexts/FormContext";
import CheckboxMain from "./CheckboxMain";

export default function CardStep3() {

    const { addOns, toggleAddOn } = useFormContext();

    const { isYearly } = useFormContext()



    return (
        <div className="bg-Blue-100 flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute -top-[69px]  py-6  left-1/2 transform -translate-x-1/2  rounded-lg  shadow-lg flex flex-col gap-4">

                <div className="mx-auto w-[85%] ">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Pick add-ons</h1>
                    <p className="text-Grey-500 text-[17px]">Add-ons help enhance your gaming experience</p>



                    {addOns.map(addon => (
                        <div
                            key={addon.id}
                            className={`flex justify-between items-center w-full mt-4 border rounded-[8px] py-2 px-3 ${addon.selected ? "border-Purple-600 bg-[#F8F9FE]" : "border-gray-400"
                                }`}
                        >
                            <CheckboxMain
                                onChange={() => toggleAddOn(addon.id)}
                                id={addon.id}

                            />
                            <div>
                                <h1 className="text-Blue-950 font-medium text-[15px]">{addon.title}</h1>
                                <p className="text-Grey-500 text-[13px]">{addon.description}</p>
                            </div>
                            <p className="text-[13px] text-Purple-600 font-medium">{isYearly ? addon.price.year : addon.price.month}</p>
                        </div>
                    ))}








                </div>
            </div>
        </div>
    )



}