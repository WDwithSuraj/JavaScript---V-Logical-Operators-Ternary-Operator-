import { useRef } from "react"

export const useThrotle = () => {
    let { currend: wait } = useRef(false);

    const throtleFunc = (fun, delay) => {
        if (wait) return;

        fun();
        wait = true;

        setTimeout(() => {
            wait = false
        }, delay)
    }

    return throtleFunc
}