import { useParams } from "react-router-dom";
import Container from "./Container";

export default function NavMain() {

    const { id } = useParams();
    const step = Number(id);


    const steps = [1, 2, 3, 4, 5];



    return (


        <Container className="bg-[url(/bg-sidebar-mobile.svg)] bg-cover  ">

            <div className="flex items-center justify-center gap-4 pt-8 pb-26">
                {steps.map((s) => (
                    <div
                        key={s}
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-medium border transition-all 
                            ${step === s
                                ? "bg-Blue-200 text-Blue-950 border-Blue-200"
                                : "text-White border-White"
                            }`}
                    >
                        {s}
                    </div>
                ))}

            </div>



        </Container>


    )

}