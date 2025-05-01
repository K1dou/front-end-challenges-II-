import { useState } from "react";
import Container from "./Container";
import TabsMain from "./TabsMain";

export default function Features() {

    const [tabs, setTabs] = useState<keyof typeof features>("simpleBook");


    const [fade, setFade] = useState(true);

    function handleTabs(value: "simpleBook" | "speedy" | "easy") {
        setFade(false);
        setTimeout(() => {
            setTabs(value);
            setFade(true);
        }, 170);
    }


    const features = {
        simpleBook: {
            src: "/illustration-features-tab-1.svg",
            title: "Bookmark in one click",
            description:
                "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
        },
        speedy: {
            src: "/illustration-features-tab-2.svg",
            title: "Intelligent search",
            description:
                "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
        },
        easy: {
            src: "/illustration-features-tab-3.svg",
            title: "Share your bookmarks",
            description:
                "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        },
    } as const;





    return (
        <>
            <Container className="px-8 bg-white pt-22 pb-25 flex items-center flex-col " >

                <div className="lg:w-[500px]">
                    <h1 className="text-center font-medium text-Blue-950 text-[21px] lg:text-[32px] ">Features</h1>
                    <p className="text-center  text-gray-500 text-[14px] lg:text-[16px] text-pretty mt-3 mb-5">
                        Our aim is to make it quick and easy for you to access your
                        favourite websites. Your bookmarks sync between devices so you can
                        access them on the go.
                    </p>
                </div>

                <TabsMain onClick={handleTabs} />


            </Container>
            <Container className="pb-18 lg:flex lg:items-start lg:justify-start">

                <div className="relative  flex flex-col items-start justify-end mt-8 w-full">

                    <div className="h-43 w-63 bg-Blue-600 rounded-r-[250px] lg:h-90 lg:w-[700px] ">

                        <img
                            className={`absolute transition-opacity duration-300 ease-in-out -top-11 left-7 lg:-top-25 lg:left-52   h-[200px] w-[300px] lg:h-[450px] lg:w-[660px]  ${fade ? "opacity-100" : "opacity-0"}`}
                            src={features[tabs].src}
                            alt=""
                        />                    </div>

                </div>

                <div className={` lg:flex lg:mt-0 lg:flex-col lg:mr-[500px]  lg:items-start lg:w-[800px]  mt-10 px-5 transition-opacity duration-300 ease-in-out md:px-12 ${fade ? "opacity-100" : "opacity-0"}`}>
                    <h1 className="text-[21px]  font-medium text-Blue-950 lg:text-[32px] ">
                        {features[tabs].title}
                    </h1>
                    <p className=" lg:mt-4 lg:text-start text-gray-500 text-[14px] lg:text-[16px] text-pretty">
                        {features[tabs].description}
                    </p>

                    <button className=" hidden lg:block lg:w-[100px] lg:cursor-pointer lg:bg-Blue-600 lg:mt-8 lg:text-white  lg:py-3 lg:shadow-xl lg:rounded-[7px] lg:text-[13px] ">More info</button>
                </div>
            </Container>
        </>
    )

}