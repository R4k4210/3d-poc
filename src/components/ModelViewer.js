import React, {useContext, useEffect} from 'react';
import {ModelContext} from './context/ModelContext';
import './style.css';

const ModelViewer = () => {

    const modelContext = useContext(ModelContext);
    const {model} = modelContext;

    useEffect(() => {
        /*
        (() => {
            const modelViewer = document.querySelector('#orbit-demo');
            const orbitCycle = [
              '45deg 55deg 4m',
              '-60deg 110deg 2m',
              modelViewer.cameraOrbit
            ];
          
            setInterval(() => {
              const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
              modelViewer.cameraOrbit =
                  orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
            }, 3000);
        })();
       
        (() => {
            const modelViewer = document.querySelector('#paused-change-demo');
            
            setInterval(() => {
                modelViewer.animationName = modelViewer.animationName === 'Running' ?
                'Wave' : 'Running';
            }, 1500.0);
        })();
         */

    }, [model]);    

    return (
        <div className="viewer-container">
            {/*
            <div className="model-container">
                <model-viewer 
                    id="orbit-demo"
                    class="model"                    
                    src="/assets/GLB/Raregotchi.glb"
                    alt="A 3D model of an astronaut" 
                    auto-rotate camera-controls
                >        
                </model-viewer>  
            </div> 
            <div className="model-container">
                <model-viewer 
                    id="paused-change-demo"
                    class="model"
                    src="/assets/GLB/RobotExpressive.glb" 
                    alt="A 3D model of an astronaut" 
                    camera-controls autoplay animation-name="Running"
                >  
                </model-viewer>  
            </div>
            */}
            <div className="model-container">
                <model-viewer 
                    class="model"
                    src="https://storage.googleapis.com/whitepaper/raregotchi/school_boy_packed.glb" 
                    alt="A 3D model of an astronaut" 
                    camera-controls exposure="0.5"
                >        
                </model-viewer>  
            </div>
            <div className="model-container">
                <model-viewer 
                    class="model"
                    src="https://storage.googleapis.com/whitepaper/raregotchi/school_boy.glb" 
                    alt="A 3D model of an astronaut" 
                    camera-controls exposure="0.5"
                >        
                </model-viewer>  
            </div>    
            <div className="model-container">
                <model-viewer 
                    className="model"
                    src={model} 
                    alt="A 3D model of an astronaut" 
                    auto-rotate camera-controls
                >        
                </model-viewer>  
            </div>                                                         
        </div>
    )
}

export default ModelViewer;