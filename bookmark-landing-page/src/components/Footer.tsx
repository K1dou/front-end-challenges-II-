import Container from "./Container";


export default function Footer() {

    return (

        <Container className="bg-Blue-950 pt-9 flex flex-col items-center pb-15 lg:flex-row lg:justify-around">


            <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-8">


                <div className="flex  items-center gap-1 mt-7 mr-12">
                    <span className="rounded-full py-[4px] px-[4px] bg-Blue-600 flex items-center justify-center">
                        <img src="logo-bookmarkfooter.svg" alt="" />
                    </span>
                    <h1 className="text-white uppercase text-[17px]">BookMark</h1>
                </div>

                <div className="flex  flex-col items-center gap-4 mt-7 lg:flex-row ">
                    <p className="lg:cursor-pointer lg:hover:text-Red-400 uppercase text-gray-200 text-[13px]">Features</p>
                    <p className="lg:cursor-pointer lg:hover:text-Red-400 uppercase text-gray-200 text-[13px]">Princing</p>
                    <p className="lg:cursor-pointer lg:hover:text-Red-400  uppercase text-gray-200 text-[13px]">Contact</p>
                </div>


            </div>




            <div className="flex  items-center gap-1 lg:hidden">
                <span className="rounded-full py-[4px] px-[4px] bg-Blue-600 flex items-center justify-center">
                    <img src="logo-bookmarkfooter.svg" alt="" />
                </span>
                <h1 className="text-white uppercase text-[17px]">BookMark</h1>
            </div>

            <div className="flex  flex-col items-center gap-4 mt-7 lg:hidden ">
                <p className=" uppercase text-gray-200 text-[13px]">Features</p>
                <p className=" uppercase text-gray-200 text-[13px]">Princing</p>
                <p className="uppercase text-gray-200 text-[13px]">Contact</p>
            </div>


            <div className="flex gap-8 mt-7 " >
                <img className="lg:cursor-pointer lg:hover:text-Red-400 " src="/icon-facebook.svg" alt="" />
                <img className="lg:cursor-pointer lg:hover:text-Red-400 " src="/icon-twitter.svg" alt="" />
            </div>
        </Container>

    )
}