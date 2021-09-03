import { useEffect } from "react";


export const useDebouncedEffect = (effect, deps, delay) => {
    useEffect(() => {
        const handler = setTimeout(() => effect(),delay);
        return (() => clearImmediate(handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[...(deps||[]),delay])
};