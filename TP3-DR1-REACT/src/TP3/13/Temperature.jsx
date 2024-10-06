export default function Temperature(props){
    const temperatura = props.temperatura;
    return(
        <div>
            <h1>Temperatura de {temperatura}°</h1>
            <p>{temperatura > 25 ? "está quente" : "está frio"}</p>
        </div>
    )
}