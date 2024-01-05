import { useCallback, useState } from "react";

export const useCount = () => {
  const [state, setState] = useState(0);

  const add = useCallback(async () => {
    const updated = state + 1;
    setState(updated);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return updated;
  }, [state]);

  return { state, addAge: add };
};
