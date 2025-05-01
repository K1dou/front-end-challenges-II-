import { useFormContext } from "@/contexts/FormContext";
import SwitchToogle from "./SwitchToogle";



export default function CardStep2() {

    const { isYearly, setIsYearly, selectedPlan, setSelectedPlan } = useFormContext();

    function handleClick(plan: "arcade" | "advanced" | "pro") {
        const plans = {
            arcade: { id: "arcade", title: "Arcade", price: { month: "+$9/mo", year: "+$90/yr" } },
            advanced: { id: "advanced", title: "Advanced", price: { month: "+$12/mo", year: "+$120/yr" } },
            pro: { id: "pro", title: "Pro", price: { month: "+$15/mo", year: "+$150/yr" } },
        };

        setSelectedPlan(plans[plan]);
    }

    return (
        <div className="bg-Blue-100 flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute -top-[69px]  py-8  left-1/2 transform -translate-x-1/2  rounded-lg  shadow-lg flex flex-col gap-4">

                <div className="mx-auto w-[85%] ">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Select your plan</h1>
                    <p className="text-Grey-500 text-[17px]">You have the option of monthly or yearly biling</p>

                    <span
                        onClick={() => handleClick("arcade")}
                        className={`flex items-start justify-start gap-3 mt-8 mb-4 border  rounded-[8px] py-3 px-3 ${selectedPlan.id === "arcade" ? "border-Purple-600 bg-[#F8F9FE]" : "border-gray-300"}`}>
                        <img className="mt-[6px]" src="/icon-arcade.svg" alt="" />
                        <div >
                            <h1 className="text-Blue-950 font-medium text-[18px]">Arcade</h1>
                            <p className="text-Grey-500">$90/yr</p>
                            {isYearly && <p className="text-Blue-950 text-[13px] mt-1 ">2 months free</p>}

                        </div>

                    </span>

                    <span
                        onClick={() => handleClick("advanced")}
                        className={`flex items-start justify-start gap-3 mt-8 mb-4 border  rounded-[8px] py-3 px-3 ${selectedPlan.id === "advanced" ? "border-Purple-600 bg-[#F8F9FE]" : "border-gray-300"}`}>
                        <img className="mt-[6px]" src="/icon-advanced.svg" alt="" />
                        <div >
                            <h1 className="text-Blue-950 font-medium text-[18px]">Advanced</h1>
                            <p className="text-Grey-500">$90/yr</p>
                            {isYearly && <p className="text-Blue-950 text-[13px] mt-1 ">2 months free</p>}
                        </div>

                    </span>
                    <span
                        onClick={() => handleClick("pro")}
                        className={`flex items-start justify-start gap-3 mt-8 mb-4 border  rounded-[8px] py-3 px-3 ${selectedPlan.id === "pro" ? "border-Purple-600 bg-[#F8F9FE]" : "border-gray-300"}`}>
                        <img className="mt-[6px]" src="/icon-pro.svg" alt="" />
                        <div >
                            <h1 className="text-Blue-950 font-medium text-[18px]">Pro</h1>
                            <p className="text-Grey-500">$90/yr</p>
                            {isYearly && <p className="text-Blue-950 text-[13px] mt-1 ">2 months free</p>}
                        </div>

                    </span>

                    <span className="flex items-center justify-center rounded-[10px] gap-4 bg-[#F8F9FE] py-3">
                        <p className={` font-medium  ${isYearly ? "text-Blue-950" : "text-Grey-500"}`}>Monthly</p>
                        <SwitchToogle
                            checked={isYearly}
                            onCheckedChange={setIsYearly}
                        />
                        <p className={` font-medium  ${isYearly ? "text-Grey-500" : " text-Blue-950"}`}>Yearly</p>

                    </span>

                </div>
            </div>
        </div>
    )



}