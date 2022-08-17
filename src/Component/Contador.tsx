import React from 'react'

interface Props {

   initialValue?:number
}
type contador =number;


const Contador = ({initialValue=0}:Props) => {
  
    const[contador,setContador] = React.useState<contador>(initialValue)
     
    const handleClick= ()=>{

        setContador(prev=> prev +1)  //OTRA FORMA DE HACERLO EN VEZ DE (CONTATOR+1)
    }

  return (
 <div>
    <h1>{contador}</h1>

    <button onClick={handleClick}> +1</button>
 </div>
  )
}

export default Contador