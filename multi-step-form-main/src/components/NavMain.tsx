import { useParams } from "react-router-dom";
import Container from "./Container";

interface NavMainProps {
    className?: string;
}


export default function NavMain({ className }: NavMainProps) {

    const { id } = useParams();
    const step = Number(id);


    const steps = [
        { number: 1, title: "STEP 1", description: "YOUR INFO" },
        { number: 2, title: "STEP 2", description: "SELECT PLAN" },
        { number: 3, title: "STEP 3", description: "ADD-ONS" },
        { number: 4, title: "STEP 4", description: "SUMMARY" },
        { number: 5, title: "STEP 5", description: "FINISH" },
    ];



    return (


        <Container className={`bg-[url(/bg-sidebar-mobile.svg)] lg:bg-[url(/bg-sidebar-desktop.svg)] lg:h-full lg:w-[380px] lg:bg-bottom lg:rounded-2xl  bg-cover {className}`}>

            <div className="flex items-center justify-center gap-4 pt-8 lg:pt-11 pb-26 lg:flex-col lg:items-start  lg:gap-8 lg:pl-10 lg:w-full">
                {steps.map(({ number, title, description }, i) => (
                    <>
                        <div className="contents  lg:flex gap-5">
                            <div
                                key={i}
                                className={`w-8 h-8 lg:mt-[6px] flex items-center justify-center  rounded-full font-medium border transition-all 
                            ${step === number
                                        ? "bg-Blue-200 text-Blue-950 border-Blue-200"
                                        : "text-White border-White"
                                    }`}

                            >

                                {number}

                            </div>
                            <div className="hidden lg:block">
                                <p className="text-gray-300 font-extralight text-[15px]">{title}</p>
                                <h1 className="font-bold text-White text-[16px]">{description}</h1>
                            </div>
                        </div>

                    </>
                ))}

            </div>



        </Container>


    )

}