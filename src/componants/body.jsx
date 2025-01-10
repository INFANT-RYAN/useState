import { useState } from "react";

export default function Body() {
    const [Num , setNum] = useState(0);

    function increment() {
        setNum(Num+1)
    }

    function decrement() {
        setNum(Num-1)
    }

    function reset() {
        setNum(0)
    }

  return (
    <div className="flex flex-col justify-center md:my-40 gap-y-10 mx-auto container my-10">
      <div className="flex justify-center"  >
        <p className=" text-9xl font-bold">{Num}</p>
      </div>
      <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-center ">
        <button onClick={increment} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-md   h-8 w-16 ">++</button>
        <button onClick={decrement} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-md   h-8 w-16 ">--</button>
        <button onClick={reset} className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-md   h-8 w-16 ">Reset</button>
      </div>
    </div>
  );
}
