import { useState } from "react";
import "./App.css";
import CounterWithFuncComponent from "./components/CounterWithFuncComponent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h6 className="border border-purple-500 m-10 p-10">
        count = {count}
        <CounterWithFuncComponent count={count} setCount={setCount} />
      </h6>
    </div>
  );
}

export default App;
