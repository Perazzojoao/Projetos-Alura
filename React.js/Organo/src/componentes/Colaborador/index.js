import { TiDelete } from "react-icons/ti";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar }) => {
    return (<div className="colaborador">
        <TiDelete 
            size={25} 
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}       // Devemos passar uma arrow function para o "onClick", assim, a função não é executada instantaneamente.
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador