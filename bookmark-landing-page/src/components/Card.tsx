interface Props {
    browser: string;
    minVersion: string | null;
    text: string | null;
}

export default function Card({ browser, minVersion, text }: Props) {

    return (
        <div className="bg-white  flex flex-col items-center pt-9 pb-5 rounded-lg shadow-2xl">

            <img className="h-19 w-19 mb-7" src={browser} alt="" aria-label="navegadorImagem" />

            <h1 className="font-bold text-Blue-950">{text}</h1>
            <p className="text-[#A4A5AA] text-[14px] mt-[3px] mb-7">{minVersion}</p>

            <img className="mb-6" src="/bg-dots.svg" alt="" />

            <button className="shadow-xl bg-Blue-600 py-[11px] px-8 text-[14px] text-white rounded-[6px]">Add & install Extension</button>

        </div>



    )
}