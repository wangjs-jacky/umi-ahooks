import { useRef } from "react";

const useLatest = (value: any) => {
    const ref = useRef(value);
    ref.current = value;

    return ref;
}

export default useLatest;