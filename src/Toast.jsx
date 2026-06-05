import { useEffect, useRef } from "react";

const Toast = ({ IsVisible, message, setIsVisible }) => {
    const timeoutRef = useRef()
    useEffect(() => {
        if (IsVisible) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
        }
        return () => {clearTimeout(timeoutRef.current)}
    }, [IsVisible])
    return (
        <div className={`z-10000 top-4 fixed transition-transform bg-green text-white duration-300 ${IsVisible ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0`}`}>
            <p>{message}</p>
        </div>
    );
}

export default Toast;