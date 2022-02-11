import React from "react";

interface ChildArgument {
  color: string;
  onClick: () => void;
}

// wrong
// export const Child = ({ color, onClick }: ChildArgument) => {
//   return (
//     <div>
//       {color}
//       <button onClick={onClick}>Click Me</button>
//     </div>
//   );
// };

// benul (Function Component)
export const Child: React.FC<ChildArgument> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
