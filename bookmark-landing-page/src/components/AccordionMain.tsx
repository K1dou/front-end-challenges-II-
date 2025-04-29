import { ChevronDownIcon } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

interface AccordionMainProps {
    title: string
    content: string
}

export default function AccordionMain({ title, content }: AccordionMainProps) {
    return (



        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="px-4">
                <AccordionTrigger className="text-Blue-950 text-[14px]">
                    {title}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-[14px]  leading-[30px]">
                    {content}
                </AccordionContent>
                <div className="h-px bg-gray-400 my-2 w-full" />
            </AccordionItem>

        </Accordion>




    )
}