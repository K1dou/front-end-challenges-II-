import Container from "./Container";
import { dataBrowsers } from "../data/dataBrowsers";
import Card from "./Card";

export default function Browsers() {

    return (

        <Container className="px-6 bg-white pt-13 pb-25 md:px-12" >

            <div className="lg:max-w-[580px] lg:flex lg:flex-col lg:items-center lg:justify-center lg:mx-auto lg:pt-15">
                <h1 className="text-center font-medium text-Blue-950 text-[21px] lg:text-[32px]  ">Download the extension</h1>

                <p className="text-center text-gray-500 text-[14px] lg:text-[16px] text-pretty mt-3">We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.
                </p>
            </div>

            <div className="flex flex-col gap-10 mt-10 px-7 md:px-24 lg:flex-row lg:justify-center lg:pt-10">

                {dataBrowsers.map((item, i) => (
                    <div key={i} style={{ marginTop: `${i * 50}px` }} className="transition-all">

                        <Card className="transition-all" key={i} browser={item.browser} minVersion={item.minVersion} text={item.text} />
                    </div>

                ))}
            </div>





        </Container>



    )
}