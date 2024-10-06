export default function CardPerfil(props){
    return(
        <div>
             <div className="card">
                <h1 className="titulo">{props.nome}</h1>
                <p>{props.idade || "idade não informada"}</p>
                <img className="foto" src="foto-perfil-tp1.png" alt="foto de perfil" />
                <p className="descrição">{props.descricao}</p>
            </div>
        </div>
    )
}