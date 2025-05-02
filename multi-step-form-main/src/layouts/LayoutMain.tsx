import FooterMain from "../components/FooterMain";
import NavMain from "../components/NavMain";

export default function LayoutMain({ children }: { children: React.ReactNode }) {


    return (







        // <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto] lg:grid-rows-1 lg:grid-cols-[280px_1fr] lg:bg-Blue-200 place-items-stretch">

        //     <div className="contents ">
        //         <NavMain className="bg-[url(/bg-sidebar-mobile.svg)] bg-cover lg:bg-[url(/bg-sidebar-desktop.svg)] lg:rounded-2xl" />
        //         <main className="p-4">{children}</main>
        //         <FooterMain className="lg:self-end" />
        //     </div>


        // </div>




        <div className="min-h-[100dvh] flex flex-col  lg:justify-center lg:items-center lg:bg-Blue-200 lg:flex-row lg:max-w-full  ">

            <div className="contents lg:flex lg:items-start lg:bg-White lg:w-[1050px] lg:h-[650px] lg:rounded-3xl lg:shadow-lg lg:shadow-Black/20    lg:gap-9 lg:p-5 ">

                <div className="contents lg:h-full lg:block">
                    <NavMain />
                </div>

                <div className="contents lg:h-full lg:flex lg:flex-col lg:w-full lg:pr-8">
                    <main className="flex-1 flex flex-col ">
                        {children}
                    </main>
                    <FooterMain />
                </div>
            </div>
        </div>



    )


}