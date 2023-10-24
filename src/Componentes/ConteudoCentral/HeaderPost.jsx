export default function HeaderPost(props) {
    return (

        <div className="headerpost">
            <div className="headerpost2">
                <div className="fotoUsuario">
                    <span> {props.fotoUsuario}</span>
                </div>
                <span> {props.nomeUsuario}</span>
                <span className="colorCinza"> • </span>
                <span className="colorCinza">{props.postDate}</span>
            </div>
            <span className="icons-post"> {props.fimore}</span>
        </div>

    )
}