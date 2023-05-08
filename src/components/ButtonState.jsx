import { useState } from "react";

const ButtonState = () => {
//   let count = 0;

  const [count, setCount] = useState(0);
  //   console.log(arrayState);

//   const stateNumber = arrayState[0];
//   const stateFuntion = arrayState[1];

  const handleClick = () => {
    // console.log("HandleClick");
    // count++;
    setCount(count + 1);
  };

  return <button onClick={handleClick}>ButtonState: {count}</button>;
};

export default ButtonState;
