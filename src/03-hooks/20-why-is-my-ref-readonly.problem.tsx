import { useRef } from "react";

export const Component = () => {
  // const ref = useRef<string>(null);
  const ref = useRef<string|null>(null);

  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
