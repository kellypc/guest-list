import { useEffect, useState } from "react";
import Form from "../../components/form";
import Lista from "../../components/lista-convidados/Lista";

import "./styles.css";

function Home() {
    const [convidado, setConvidado] = useState(null)
    const [convidados, setConvidados] = useState([])

    useEffect(() => {
        console.log(convidado);

        if (convidado) {
            setConvidados([...convidados, convidado])
        }
    }, [convidado])

    return (
        <div class="page-home">
            <header>
                <h1>Lista de Convidados</h1>
            </header>

            <Form convidado={convidado} setConvidado={setConvidado} />

            <Lista convidados={convidados} setConvidados={setConvidados} />
        </div>
    );
}
export default Home;
