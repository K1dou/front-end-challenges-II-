import Container from "./Container";
import { data } from "../data/dataAccordion";
import AccordionMain from "./AccordionMain";

export default function AskedQuestion() {




    return (
        <Container className="bg-white pt-12 flex flex-col items-center pb-25 px-4 md:px-12 lg:px-20 lg:pt-24 ">

            <div className=" flex flex-col items-center max-w-[380px]">

                <div className="px-[31px] mb-15 ">

                    <h1 className="text-center font-bold text-Blue-950 text-[20px] lg:text-[32px] ">Frequently Asked <br />  Questions</h1>

                    <p className="mt-3 text-center text-gray-400 text-[14px] text-pretty ">Here are some of our FAQs. If you have any other questions you’d like
                        answered please feel free to email us.</p>
                </div>


                <div className="h-px bg-gray-400 my-2 w-[340px] " />

                {data.map((item, i) => {
                    return (
                        <AccordionMain key={i} title={item.question ?? ''} content={item.answer ?? ''} />
                    )
                })}


                <button className="lg:cursor-pointer bg-Blue-600 mt-8 text-white px-5 py-2 shadow-xl rounded-[7px] text-[13px] lg:mt-20">More Info</button>
            </div>
        </Container>

    )
}