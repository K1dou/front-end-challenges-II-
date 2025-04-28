type CustomCheckboxProps = {
    label: string;
    checked: boolean;
    onChange: () => void;
    className?: string;
};

export default function CheckBox({ label, checked, onChange, className }: CustomCheckboxProps) {
    return (
        <label className={`flex items-center  cursor-pointer group ${className}`}>
            <input
                type="checkbox"
                className="hidden peer"
                checked={checked}
                onChange={onChange}
            />

            <div className="w-3 h-3  bg-Grey-800 border-2 border-Grey-600 peer-checked:bg-Green-400 peer-checked:border-Green-400 transition duration-150 flex items-center justify-center">
                {checked && (<img src="/icon-check.svg" alt="" />)}
            </div>

            <span className="text-Grey-200 font-bold text-[16px] md:text-[18px] ml-2">
                {label}
            </span>
        </label>
    )
}