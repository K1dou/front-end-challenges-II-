"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxProps {
    id: string;
    onChange?: (checked: boolean) => void;
    checked?: boolean;
}

export default function CheckboxMain({ id, onChange, checked }: CheckboxProps) {
    return (

        <div className="flex items-center space-x-2 ">
            <Checkbox
                onCheckedChange={onChange}
                checked={checked}
                id={id} />


        </div>
    )
}
