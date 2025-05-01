import { Switch } from "../components/ui/switch";

interface SwitchProps {
    onCheckedChange: (checked: boolean) => void;
    checked?: boolean;
}

export default function SwitchToogle({ onCheckedChange, checked }: SwitchProps) {


    return (
        <div className="flex items-center space-x-2">
            <Switch
                checked={checked}
                onCheckedChange={onCheckedChange}
                id="airplane-mode" />
        </div>
    )
}