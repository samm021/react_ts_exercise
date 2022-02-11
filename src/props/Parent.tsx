import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  return (
    <Child color="yellow" onClick={() => console.log("")}>
      WALALA
    </Child>
  );
};
