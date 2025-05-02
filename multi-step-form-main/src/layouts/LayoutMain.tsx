import FooterMain from "../components/FooterMain";
import NavMain from "../components/NavMain";

export default function LayoutMain({ children }: { children: React.ReactNode }) {


    return (


        <div className="min-h-[100dvh] flex flex-col">
            <NavMain />
            <main className="flex-1 flex flex-col ">
                {children}
            </main>

            <FooterMain />
        </div>



    )


}