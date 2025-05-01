import { useState } from "react";
import CheckboxMain from "./CheckboxMain";
import { useFormContext } from "@/contexts/FormContext";


export default function CardStep4() {

    const { addOns, toggleAddOn } = useFormContext();

    const { isYearly } = useFormContext()



    return (
        <div className="bg-Blue-100 flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute -top-[69px]  py-8  left-1/2 transform -translate-x-1/2  rounded-lg  shadow-lg flex flex-col gap-4">

                <div className="mx-auto w-[85%] ">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Finishing up</h1>
                    <p className="text-Grey-500 text-[17px]">Double-check everything looks OK before confirming.</p>


                    <div className="mt-6 rounded-[8px] bg-[#F8F9FE] py-4 px-3 ">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-Blue-950 font-semibold text-[15px]">Arcade (Monthly)</p>
                                <p className="text-Grey-500 underline text-[14px]">Change</p>
                            </div>
                            <span className="font-bold mt-3 text-Blue-950 text-[14px]">$9/mo</span>


                        </div>

                        <div className="w-full border-t border-gray-300 my-4"></div>
                        <div>
                            <div className="flex justify-between">
                                <p className="text-Grey-500 text-[14px]">Online Service</p>
                                <span className="text-Blue-950">+$1/mo</span>
                            </div>

                        </div>


                    </div>

                    <div className="flex justify-between px-3 mt-5">
                        <p className="text-Grey-500 text-[15px]">Total (per month)</p>
                        <span className="font-bold  text-Purple-600  text-[15px]">+$12/mo</span>
                    </div>










                </div>
            </div>
        </div>
    )



}