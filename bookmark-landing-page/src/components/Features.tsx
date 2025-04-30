import { useState } from "react";
import Container from "./Container";
import TabsMain from "./TabsMain";

export default function Features() {

    const [tabs, setTabs] = useState<keyof typeof features>("simpleBook");

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



    function handleTabs(value: "simpleBook" | "speedy" | "easy") {
        setTabs(value)
    }

    return (
        <>
            <Container className="px-8 bg-white pt-22 pb-25 flex items-center flex-col " >


                <h1 className="text-center font-medium text-Blue-950 text-[21px]">Features</h1>
                <p className="text-center text-gray-500 text-[14px] text-pretty mt-3 mb-5">
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between devices so you can
                    access them on the go.
                </p>

                <TabsMain onClick={handleTabs} />


            </Container>
            <Container className="pb-18">

                <div className="relative  flex flex-col items-start justify-end mt-8 w-full">

                    <div className="h-43 w-63 bg-Blue-600 rounded-r-[100px]">

                        <img className="absolute duration-300 ease-in -top-11 left-7 h-[200px]  w-[300px] " src={features[tabs].src} alt="" />
                    </div>

                </div>

                <div className="mt-10 px-5">
                    <h1 className="text-[21px] text-center font-medium text-Blue-950">{features[tabs].title}</h1>
                    <p className="text-center text-gray-500 text-[14px] text-pretty">
                        {features[tabs].description}
                    </p>
                </div>
            </Container>
        </>
    )

}