import { TiDelete } from "react-icons/ti";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    const propsFavorito = {                              // --> Passando props como obj
        size: 25,
        onClick: () => {aoFavoritar(colaborador.id)}
    }

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
            <div className="favoritar">
                {colaborador.favorito 
                    ? <MdFavorite {...propsFavorito} color='#ff0000'/> 
                    : <MdFavoriteBorder {...propsFavorito} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador