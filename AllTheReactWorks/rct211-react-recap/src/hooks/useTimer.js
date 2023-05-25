import { useEffect, useState } from "react"

export const useTimer = (delay) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, delay)
    }, [])

    return show
}