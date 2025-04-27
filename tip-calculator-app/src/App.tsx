import { useState } from "react";
import Button from "./components/Button"
import Card from "./components/Card"
import InputMain from "./components/InputMain"
import "./index.css"
function App() {

  const [bill, setBill] = useState<number | null>(null);
  const [people, setPeople] = useState<number | null>(null);

  const [tip, setTip] = useState<number | "Custom" | null>(null);

  const tipAmount = bill && people && typeof tip === "number" ? (bill * tip / 100) / people : 0;
  const total = bill && people ? bill / people + tipAmount : 0;

  const isReset = bill === 0 && people === 0 && (tip === null || tip === "Custom");

  const [peopleTouched, setPeopleTouched] = useState(false);

  const hasPeopleError = peopleTouched && people === 0;

  function handleTipClick(value: number | "Custom") {
    setTip(value);
  }

  function handleReset() {
    setBill(0);
    setPeople(0);
    setTip(null);
    setPeopleTouched(false);
  }

  return (

    <>
      <nav className="text-Green-900 uppercase mt-8"><img src="/logo.svg" alt="" /></nav>

      <main className="lg:flex lg:gap-10 lg:px-7 lg:max-w-[1110px]  tablet: md:min-h-0 md:rounded-b-2xl md:px-13     mobile: min-h-screen bg-white w-full  rounded-t-2xl mt-8 pb-5 px-5">

        <div className="lg:basis-2/4 lg:py-5">
          <InputMain inputClassName="mt-[32px]" type="bill" value={bill ?? undefined} onChange={setBill} />

          <div>
            <div className="lg:justify-start mt-2 flex flex-wrap justify-around gap-2">
              <p className="text-[16px] font-bold mt-6 w-full  text-Grey-500">Select tip %</p>

              <Button value={5}
                onClick={() => handleTipClick(5)} isActive={tip === 5} />
              <Button value={10}
                onClick={() => handleTipClick(10)}
                isActive={tip === 10} />
              <Button value={15}
                onClick={() => handleTipClick(15)}
                isActive={tip === 15} />
              <Button value={25}
                onClick={() => handleTipClick(25)}
                isActive={tip === 25} />
              <Button value={50}
                onClick={() => handleTipClick(50)}
                isActive={tip === 50} />
              <Button value="Custom"
                color="custom"
                onClick={() => handleTipClick("Custom")}
              />

            </div>
          </div>

          <InputMain
            onChange={setPeople}
            hasError={hasPeopleError}
            onBlur={() => setPeopleTouched(true)} inputClassName="mt-[30px] mb-[32px]" type="people" value={people} />

        </div>

        <div className="lg:basis-2/4 lg:py-5">
          <Card isreset={isReset} onClickCustom={() => handleReset()} inputClassName="lg:h-full  md:px-[65px] md:py-[50px]" total={parseFloat(total.toFixed(2))} tipAmount={parseFloat(tipAmount.toFixed(2))}></Card>
        </div>

      </main>


    </>

  )
}

export default App
