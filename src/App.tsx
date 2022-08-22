import React from 'react';
import Contador from './Component/Contador'

import './App.css';
import ContadorBy from './Component/ContadorBy';
import ContadorEffect from './Component/ContadorEffect';
import ContadorHook from './Component/ContadorHook';

function App() {
  return (
    <>
      <Contador/>
      <ContadorBy/>
      <ContadorEffect/>
      <ContadorHook/>
    </>
  );
}

export default App;
