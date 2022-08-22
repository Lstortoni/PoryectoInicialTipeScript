import React, { useEffect, useRef } from 'react'
import {gsap} from 'gsap'

interface Props {

   initialValue?:number
}
type numero =number;

const MAXIMUN_COUNTER :numero = 10

const ContadorEffect = ({initialValue=0}:Props) => {
  
    const[contador,setContador] = React.useState<numero>(initialValue)
     
    const contadorElemento = useRef<HTMLHeadingElement>(null)

    //useEffect se ejecuta antes que rendericen los componentes
    

    useEffect(() => {
         
       
      
       if(contador<10) return

       console.log('Es mayor que 10')
       
       const tl = gsap.timeline();

       tl.to (contadorElemento.current,{y:-10,duration:0.2,ease:'ease.out'})
       tl.to (contadorElemento.current,{y:0,duration:1,ease:'bounce.out'})
       
     
    }, [contador])   //lo que le estoy diciendo es que se ejecute cada vez que el contaro cambie
    

    const handleClick= ()=>{



     // (contador<MAXIMUN_COUNTER ?  setContador(prev=> prev +1) : return )
     setContador(prev=> Math.min (prev +1,MAXIMUN_COUNTER))
     // if(contador<MAXIMUN_COUNTER ){  //una forma un poco mas simple de resolverlo-
      // setContador(prev=> prev +1)  //OTRA FORMA DE HACERLO EN VEZ DE (CONTATOR+1)
      
     // }
    }

  return (
 <div>
    <h1>Contador Effect </h1>
    <h2 ref ={contadorElemento}>{contador}</h2>

    <button onClick={handleClick}> +1</button>
 </div>
  )
}

export default ContadorEffect