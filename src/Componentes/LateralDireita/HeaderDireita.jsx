export default function HeaderDireita(props){
    return(
        <div className='ConteinerHeaderDireito'>
            <div className='HeaderDireito'>
                <div className="Borda">
                    <span>{props.fotoUsuario}</span>
                </div>
                <div>
                    <p className="strong">{props.nomeUsuario}</p>
                    <p className="colorCinza txtAlternativeHeaderSugestao">{props.nomePerfil}</p>
                </div>
            </div>
        <p className="colorAzul">Mudar</p>
    </div>
    )
}