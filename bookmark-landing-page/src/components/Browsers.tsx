import Container from "./Container";
import { dataBrowsers } from "../data/dataBrowsers";
import Card from "./Card";

export default function Browsers() {

    return (

        <Container className="px-6 bg-white pt-13 pb-25" >
            <h1 className="text-center font-medium text-Blue-950 text-[21px] ">Download the extension</h1>

            <p className="text-center text-gray-500 text-[14px] text-pretty mt-3">We’ve got more browsers in the pipeline. Please do let us know if you’ve
                got a favourite you’d like us to prioritize.
            </p>

            <div className="flex flex-col gap-10 mt-10">
                {dataBrowsers.map((item, i) => (
                    <Card key={i} browser={item.browser} minVersion={item.minVersion} text={item.text} />
                ))}
            </div>





        </Container>



    )
}