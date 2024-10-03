export default function ListaTarefas() {
    const tarefas = [ "Comprar café", "Estudar React", "Fazer exercícios" ];

    return ( 
         <div>
            <ol>
                {tarefas.map((tarefas, index) => (
                    <li key={index}>{tarefas}</li>
                ))}
            </ol>
            
            <ul>
                {tarefas.map((tarefas, index) => (
                    <li key={index}>{tarefas}</li>
                ))}
            </ul>

         </div>
    )
}