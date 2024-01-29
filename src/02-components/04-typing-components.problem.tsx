import React from "react";

// export const Button = (props: unknown) => {
//   return <button className={props.className}></button>;
// };

// type Props = {
//   className: string
// }

// interface Props {
//   className: string
// }

// export const Button = (props: { className: string }) => {
//   return <button className={props.className}></button>;
// };

export const Button = ({ className }: { className: string }) => {
  return <button className={className}></button>;
};


const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
