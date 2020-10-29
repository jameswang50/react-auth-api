import { useState } from 'react';

function useForm(callback){

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
        }

        callback(inputs);
    }

    const handleInputChange = (event) => {
        event.persist();
        const {name,value} = event.target
        setInputs(fields => ({...fields, [name]: value}));
    }

    return {
        inputs,
        handleSubmit,
        handleInputChange
    }
}

export default useForm;