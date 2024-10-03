import { useState } from "react"
import DisplayCount from "./DisplayCount"

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

            <DisplayCount count={contador} />
        </div>
    )
}