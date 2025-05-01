import { useState } from "react";
import Container from "./Container";

interface NavProps {
    className?: string;
}

export default function Nav({ className }: NavProps) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <Container className={`px-6 bg-white pt-10 md:px-12 ${className}`} >



            <div className="hidden lg:flex justify-around items-center">
                <div>
                    <img src="/logo-bookmark.svg" alt="" />
                </div>

                <div className="flex items-center gap-8  text-Blue-950  text-[15px]">
                    <a href="#" className="uppercase hover:text-Red-400">Features</a>
                    <a href="#" className="uppercase hover:text-Red-400">Princing</a>
                    <a href="#" className="uppercase hover:text-Red-400">Contact</a>
                    <button aria-label="button login" className="cursor-pointer uppercase py-2 px-8 rounded-[6px] shadow-xl text-white hover:text-Red-400 hover:bg-white hover:outline-2 hover:outline-Red-400 bg-Red-400">Login</button>

                </div>


            </div>










            <div className={`${isOpen ? "opacity-0 lg:hidden" : "lg:hidden flex justify-between"} `}>
                <div><img src="/logo-bookmark.svg" alt="" /></div>
                <button
                    aria-label="button menu"
                    onClick={() => setIsOpen(true)}
                ><img src="/icon-hamburger.svg" alt="" /></button>
            </div>


            {isOpen && (
                <div className="fixed inset-0 z-40 bg-[#2F354F]/90 backdrop-blur-[1px] flex flex-col items-center pt-32 gap-6 text-white text-lg font-medium">
                    {/* Botão de fechar */}

                    <div className="flex items-center justify-center absolute top-13 left-6  ">

                        <div className=" pt-[24px] px-[12px] bg-white rounded-full">
                            <img src="/logo-bookmarkmenu.svg" className="text-Blue-600 absolute left-1 w-3 top-[9px]" alt="" />
                        </div>
                        <h1 className="text-white text-[21px] font-medium ml-2 uppercase">Bookmark</h1>
                    </div>

                    <button
                        aria-label="button close menu"
                        onClick={() => setIsOpen(false)}
                        className="absolute top-15 right-6"
                    >
                        <img src="/icon-close.svg" alt="Fechar menu" className="h-3" />
                    </button>


                    <nav className="flex flex-col items-center w-full gap-[16px] ">
                        <div className="w-[310px] h-[1px] bg-gray-500"></div>
                        <a href="#features" className=" tracking-widest font-light">FEATURES</a>
                        <div className="w-[310px] h-[1px] bg-gray-500"></div>

                        <a href="#pricing" className="tracking-widest font-light">PRICING</a>
                        <div className="w-[310px] h-[1px] bg-gray-500"></div>

                        <a href="#contact" className="tracking-widest font-light">CONTACT</a>

                        <div className="w-[310px] h-[1px] bg-gray-500"></div>

                        <button aria-label="button login" className="border-2 px-26 py-2 rounded-[6px] mt-2 tracking-widest">
                            LOGIN
                        </button>
                    </nav>

                    {/* Social icons */}
                    <div className="absolute bottom-8 flex gap-6">
                        <img src="/icon-facebook.svg" alt="Facebook" className="h-5" />
                        <img src="/icon-twitter.svg" alt="Twitter" className="h-5" />
                    </div>
                </div>
            )}



        </Container>
    )
}