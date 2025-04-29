import Container from "./Container";
import Nav from "./Nav";

export default function SessionTopo() {

    return (

        <Container className="bg-white pb-11">
            <Nav />

            <div className="relative flex flex-col items-end justify-end mt-35 w-full">

                <div className="h-38 w-63 bg-Blue-600 rounded-l-[100px]">

                    <img className="absolute -top-16 left-7 h-[235px] w-[335px] " src="/illustration-hero.svg" alt="" />
                </div>

            </div>

            <div className="px-4 pt-4">
                <h1 className="text-center mt-8 text-[30px] font-medium text-Blue-950">A Simple Bookmark Manager</h1>
                <p className="pt-4 text-center text-pretty">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
                <button className="text-[15px] py-3 px-5 rounded-[6px] bg-Blue-600 text-white font-medium shadow-xl ">Get it on Chrome</button>
                <button className="text-[15px] py-3 px-5 rounded-[6px] bg-[#F7F7F7] text-[#5D616C] font-medium shadow-xl"> Get it on Firefox</button>
            </div>

        </Container>
    )

}