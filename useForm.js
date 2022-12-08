import { useState } from "react"


export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )

    
    const inputChange = ( { target } ) => {

        const { name, value } = target;

        setFormState( {
            ...formState,
            // Con las propiedades computadas de los objetos en JS se da el value al campo de input que sea el objetivo 
            [ name ]: value,
        } )

    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        inputChange,
        onResetForm
    }
}
