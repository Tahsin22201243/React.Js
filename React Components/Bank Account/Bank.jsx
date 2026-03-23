import { useReducer, useState } from "react";

export default function Bank() {
  function reducer(state, action) {
    if (action.type == "add") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type == "sub") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  const [state, dispatch] = useReducer(reducer, { balance: 0 });
  const [amount, setAmount] = useState();
  return (
    <div>
      <h1>Bank Balance</h1>
      Current Balance:{state.balance}
      <h3>Input New Balance:</h3>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        id=""
      />
      <button
        onClick={() => dispatch({ type: "add", payload: Number(amount) })}
      >
        Deposite
      </button>
      <button
        onClick={() => dispatch({ type: "sub", payload: Number(amount) })}
      >
        Withdraw
      </button>
    </div>
  );
}
