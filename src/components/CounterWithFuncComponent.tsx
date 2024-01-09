import React from "react";
import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFuncComponent = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-red-500 p-10 m-10">
      <button
        style={{
          background: "purple",
          color: "white",
          margin: 10,
          padding: 10,
        }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
      <ChildComponent count={count} />
    </div>
  );
};

export default CounterWithFuncComponent;
