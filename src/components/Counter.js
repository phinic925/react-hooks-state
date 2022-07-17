import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count=> count + 1);
    console.log(`after setState: ${count}`);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
