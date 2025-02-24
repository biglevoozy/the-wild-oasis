import { useEffect, useRef } from "react";

export function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [ref, handler, listenCapturing]
  );

  return ref;
}

// useEffect(
//     function () {
//       function handleClick(e) {
//         if (ref.current && !ref.current.contains(e.target)) close();
//       }

//       document.addEventListener("click", handleClick, true);

//       return () => document.removeEventListener("click", handleClick, true);
//     },
//     [close]
//   );
