import React from 'react';
import ModelViwer from './components/ModelViewer';
import ModelUploader from './components/ModelUploader';
import ModelProvider from './components/context/ModelContext';
import './App.css';

function App() {
  
  return (
    <div className="app">
      <ModelProvider>
        <ModelViwer/>
        <ModelUploader/>
      </ModelProvider>
    </div>
  );
}

export default App;
