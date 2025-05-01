"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface CheckboxProps {
    id: string;
    onChange?: (checked: boolean) => void;
}

export default function CheckboxMain({ id, onChange }: CheckboxProps) {
    return (

        <div className="flex items-center space-x-2">
            <Checkbox
                onCheckedChange={onChange}
                id={id} />


        </div>
    )
}
