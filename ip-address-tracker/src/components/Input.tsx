export default function Input() {

    return (
        <>
            <div className="flex flex-col-reverse items-center justify-center bg-blue-400 h-110">
                <div className="relative">
                    <button className="absolute cursor-pointer flex items-center justify-center  bg-Very-Dark-Gray h-[54px] w-13 -right-[1px]  rounded-r-2xl"><img className="h-[14px] w-[11px]" src="/icon-arrow.svg" alt="" /></button>
                    <input type="text" placeholder="192.212.174.101" className="bg-white h-12 rounded-2xl pl-5 pr-16 focus:outline-none" />
                </div>
            </div>


        </>
    )

}