import React, { useState } from "react";
import Home from "../components/Home";
const HomeScreen = () => {
  const [countLevel, setCountLevel] = useState<number>(0);

  const onIncrement = () => setCountLevel(countLevel + 1);
  const onDecrement = () =>
    setCountLevel(countLevel > 0 ? countLevel - 1 : 0);

  return (
    <Home
      name={"Muhammad Sabit"}
      countLevel={countLevel}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

export default HomeScreen;
