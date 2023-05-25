import { useRef } from "react"


export const useDebounce = () => {
    let { current: id } = useRef()
    const debounce = (fun, delay) => {
        if (id) {
            clearTimeout(id)
        }
        id = setTimeout(() => {
            fun()
        }, delay)
    }
    return debounce
}