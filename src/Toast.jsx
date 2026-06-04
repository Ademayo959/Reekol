import { useEffect, useRef } from "react";

const Toast = ({ IsVisible, message, setIsVisible }) => {
    const timeoutRef = useRef()
    useEffect(() => {
        if (IsVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        }
        return clearTimeout(timeoutRef.current)
    }, [IsVisible])
    return (
        <div className={`bg-green text-white duration-300 ${IsVisible ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0`}`} style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <p>{message}</p>
        </div>
    );
}

export default Toast;