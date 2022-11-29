import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debountValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debountValue;
}

export default useDebounce;
