import { useEffect, useState } from "react"

const AnimatedCounter = ({end, suffix, isVisible}) => {

    const [count, setCount] = useState(0);

        useEffect(() => {
            if(!isVisible) return; 
            const step = Math.ceil(end/50); 
            const interval = setInterval (() => {
                setCount((previous) => {
                    if(previous >= end) {
                        clearInterval(interval); 
                        return previous; 
                    }

                    const next = previous + step; 

                    return next > end ? end : next; 
                }); 
                }, 40);
                return () => clearInterval(interval); 
                }, 
                [end, isVisible]); 

            return(
                <span>
                    {count}
                    {suffix}
                </span>
        ); 
}; 
export default AnimatedCounter;