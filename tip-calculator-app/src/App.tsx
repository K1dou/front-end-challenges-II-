import Button from "./components/Button"
import Card from "./components/Card"
import InputMain from "./components/InputMain"
import "./index.css"
function App() {


  return (

    <>
      <nav className="text-Green-900 uppercase mt-8"><img src="/logo.svg" alt="" /></nav>

      <main className="min-h-screen bg-white w-full  rounded-t-2xl mt-8 pb-5 px-5">

        <InputMain inputClassName="mt-[32px]" type="bill" />

        <div>
          <div className="mt-2 flex flex-wrap justify-around gap-2">
            <p className="text-[16px] font-bold mt-6 w-full  text-Grey-500">Select tip %</p>

            <Button color="main" value={5} />
            <Button color="main" value={10} />
            <Button color="active" value={15} />
            <Button color="main" value={15} />
            <Button color="main" value={50} />
            <Button color="custom" value={"Custom"} />

          </div>
        </div>

        <InputMain inputClassName="mt-[30px] mb-[32px]" type="people" />



        <Card total={32.79} tipAmount={4.27}></Card>


      </main>


    </>

  )
}

export default App
