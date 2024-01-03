import Button from "../Button";

function Item({ nome, celular, presente }) {
    return (
        <li>
            <div className="content">
                <span> { nome } </span> |
                <span> { celular } </span> |
                <span> { presente ? 'Presente' : 'Não Presente' } </span>
            </div>
            
            <div className="actions">
                <Button
                    title="Editar"
                    className={`btn primary`}
                    handleCallback={() => console.log('')}
                />
                <Button
                    title="Excluír"
                    className={`btn danger`}
                    handleCallback={() => console.log('')}
                    styles={{
                        background: 'red',
                        color: 'white'
                    }}
                />
            </div>
        </li>
    )
}

export default Item;