import { useEffect } from "react";

export const useTimeout = (timerMs: number) => {
  useEffect(
    // () =>
    //   setTimeout(() => {
    //     console.log("Done!");
    //   }, timerMs),
    () => {
      const timeOut = setTimeout(() => {
        console.log("Done!");
      }, timerMs)
      return () => clearTimeout(timeOut)
    },
    [timerMs],
  );
};
