import { useState } from "react";

interface OutputPasswordProps {
    className?: string;
    password?: string;
}


export default function OutputPassword({ className, password }: OutputPasswordProps) {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (password) {
            navigator.clipboard.writeText(password);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <>

            <div className={`relative ${className}`}>
                <button
                    onClick={handleCopy}
                    className="bottom-3 right-3 absolute flex gap-2"
                    aria-label="Copy password"
                    type="button">

                    {copied &&
                        <span className="text-Green-400 text-xs font-bold">COPIED</span>}


                    <img src="/icon-copy.svg" alt="Copy icon" />
                </button>
                <input readOnly placeholder="P4$5W0rD!" value={password} className="pl-5 h-10 text-Grey-700  font-bold bg-Grey-800 focus:outline-none md:pr-23 md:text-[30px]" />
            </div>

        </>

    )

}