import { useParams, useNavigate } from "react-router-dom";
import { useFormContext } from "@/contexts/FormContext";
import { useEffect } from "react";

import CardStep1 from "./CardStep1";
import CardStep2 from "./CardStep2";
import CardStep3 from "./CardStep3";
import CardStep4 from "./CardStep4";
import CardStep5 from "./CardStep5";

export default function StepRouter() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { currentStep } = useFormContext();

    const stepNumber = Number(id);

    useEffect(() => {
        if (stepNumber > currentStep) {
            navigate(`/step/${currentStep}`);
        }
    }, [stepNumber, currentStep, navigate]);

    switch (stepNumber) {
        case 1: return <CardStep1 />;
        case 2: return <CardStep2 />;
        case 3: return <CardStep3 />;
        case 4: return <CardStep4 />;
        case 5: return <CardStep5 />;
        default: return <p>Passo inválido</p>;
    }
}
