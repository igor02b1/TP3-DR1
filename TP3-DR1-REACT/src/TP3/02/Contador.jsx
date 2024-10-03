import { useState } from "react"

export default function Contador(){
    const [contador, setContador] = useState(0)

    function incrementar(){
        setContador(contador + 1)
    }
    
    return(
        <div className="caixa">
            <h1>Contador: </h1>
            <p>{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}