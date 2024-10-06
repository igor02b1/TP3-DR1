import StatusBadge from "./StatusBadge"

export default function App() {
    return (
        <div>
            <h1>Status do Usuário</h1>
            <p>Usuário 1: <StatusBadge status="ativo" /></p>
            <p>Usuário 2: <StatusBadge status="inativo" /></p>
            <p>Usuário 3: <StatusBadge status="pendente" /></p>
        </div>
    )
}