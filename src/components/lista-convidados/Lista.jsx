import { useEffect } from "react";
import Item from "./Item";

import './styles.css'

function Lista({convidados}) {
    return (
        <ul className="lista-convidados">
            {
                convidados && convidados.map((convidado, index) => (
                    <Item
                        key={index}
                        nome={convidado.nome || ''}
                        celular={convidado.celular || ''}
                        presente={convidado.presente || ''}
                    />
                ))
            }
        </ul>
    )
}

export default Lista;