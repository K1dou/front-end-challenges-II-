import { useEffect, useState } from "react";
import { useIpData } from "../data/useIpData";

interface InputProps {
    className?: string;
    onDataChange?: (data: {

        ip: string;
        location: string;
        timezone: string;
        isp: string;
        lat: number;
        lng: number;
    }) => void;
}

export default function Input({ className, onDataChange }: InputProps) {


    const [containsError, setContaisError] = useState(false);

    const [inputValue, setInputValue] = useState('192.212.174.101');
    const [ip, setIp] = useState('192.212.174.101');
    const [enabled, setEnabled] = useState(false);


    const { data, error } = useIpData(ip, enabled);



    function isValidIp(ip: string): boolean {
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
        return ipRegex.test(ip.trim());
    }



    function handleSearch() {
        if (!inputValue.trim()) return;

        const trimmedIp = inputValue.trim();

        if (!isValidIp(trimmedIp)) {
            setContaisError(true);
            setTimeout(() => setContaisError(false), 2000);
            return;
        }

        setIp(trimmedIp);
        setEnabled(true);
    }

    useEffect(() => {
        if (data) {
            const dataSend = {
                ip: data.ip || '',
                location: `${data.location?.region}, ${data.location?.city} ${data.location?.postalCode}`,
                timezone: data.location?.timezone || '',
                isp: data.isp || '',
                lat: data.location?.lat || 0,
                lng: data.location?.lng || 0,
            };

            onDataChange?.(dataSend);
        }

    }, [data, error]);


    return (
        <>
            <div className={`flex lg:w-[555px] ${className}`}>


                <div className="relative flex items-center">

                    {containsError &&
                        <span className="lg:hidden absolute right-0 -top-4 text-red-500 text-xs font-bold">
                            Invalid IP
                        </span>
                    }

                    <button aria-label="button search ip" onClick={handleSearch} className="lg:hidden absolute cursor-pointer flex items-center justify-center  bg-Very-Dark-Gray h-[54px] w-13 -right-[1px]  rounded-r-2xl"><img className="h-[14px] w-[11px]" src="/icon-arrow.svg" alt="" /></button>

                    <input
                        type="text"
                        placeholder="192.212.174.101"

                        className={`block ${containsError ? "border-red-500 border" : ""} lg:hidden bg-white h-12 rounded-2xl pl-5 pr-20 focus:outline-none placeholder:text-[#2C2C2C]`}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>


                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch();
                    }}
                    className="hidden lg:relative lg:flex lg:items-center w-full">

                    {containsError &&
                        <span className="hidden lg:block absolute right-0 -top-4 text-red-500 text-xs font-bold">
                            Invalid IP
                        </span>
                    }

                    <button aria-label="button search ip" className="absolute cursor-pointer flex items-center justify-center  bg-Very-Dark-Gray h-[54px] w-13 -right-[1px]  rounded-r-2xl"><img className="h-[14px] w-[11px]" src="/icon-arrow.svg" alt="" /></button>

                    <input
                        type="text"
                        placeholder="Search for any IP address or domain"
                        className={`hidden ${containsError ? "border-red-500 border" : ""} lg:block bg-white w-full h-12 rounded-2xl pl-5  focus:outline-none placeholder:text-[#2C2C2C]`}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </form>



            </div>


        </>
    )

}