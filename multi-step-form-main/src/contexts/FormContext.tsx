import { createContext, useContext, useState } from "react";

type FormContextType = {
    isYearly: boolean;
    setIsYearly: (value: boolean) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {

    const [isYearly, setIsYearly] = useState(false);

    return (
        <FormContext.Provider value={{ isYearly, setIsYearly }}>
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
