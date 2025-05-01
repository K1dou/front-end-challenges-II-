import { useState } from "react";
import Container from "./Container";

export default function NavMain() {

    const [isActive, setActiveIndex] = useState(0);

    const steps = [1, 2, 3, 4];


    return (


        <Container className="bg-[url(/bg-sidebar-mobile.svg)] bg-cover  ">

            <div className="flex items-center justify-center gap-4 pt-8 pb-26">
                {steps.map((step, index) => (
                    <a
                        key={index}
                        href="#"
                        onClick={() => setActiveIndex(index)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full font-medium border  ${isActive === index
                            ? "bg-Blue-200 text-blue-950 border-Blue-200 outline-none"
                            : "text-White"
                            }`}
                    >
                        {step}
                    </a>
                ))}

            </div>



        </Container>


    )

}