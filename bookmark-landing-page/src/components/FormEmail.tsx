import { useState } from "react"
import Container from "./Container";

export default function FormEmail() {

    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)

    function validateEmail(value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (email === "") {
            setError(true)
            return
        }
        if (!validateEmail(email)) {
            setError(true)
            return
        }
        setError(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setError(false)
    }

    return (

        <Container className="flex flex-col items-center  bg-Blue-600 px-4 pt-13 ">

            <div>
                <p className="text-center text-white text-[13px] uppercase tracking-[3px]">35,000+ Already joined</p>
                <h1 className="text-white text-center text-[24px] mt-2">Stay up-to-date with what we're doing</h1>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col  mt-8 pb-13">

                <div className={`flex flex-col ${error ? "outline-Red-400 outline-[2px] rounded-[5px]" : ""}`}>
                    <div className="relative">
                        {error && (
                            <span className="absolute right-3 bottom-[12px]">
                                <img src="/icon-error.svg" alt="error icon" />
                            </span>
                        )}

                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter your email address"
                            className={`bg-white pl-4 w-70 ${error ? "rounded-t-[4px]" : "rounded-[4px]"
                                } py-[11px] text-[13px] font-regular placeholder:text-gray-300 text-Blue-950 focus:outline-none`}
                        />
                    </div>

                    <span
                        className={`text-[10px] py-[2px] pl-3 rounded-b-[3px] h-[18px] transition-all duration-200 ${error
                            ? "bg-Red-400 text-white italic"
                            : "opacity-0 pointer-events-none"
                            }`}
                    >
                        Whoops, make sure it's an email
                    </span>
                </div>

                <button type="submit" className=" outline-Red-400 outline-[1px] bg-Red-400 text-center px-[124px] py-[11px] rounded-[4px] text-white text-[13px] mt-[10px]">Contact Us</button>

            </form>





        </Container>


    )
}