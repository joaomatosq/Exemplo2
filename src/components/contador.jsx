
import {useState} from "react"

import React from 'react'

export const Contador = () => {
    const[contador, setContador] = useState(0)

  return (
    <>
    <h1>Meu Contador</h1>
    <p>Você Clicou {contador} </p>
    <button onClick={()=>setContador(contador + 1)}>Aumentar</button>
    <button onClick={()=>setContador(contador - 1)}>Diminuir</button>
    </>
  )
}

export default Contador