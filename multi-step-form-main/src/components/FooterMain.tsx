import { useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import { useFormContext } from "@/contexts/FormContext";
import { c } from "node_modules/vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";

interface FooterMainProps {
    className?: string;
}

type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
};
export default function FooterMain({ className }: FooterMainProps) {

    const { id } = useParams();
    const step = Number(id);
    const navigate = useNavigate();
    const { formData, setFormErrors, setCurrentStep } = useFormContext();

    function isStep1Valid() {
        const errors: FormErrors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9\s()+-]{10,}$/;

        if (!formData.name.trim()) errors.name = "This field required";
        if (!formData.email.trim()) errors.email = "This field is required";
        if (!formData.phone.trim()) errors.phone = "This field is required";
        if (!emailRegex.test(formData.email)) errors.email = "Invalid email";
        if (!phoneRegex.test(formData.phone)) errors.phone = "Invalid phone";
        setFormErrors(errors);

        return Object.keys(errors).length === 0;

    }

    function nextStep() {
        if (step === 1 && !isStep1Valid()) {
            return;
        }

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
        <Container className={` py-5 ${step === 5 ? "bg-Blue-100" : "bg-White"}  ${className} lg:pr-13`}>


            <div className={` flex justify-between px-1 items-center  ${step <= 1 ? "justify-end" : ""}  `}>
                {step > 1 && step < 5 && (<a
                    onClick={() => prevStep()}
                    className="lg:cursor-pointer lg:ml-12 py-1 px-1 text-Grey-500 font-medium lg:hover:text-Blue-950" href="#">Go Back</a>
                )}

                {step <= 3 && (<button
                    onClick={() => nextStep()}
                    className="lg:cursor-pointer text-White  font-medium bg-Blue-950 px-4 py-2 rounded-[3px]">Next Step</button>)}


                {step === 4 && (<button
                    onClick={() => nextStep()}
                    className="lg:cursor-pointer text-White  font-medium bg-Purple-600 px-5 py-2 rounded-[3px]">Confirm</button>)}

            </div>



        </Container>
    )
}