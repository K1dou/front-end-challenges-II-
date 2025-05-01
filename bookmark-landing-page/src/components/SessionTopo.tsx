import Container from "./Container";
import Nav from "./Nav";

export default function SessionTopo() {

    return (

        <Container className="bg-white pb-11">
            <Nav className="lg:mb-36" />

            <div className="lg:flex lg:flex-row-reverse lg:pb-38">

                <div className=" flex justify-end w-full h-[235px] lg:mt-0">

                    <div className="relative pb-30 flex justify-end w-full h-[235px] mt-35 lg:mt-1 lg:h-[630px]">
                        {/* Fundo azul — fica posicionado à esquerda */}
                        <div className="absolute bottom-0 right-0 h-38 w-[70vw] max-w-[350px] lg:max-w-none bg-Blue-600 rounded-l-[250px] lg:h-100 lg:w-[50%] z-0" />

                        {/* Imagem — acima do fundo */}
                        <img
                            src="/illustration-hero.svg"
                            alt=""
                            className="absolute -top-15 right-4 lg:-top-10 lg:right-0 z-10 h-[235px] w-[335px] lg:h-[630px] lg:w-[75%]"
                        />
                    </div>


                </div>

                <div className="lg:ml-[15%]  lg:mt-2 lg:max-w-[470px] lg:flex lg:flex-col lg:items-start lg:justify-start ">

                    <div className="px-4 pt-40 lg:pt-0 lg:px-0">
                        <h1 className="text-center lg:text-start mt-8 text-[30px] font-medium lg:text-[50px] text-Blue-950">A Simple Bookmark Manager</h1>
                        <p className="text-center lg:text-start text-gray-500 text-[14px] lg:text-[16px] text-pretty">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    </div>

                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button aria-label="button get chrome" className="lg:cursor-pointer lg:hover:text-Blue-600 lg:hover:bg-white lg:hover:outline-Blue-600 lg:hover:outline-2  text-[15px] py-3 px-5 rounded-[6px] bg-Blue-600 text-white font-medium shadow-xl ">Get it on Chrome</button>
                        <button aria-label="button get firefox" className="lg:cursor-pointer  lg:hover:bg-white lg:hover:outline-[#5D616C] lg:hover:outline-2 text-[15px] py-3 px-5 rounded-[6px] bg-[#F7F7F7] text-[#5D616C] font-medium shadow-xl"> Get it on Firefox</button>
                    </div>
                </div>
            </div>

        </Container>
    )

}