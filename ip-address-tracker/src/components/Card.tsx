interface CardProps {
    className?: string;
}

export default function Card({ className }: CardProps) {

    return (


        <div className={`flex flex-col items-center bg-white py-5 w-[330px] rounded-2xl space-y-4 ${className}`}>
            <div className="text-center">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Ip address</p>
                <p className="font-medium text-[#2C2C2C]">192.212.174.101</p>
            </div>
            <div className="text-center">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Location</p>
                <p className="font-medium text-[#2C2C2C]">Brooklyn, NY 10001</p>
            </div>

            <div className="text-center">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Timezone</p>
                <p className="font-medium text-[#2C2C2C]">UTC -05:00</p>
            </div>

            <div className="text-center">
                <p className=" uppercase font-bold text-Dark-Gray text-[11px]">Isp</p>
                <p className="font-medium text-[#2C2C2C]">SpaceX Starlink</p>
            </div>



        </div>
    )
}