import { useState } from "react";

function Button({ title, handleCallback, ...rest }) {
    const [titleButton, setTitleButton] = useState("Enviar!");

    const handleButton = () => setTitleButton("Enviado!");

    return (
        <button onClick={handleCallback || handleButton} {...rest}>
            {title || titleButton}
        </button>
    );
}

export default Button;