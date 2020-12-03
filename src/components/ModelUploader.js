import React, { useState, useContext } from 'react';
import {ModelContext} from './context/ModelContext';
import './style.css';

const ModelUploader = () => {
    
    const modelContext = useContext(ModelContext);
    const {setUploadedModel} = modelContext;

    const [modelpath, setModelpath] = useState("");

    const handleChange = e => {        
        setModelpath(e.target.value);        
    }    
    
    const handleSubmit = e => {
        e.preventDefault();
        setUploadedModel(modelpath);
    }

    return(
        <div className="uploader-container">
            <form onSubmit={e => handleSubmit(e)}>
                <input 
                    type="text"
                    onChange={e => handleChange(e)}
                    value={modelpath}    
                />
                <button 
                    type="submit"
                >
                    Load
                </button>
            </form>            
        </div>
    )
}

export default ModelUploader;