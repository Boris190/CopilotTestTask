"use client";

import { Dispatch, SetStateAction, useCallback, useState } from "react";

function useToggle(
  defaultValue?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((state) => !state), []);

  return [value, toggle, setValue];
}

export default useToggle;
