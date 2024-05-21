import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setText("")
    setAmount(0)
  };

  return (
    <>
      <h3>დაამატეთ ტრანზაქცია</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">ტექსტი</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="შეიყვანეთ ტექსტი..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            რაოდენობა <br />
            (ხარჯის დროს გამოიყენეთ  - )
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="შეიყვანეთ რაოდენობა..."
          />
        </div>
        <button className="btn" >დაამატეთ ტრანზაქცია</button>
      </form>
    </>
  );
};

export default AddTransaction;
