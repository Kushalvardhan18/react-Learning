import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(5);

  // let counter =5;
  const addValue = () => {
    // counter++;
    if(counter <20)
      setCounter(counter + 1);
      // setCounter((prevCounter)=> prevCounter + 1);
      // setCounter((prevCounter)=> prevCounter + 1);
      // setCounter((prevCounter)=> prevCounter + 1);

    // console.log("clicked",counter);
  };
  const removeValue = () => {
    // counter--;
    if (counter >= 1) setCounter(counter - 1);
    // console.log("clicked",counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value : {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
