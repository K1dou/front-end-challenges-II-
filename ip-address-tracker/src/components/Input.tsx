import { useEffect, useState } from "react";
import { useIpData } from "../data/useIpData";

interface InputProps {
    className?: string;
    onDataChange?: (data: {

        ip: string;
        location: string;
        timezone: string;
        isp: string;
    }) => void;
}

export default function Input({ className, onDataChange }: InputProps) {

    const [inputValue, setInputValue] = useState('192.212.174.101');
    const [ip, setIp] = useState('192.212.174.101');
    const [enabled, setEnabled] = useState(false);


    const { data, isLoading, error } = useIpData(ip, enabled);



    function handleSearch() {
        if (inputValue.trim()) {
            setIp(inputValue.trim());
            setEnabled(true);
        }
    }


    useEffect(() => {
        if (data) {
            const dataSend = {
                ip: data.ip || '',
                location: `${data.location?.region}, ${data.location?.city} ${data.location?.postalCode}`,
                timezone: data.location?.timezone || '',
                isp: data.isp || '',
            };

            onDataChange?.(dataSend);
        }
    }, [data]);



    return (
        <>
            <div className={`flex ${className}`}>

                {error && <p>Erro ao buscar IP</p>}

                <div className="relative flex items-center">
                    <button onClick={handleSearch} className="absolute cursor-pointer flex items-center justify-center  bg-Very-Dark-Gray h-[54px] w-13 -right-[1px]  rounded-r-2xl"><img className="h-[14px] w-[11px]" src="/icon-arrow.svg" alt="" /></button>
                    <input onChange={(e) => {
                        setInputValue(e.target.value)
                    }} type="text" placeholder="192.212.174.101" className="bg-white h-12 rounded-2xl pl-5 pr-16 focus:outline-none" />
                </div>
            </div>


        </>
    )

}