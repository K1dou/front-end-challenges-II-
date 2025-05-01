import Container from "./Container";

export default function FooterMain() {

    return (
        <Container className="bg-White py-5 ">

            <div className="flex justify-between px-1 items-center">
                <a className="py-1 px-1 text-Grey-500 font-medium" href="#">Go Back</a>
                <button className="text-White  font-medium bg-Blue-950 px-4 py-2 rounded-[3px]">Next Step</button>
            </div>

        </Container>
    )
}