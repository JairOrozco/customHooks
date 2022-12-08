import { useState } from "react"

export const useCounter = ( initialValue = 0 ) => {

    const [counter, setcounter] = useState( initialValue )

    // Formas para exponer métodos de un Hook

    const increment = ( value ) => {
        setcounter( counter + value );
    }

    const decrement = ( value ) => {
        if( counter <= 0 ) return;

        setcounter( counter - value );
    }

    const reset = () => {
        setcounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}