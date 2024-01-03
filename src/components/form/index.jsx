import { useEffect, useState } from "react";
import Button from "../Button";

import './styles.css'

function Form({convidado, setConvidado}) {
    const [nome, setNome] = useState('')
    const [celular, setCelular] = useState('')
    const [presente, setPresente] = useState(false)

    const handleAddConvidado = (event) => {
        event.preventDefault()
        setConvidado(
            {
                nome,
                celular,
                presente
            }
        )

        setNome('')
        setCelular('')
        setPresente(false)
    }

    useEffect(() => {
        if (convidado) {
            setNome(convidado.nome)
            setCelular(convidado.celular)
            setPresente(convidado.presente)
        }
    }, [])

    return (
        <form onSubmit={(event) => handleAddConvidado(event)}>
            <input
                placeholder="Nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />
            <input
                placeholder="Celular"
                value={celular}
                onChange={(event) => setCelular(event.target.value)}
            />
            <label>
                Presente?
                <input
                    type="checkbox"
                    checked={presente}
                    onChange={() => setPresente(!presente)}
                />
            </label>

            <Button
                type="submit"
                title="Adicionar"
                className={`btn primary`}
            />
        </form>
    )
}

export default Form;
