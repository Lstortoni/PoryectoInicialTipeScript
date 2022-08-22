import React, { useEffect, useRef } from 'react'
import {useCounter} from '../hooks/useCounter'

interface Props {

   initialValue?:number
}
type numero =number;



const ContadorHook = () => {

   const {contador,handleClick,contadorElemento}=useCounter();
  return (
 <div>
    <h1>Contador Effect </h1>
    <h2 ref ={contadorElemento}>{contador}</h2>

    <button onClick={handleClick}> +1</button>
 </div>
  )
}

export default ContadorHook