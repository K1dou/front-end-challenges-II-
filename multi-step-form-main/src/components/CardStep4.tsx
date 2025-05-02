import { useFormContext } from "@/contexts/FormContext";
import { useNavigate } from "react-router-dom";


export default function CardStep4() {

    const navigate = useNavigate()



    const { selectedPlan, addOns } = useFormContext()

    const { isYearly } = useFormContext()

    const billingLabel = isYearly ? "Yearly" : "Monthly";
    const billingLabelTotal = isYearly ? "per year" : "per month";

    const totalMonthly =
        parseFloat(selectedPlan.price.month.replace(/[^0-9.-]+/g, "")) +
        addOns.reduce((acc, addon) => {
            if (addon.selected) {
                return acc + parseFloat(addon.price.month.replace(/[^0-9.-]+/g, ""));
            }
            return acc;
        }, 0);

    const totalYearly =
        parseFloat(selectedPlan.price.year.replace(/[^0-9.-]+/g, "")) +
        addOns.reduce((acc, addon) => {
            if (addon.selected) {
                return acc + parseFloat(addon.price.year.replace(/[^0-9.-]+/g, ""));
            }
            return acc;
        }, 0);

    const totalMonthlyLabel = `$${totalMonthly}/mo`;
    const totalYearlyLabel = `$${totalYearly}/yr`;



    return (
        <div className=" flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute lg:static -top-[69px]  py-6  left-1/2 transform -translate-x-1/2 lg:translate-0  rounded-lg  shadow-lg flex flex-col gap-4 lg:bg-none lg:shadow-none">

                <div className="mx-auto w-[85%] lg:w-[92%]">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Finishing up</h1>
                    <p className="text-Grey-500 text-[17px]">Double-check everything looks OK before confirming.</p>


                    <div className="mt-6 rounded-[8px] bg-[#F8F9FE] py-4 px-3 ">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-Blue-950 font-semibold text-[15px]">{selectedPlan.title} ({billingLabel})</p>
                                <p onClick={() => navigate("/step/2")} className="text-Grey-500 underline text-[14px] lg:hover:text-Purple-600 lg:cursor-pointer">Change</p>
                            </div>
                            <span className="font-bold mt-3 text-Blue-950 text-[14px]">{isYearly ? selectedPlan.price.year : selectedPlan.price.month}</span>


                        </div>

                        <div className="w-full border-t border-gray-300 my-4"></div>
                        <div>

                            <div className="flex flex-col justify-between">

                                {addOns.map((addons) => (
                                    addons.selected &&
                                    <div key={addons.id} className="flex mb-2 flex-col ">
                                        <div className="flex  flex-row justify-between">
                                            <p className="text-Grey-500 text-[14px]">{addons.title}</p>
                                            <span className="font-bold  text-Blue-950 text-[14px]">{isYearly ? addons.price.year : addons.price.month}</span>
                                        </div>
                                    </div>

                                ))}


                            </div>

                        </div>


                    </div>

                    <div className="flex justify-between px-3 mt-5">
                        <p className="text-Grey-500 text-[15px]">Total ({billingLabelTotal})</p>
                        <span className="font-bold  text-Purple-600  text-[15px]"> {isYearly ? totalYearlyLabel : totalMonthlyLabel}</span>
                    </div>










                </div>
            </div>
        </div>
    )



}