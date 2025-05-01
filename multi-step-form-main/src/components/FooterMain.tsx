import { useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import { useFormContext } from "@/contexts/FormContext";

export default function FooterMain() {

    const { id } = useParams();
    const step = Number(id);
    const navigate = useNavigate();
    const { setCurrentStep } = useFormContext();


    function nextStep() {
        setCurrentStep(step + 1);
        navigate(`/step/${step + 1}`);
    }
    function prevStep() {
        if (step > 1) {
            setCurrentStep(step - 1);
            navigate(`/step/${step - 1}`);
        }
    }


    return (
        <Container className={` py-5 ${step === 5 ? "bg-Blue-100" : "bg-White"} `}>


            <div className={`flex justify-between px-1 items-center  ${step <= 1 ? "justify-end" : ""}  `}>
                {step > 1 && step < 5 && (<a
                    onClick={() => prevStep()}
                    className="py-1 px-1 text-Grey-500 font-medium" href="#">Go Back</a>
                )}

                {step <= 3 && (<button
                    onClick={() => nextStep()}
                    className="text-White  font-medium bg-Blue-950 px-4 py-2 rounded-[3px]">Next Step</button>)}


                {step === 4 && (<button
                    onClick={() => nextStep()}
                    className="text-White  font-medium bg-Purple-600 px-5 py-2 rounded-[3px]">Confirm</button>)}

            </div>



        </Container>
    )
}