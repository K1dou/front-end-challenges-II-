
interface CardProps {
    className?: string;
    ip: string;
    location: string;
    timezone: string;
    isp: string;
}

export default function Card({ className, ip, location, timezone, isp }: CardProps) {




    return (


        <div className={`flex lg:flex-row lg:justify-center lg:pl-4 lg:w-[950px] lg:gap-6 flex-col items-center bg-white py-5 w-[330px] rounded-2xl space-y-4 ${className}`}>

            <div className="text-center lg:flex lg:flex-col lg:items-start">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Ip address</p>
                <p className="font-medium text-[#2C2C2C]">{ip}</p>
            </div>

            <div className="hidden lg:inline w-px h-16 bg-gray-300 mx-4" />

            <div className="text-center lg:flex lg:flex-col lg:items-start">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Location</p>
                <p className="font-medium text-[#2C2C2C]">{location}</p>
            </div>

            <div className="hidden lg:inline w-px h-16 bg-gray-300 mx-4" />

            <div className="text-center lg:flex lg:flex-col lg:items-start">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Timezone</p>
                <p className="font-medium text-[#2C2C2C]">{timezone}</p>
            </div>
            <div className="hidden lg:inline w-px h-16 bg-gray-300 mx-4" />

            <div className="text-center lg:flex lg:flex-col lg:items-start wrap-break-word">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Isp</p>
                <p className="font-medium lg:mb-4 text-[#2C2C2C]">{isp}</p>
            </div>



        </div>
    )
}