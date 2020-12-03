import React, {createContext, useState} from 'react';

export const ModelContext = createContext();

const ModelProvider = (props) => {

    const [model, setModel] = useState("");

    const setUploadedModel = model => {
        setModel(model);
    }

    return (
        <ModelContext.Provider
            value={{
                model,
                setUploadedModel
            }}
        >
            {props.children}
        </ModelContext.Provider>
    )

}

export default ModelProvider;