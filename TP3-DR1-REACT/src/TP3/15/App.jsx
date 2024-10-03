export default function App() {
    return (
        <div className="portfolio">

        <nav className="navbar">
            <ul>
                <li><a href="#header">Início</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>
      </nav>
      
      {/* Cabeçalho */}
      <header className="portfolio-header" id="header">
        <h1>Meu Portfólio</h1>
        <img src="foto-perfil-tp1.png" alt="" />
        <p>Desenvolvedor Back-end com experiência em C# e Javascript</p>
      </header>

      {/* Projetos */}
      <section className="portfolio-projects" id="projects">
        <h2>Projetos</h2>
        <ul>
          <li>
            <h3>Projeto 1 - Site de Portfólio</h3>
            <p>Um site de portfólio pessoal construído com React e CSS.</p>
          </li>
          <li>
            <h3>Projeto 2 - Aplicação de Tarefas</h3>
            <p>Uma aplicação de gerenciamento de tarefas com funcionalidades de adicionar, editar e remover tarefas.</p>
          </li>
          <li>
            <h3>Projeto 3 - Projeto Motive</h3>
            <p>Projeto que visa criar um site que ajude conectar pessoas que queiram se exercitar a aulas grátis em lugares abertos.</p>
          </li>
          <li>
            <h3>Projeto 4 - Xadrez</h3>
            <p>Programa que rodava xadrez no console, porém a parte gráfica se tratava do numero e letra da casa.</p>
          </li>
          <li>
            <h3>Projeto 5 - Landing Page</h3>
            <p>Landing Pages padrões que visavam que eu usava para treinar o minhas habilidades em estilização.</p>
          </li>
        </ul>
      </section>

      {/* Contatos */}
      <section className="portfolio-contact" id="contact">
        <h2>Contato</h2>
        <p>E-mail: igor02b1@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/igordelimadasilva</p>
        <p>GitHub: github.com/igor02b1</p>
      </section>
    </div>
  );
    
}