export default function Curtidas(props) {
    return (
        <div className="curtidas">
            <div className="curtidas2">
                <span>{props.quantidadeCurtidas}</span>
            </div>
            <span>{props.curtidas}</span>
        </div>
    )
}