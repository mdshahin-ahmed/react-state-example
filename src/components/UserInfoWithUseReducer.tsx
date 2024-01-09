import React, { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return {
        ...currentState,
        name: action.payload,
      };
      break;

    default:
      break;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  return (
    <form>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-purple-300 m-10"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input
        // onChange={(e) => setUser({ ...user, age: e.target.value })}
        className="border border-purple-300 m-10"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input
        // onBlur={(e) =>
        //   setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        // }
        className="border border-purple-300 m-10"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobby"
      />
      <button
        className=" bg-purple-500 rounded-md border text-white p-1"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseReducer;
