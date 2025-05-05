export default function FieldAddComent() {

    return (
        <main className="bg-White py-3 px-3 rounded-[10px]">
            <textarea className="w-full h-24 pl-4 pt-2 border-1 border-gray-300 rounded-[7px] font-regular focus:outline-none" name="" id="" placeholder="Add a comment..."></textarea>

            <div className="flex justify-between items-center mt-3">
                <img className="h-8 w-8" src="/image-juliusomo.png" alt="" />
                <button className="uppercase bg-Purple-600 text-White py-2 px-6 rounded-[8px]">Send</button>
            </div>

        </main>
    )
}