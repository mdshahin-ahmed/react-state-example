import { useState } from "react";
import "./App.css";
import CounterWithFuncComponent from "./components/CounterWithFuncComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="border border-purple-500 m-10 p-10">
        {count}
        <CounterWithFuncComponent count={count} setCount={setCount} />
      </h1>
    </div>
  );
}

export default App;
