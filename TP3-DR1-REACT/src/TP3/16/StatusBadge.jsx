export default function StatusBadge(props){
    const Options = [
        { value: 'ativo', text: 'Ativo', style: { backgroundColor: 'green', color: 'white' } },
        { value: 'inativo', text: 'Inativo', style: { backgroundColor: 'gray', color: 'white' } },
        { value: 'pendente', text: 'Pendente', style: { backgroundColor: 'orange', color: 'white' } },
      ];

    let optionSelected = null;

    for (let i = 0; i < Options.length; i++) {
        if (props.status === Options[i].value) {
            optionSelected = Options[i];
          break;
        }
      }

    
    return(
        <div>
          <span style={{
              ...optionSelected.style,
              padding: '5px 10px',
              display: 'inline-block',
            }}>{optionSelected.text}</span>
      </div>    
    )
}