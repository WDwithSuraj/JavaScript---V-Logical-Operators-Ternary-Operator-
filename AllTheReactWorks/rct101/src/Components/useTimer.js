
import { useEffect, useState } from "react";

const useTimer = (delay) => {
    const [showTimerText, setShowTimerText] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowTimerText(true)
        }, delay)
    }, [])

    return showTimerText
}

export default useTimer