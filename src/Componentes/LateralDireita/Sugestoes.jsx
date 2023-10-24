export default function Sugestoes(props){
    return(
        <div className='Sugestoes'>
            <div className='Sugestoes02'>
                <span>{props.fotoSugestao}</span>
                <div>
                    <p className="strong">{props.nomeUsuarioSugestao}</p>
                    <p className="colorCinza textAlternative">{props.nomePerfilSugestao}</p>
                </div>
            </div>
            <p className='colorAzul'>Seguir</p>
        </div>
    )
}