import { useState } from "react";
import Card from "./components/card";
function App() {
  const [count, setCount] = useState(0);
let myObj ={
  username:"kushal",
  age:23,
}
let newArr=[1,2,3,4]
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card userId ="1" heading ="kushal" price ="500" />
      <Card userId ="2"heading="vardhan" price ="900" />
      <Card userId ="3"heading="aman" price ="1500" />
      <Card userId ="3"heading="aman" />
    </>
  );
}

export default App;
