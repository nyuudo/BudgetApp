import { useState, useEffect } from "react";
import type { LocalStorageValue } from "../types";
export const useLocalStorage = (
  key: string,
  defaultValue: number
): LocalStorageValue => {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
