import React, { ReactNode } from "react";

// export const Button = (props: {}) => {
//   return <button>{props.children}</button>;
// };
export const Button = (props: { children: ReactNode}) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
