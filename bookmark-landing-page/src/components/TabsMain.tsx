import {
    Tabs,
    TabsList,
    TabsTrigger
} from "./ui/tabs";

interface TabsMainProps {
    onClick: (value: "simpleBook" | "speedy" | "easy") => void;
}

export default function TabsMain({ onClick }: TabsMainProps) {

    return (
        <>
            <Tabs defaultValue="account" className="w-[400px] flex items-center pt-9">
                <TabsList className="flex flex-col h-28 w-full px-9 items-center justify-center">
                    <div className="w-full h-1 text-gray-200 border-b"></div>

                    <TabsTrigger className="hover:lg:text-Red-400 " onClick={() => onClick("simpleBook")} value="account">Simple Bookmarking</TabsTrigger>
                    <TabsTrigger className="hover:lg:text-Red-400 " onClick={() => onClick("speedy")} value="Speedy">Speedy Searching</TabsTrigger>
                    <TabsTrigger className="hover:lg:text-Red-400 " onClick={() => onClick("easy")} value="Easy">Easy Sharing</TabsTrigger>
                </TabsList>

            </Tabs>

        </>
    )
}