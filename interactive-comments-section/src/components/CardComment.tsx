

export default function CardComment() {

    return (
        <main className="py-3 bg-White px-3 rounded-[10px]">
            <div className="flex items-center gap-3">
                <img className="h-9 w-9" src="/image-amyrobson.png" alt="" />
                <p className="font-semibold">amyrobson</p>
                <p className="text-gray-500 font-normal">1 month ago</p>
            </div>

            <div className="mt-3">
                <p className="text-gray-500 font-regular">Impressive! Though it seems the drag feature could be improved. But overall it looks
                    incredible. you've nailed the design and the responsiveness at various breakpoints works really well.

                </p>
            </div>

            <div className="flex justify-between mt-4 gap-2 ">
                <div className="bg-[#F5F6FA] gap-3 flex items-center rounded-[10px] py-2 px-2">
                    <button
                        className="p-1 rounded-full hover:bg-gray-200 "
                    >
                        <img src="/icon-plus.svg" alt="" />
                    </button>
                    <span className="font-bold text-[#5758AB]">12</span>

                    <button className="p-1 rounded-full hover:bg-gray-200 text-gray-500">
                        <img src="/icon-minus.svg" alt="" />
                    </button>
                </div>

                <button className="flex gap-2 items-center text-[#5758AB] font-bold"><img className="h-4 w-4 " src="/icon-reply.svg" alt="" />Reply</button>
            </div>


        </main>

    )
}