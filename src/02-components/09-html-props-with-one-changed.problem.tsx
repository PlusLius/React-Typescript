import React, { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// export const Input = (
//   props: ComponentProps<"input"> & { onChange: (value: string) => void }
// ) => {
//   return (
//     <input
//       {...props}
//       onChange={(e) => {
//         props.onChange(e.target.value);
//       }}
//     ></input>
//   );
// };

// export const Input = (
//   props: Omit<ComponentProps<"input">, 'onChange'> & { onChange: (value: string) => void }
// ) => {
//   return (
//     <input
//       {...props}
//       onChange={(e) => {
//         props.onChange(e.target.value);
//       }}
//     ></input>
//   );
// };

// type InputProps = Omit<ComponentProps<"input">, 'onChange'> & { onChange: (value: string) => void }
// interface InputProps extends Omit<ComponentProps<"input">,'onChange'> {
//   onChange: (value: string) => void 
// }

type Overridden<T, Overridden> = Omit<T, keyof Overridden> & Overridden

type InputProps = Overridden<ComponentProps<'input'>, { onChange: (value: string) => void }>

export const Input = (
  props: InputProps
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};


const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
