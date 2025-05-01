import { useFormContext } from "@/contexts/FormContext";
import { useState } from "react";

export default function CardStep5() {



    return (
        <div className="bg-Blue-100 flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute -top-[69px]  py-8  left-1/2 transform -translate-x-1/2  rounded-lg  shadow-lg flex flex-col gap-4">

                <div className="mx-auto flex flex-col items-center pb-15 w-[85%] ">

                    <img className="h-13 w-13 mt-18" src="/icon-thank-you.svg" alt="" />
                    <h1 className="text-Blue-950 font-bold text-[23px] mt-6">Thank you!</h1>
                    <p className="text-Grey-500 text-pretty text-center">Thanks for confirming your subscription!
                        We hope you have fun using our platform. If you ever need support, please feel free to email us at
                        hique1276@gmail.com
                    </p>



                </div>
            </div>
        </div>
    )



}