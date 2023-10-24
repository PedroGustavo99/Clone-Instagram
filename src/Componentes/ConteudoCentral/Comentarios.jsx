export default function Comentarios(props) {
    return (
        <>
            <div className="containerComentarios">
                <div className="comentarios">
                    <span className="perfilComentarios">{props.perfilComentarios}</span>
                    <span>{props.comentarios}</span>
                </div>
                <div className="todosComentarios">
                    <span>{props.todosComentarios}</span>
                </div>
            </div>
        </>
    )
}