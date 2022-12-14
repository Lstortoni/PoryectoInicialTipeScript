import { click } from '@testing-library/user-event/dist/click'
import React from 'react'

interface Props {

   initialValue?:number
}

interface EstadoContador{
   contador: number,
   clicks: number,
}
const ContadorBy = ({initialValue=10}:Props) => {
  
         const[EstadoContador,setEstadoContador] = React.useState<EstadoContador>({
            contador:initialValue,
            clicks:0,

         })    

      const {contador,clicks} = EstadoContador;

    //initialValue es de tipo Counter por consecuencia contador es de tipo counter
     
    const handleClick= (value:number)=>{

        setEstadoContador(({clicks,contador})=>(
        {
          contador: contador + value,
          clicks : clicks +1
        }

        )
         
         );  //OTRA FORMA DE HACERLO EN VEZ DE (CONTATOR+1)
   
   }

  return (
 <div>
    <h1>Contador By{contador}</h1>

    <h1>Cantidad de clicks :{clicks}</h1>

    <button onClick={()=>handleClick(1)}> Suma +1</button>

    <button onClick={()=>handleClick(5)}> Suma +5</button>
 </div>
  )
}

export default ContadorBy