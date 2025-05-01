import { useState } from "react";

export default function CardStep1() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }



    return (
        <div className="bg-Blue-100 flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute -top-[69px]  py-8  left-1/2 transform -translate-x-1/2  rounded-lg  shadow-lg flex flex-col gap-4">

                <div className="mx-auto w-[85%] ">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Personal info</h1>
                    <p className="text-Grey-500 text-[17px]">Please provide your name, email address, and phone number</p>



                    <form className="flex flex-col mt-6 ">
                        <label className="text-Blue-950 text-[14px]" htmlFor="name">Name</label>
                        <input value={formData.name} onChange={handleChange} className="mb-4 border-[1px] rounded-[3px] h-10 border-gray-300 pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none text-Blue-950 font-medium" placeholder="e.g.Stephen King" name="name" type="text" />

                        <label className="text-Blue-950 text-[14px]" htmlFor="email">Email Address</label>
                        <input value={formData.email} onChange={handleChange} className="mb-4 border-[1px] rounded-[3px] h-10 border-gray-300 pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none text-Blue-950 font-medium" placeholder="e.g.stephenKing@lorem.com" name="email" type="text" />

                        <label className="text-Blue-950 text-[14px]" htmlFor="phone">Phone Number</label>
                        <input value={formData.phone} onChange={handleChange} className="mb-4 border-[1px] rounded-[3px] h-10 border-gray-300 pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none text-Blue-950 font-medium" placeholder="e.g. +1 234 567 890" name="phone" type="number" />



                    </form>

                </div>
            </div>
        </div>
    )



}