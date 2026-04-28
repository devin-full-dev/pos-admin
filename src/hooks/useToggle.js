import { useState } from "react";

export function useToggle(initial = false) {
    const [value, setValue] = useState(initial);
    const toggle = () => setValue(val => !val);
    return [toggle, value];
}
