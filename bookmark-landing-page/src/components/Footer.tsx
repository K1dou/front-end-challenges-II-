import Container from "./Container";


export default function Footer() {

    return (

        <Container className="bg-Blue-950 pt-9 flex flex-col items-center pb-10">

            <div className="flex  items-center gap-1">
                <span className="rounded-full py-[4px] px-[4px] bg-Blue-600 flex items-center justify-center">
                    <img src="logo-bookmarkfooter.svg" alt="" />
                </span>
                <h1 className="text-white uppercase text-[17px]">BookMark</h1>
            </div>

            <div className="flex  flex-col items-center gap-4 mt-7">
                <p className="uppercase text-gray-200 text-[13px]">Features</p>
                <p className="uppercase text-gray-200 text-[13px]">Princing</p>
                <p className="uppercase text-gray-200 text-[13px]">Contact</p>
            </div>


            <div className="flex gap-8 mt-7">
                <img src="/icon-facebook.svg" alt="" />
                <img src="/icon-twitter.svg" alt="" />
            </div>
        </Container>

    )
}