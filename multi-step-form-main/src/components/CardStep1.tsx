import { useFormContext } from "@/contexts/FormContext";

export default function CardStep1() {

    const { formData, setFormData, formErrors } = useFormContext();


    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        formErrors[name as keyof typeof formErrors] = "";
    }



    return (
        <div className=" flex-1 relative">

            <div className="w-[90%] mx-auto bg-White absolute lg:static -top-[69px]  py-6  left-1/2 transform -translate-x-1/2 lg:translate-0  rounded-lg  shadow-lg flex flex-col gap-4 lg:bg-none lg:shadow-none">

                <div className="mx-auto w-[85%] lg:w-[92%] ">

                    <h1 className="text-Blue-950 font-bold text-2xl mb-2">Personal info</h1>
                    <p className="text-Grey-500 text-[17px]">Please provide your name, email address, and phone number</p>



                    <form className="flex flex-col mt-6 ">


                        <label className="relative text-Blue-950 text-[14px] lg:mb-1" htmlFor="name">
                            Name

                            {formErrors.name && <span className=" absolute font-bold text-Red-500 text-[14px] right-0 top-0">{formErrors.name}</span>}
                        </label>
                        <input value={formData.name} onChange={handleChange} className={`lg:cursor-pointer mb-4 lg:mb-6 border-[1px] rounded-[3px] lg:rounded-[7px] h-10 lg:h-12  ${formErrors.name ? "border-Red-500" : "border-gray-300"} pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none  lg:focus:ring-1 lg:focus:ring-Purple-600 text-Blue-950 font-medium`} placeholder="e.g.Stephen King" name="name" type="text" />


                        <label className="relative text-Blue-950 text-[14px] lg:mb-1" htmlFor="email">Email Address

                            {formErrors.email && <span className="absolute font-bold text-Red-500 text-[14px] right-0 top-0">{formErrors.email}</span>}
                        </label>
                        <input value={formData.email} onChange={handleChange} className={`lg:cursor-pointer mb-4 lg:mb-6 border-[1px] rounded-[3px] lg:rounded-[7px] h-10 lg:h-12 ${formErrors.email ? "border-Red-500" : "border-gray-300"} pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none lg:focus:ring-1 lg:focus:ring-Purple-600 text-Blue-950 font-medium`} placeholder="e.g.stephenKing@lorem.com" name="email" type="text" />

                        <label className="relative text-Blue-950 text-[14px] lg:mb-1" htmlFor="phone">Phone Number

                            {formErrors.phone && <span className="absolute font-bold text-Red-500 text-[14px] right-0 top-0">{formErrors.phone}</span>}
                        </label>
                        <input value={formData.phone} onChange={handleChange} className={`lg:cursor-pointer mb-4 lg:mb-6 border-[1px] rounded-[3px] lg:rounded-[7px] h-10 lg:h-12 ${formErrors.phone ? "border-Red-500" : "border-gray-300"} pl-4 placeholder:font-medium placeholder:text-Grey-500 focus:outline-none lg:focus:ring-1 lg:focus:ring-Purple-600 text-Blue-950 font-medium `} placeholder="e.g. +1 234 567 890" name="phone" type="number" />



                    </form>

                </div>
            </div>
        </div>
    )



}