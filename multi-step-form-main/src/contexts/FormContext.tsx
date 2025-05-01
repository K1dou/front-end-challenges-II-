import { createContext, useContext, useState } from "react";

type FormContextType = {
    isYearly: boolean;
    setIsYearly: (value: boolean) => void;
    addOns: AddOn[];
    toggleAddOn: (id: string) => void;
};

type AddOn = {
    id: string;
    title: string;
    description: string;
    price: { month: string, year: string };
    selected: boolean;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {

    const [isYearly, setIsYearly] = useState(false);

    const [addOns, setAddOns] = useState<AddOn[]>([
        {
            id: "online",
            title: "Online service",
            description: "Access to multiplayer games",
            price: { month: "+$1/mo", year: "+$10/yr" },
            selected: false,
        },
        {
            id: "storage",
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            price: { month: "+$1/mo", year: "+$20/yr" },
            selected: false,
        },
        {
            id: "support",
            title: "Customizable Profile",
            description: "Custom theme on your profile",
            price: { month: "+$1/mo", year: "+$20/yr" },
            selected: false,
        },
    ]);
    function toggleAddOn(id: string) {
        setAddOns(prev =>
            prev.map(addOn =>
                addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn
            )
        );
    }

    return (
        <FormContext.Provider value={{ isYearly, setIsYearly, addOns, toggleAddOn }}>
            {children}
        </FormContext.Provider>
    );
}

export function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext deve estar dentro de FormProvider");
    }
    return context;
}
