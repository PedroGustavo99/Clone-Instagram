import HeaderDireita from './HeaderDireita'
import './LateralDireita.css'
import perfil from '../../assets/img/fotoPedro.jpeg'
import userImg1 from '../../assets/img/drake.jpeg'
import userImg2 from '../../assets/img/matue.jpeg'
import userImg3 from '../../assets/img/beyonce.jpeg'
import userImg4 from '../../assets/img/strokes.jpeg'
import userImg5 from '../../assets/img/rihanna.jpeg'
import Sugestoes from './Sugestoes'

export default function LateralDireita(){
    return(
        <div className="LateralDireita">
            <HeaderDireita fotoUsuario={<img src={perfil} />} nomeUsuario='Junim.pedro' nomePerfil='Pedro Gustavo'/>

            <div className='ConteinerSugestoes'>
                <div className="titleSugestoes">
                    <p className='colorCinza strong'>Sugestões para você</p>
                    <p className='textAlternative strong2'>Ver todas</p>
                </div>

                <Sugestoes fotoSugestao={<img src={userImg1} />} nomeUsuarioSugestao='Drake_song' nomePerfilSugestao='Drake' />
                <Sugestoes fotoSugestao={<img src={userImg2} />} nomeUsuarioSugestao='Matue_156' nomePerfilSugestao='Matue' />
                <Sugestoes fotoSugestao={<img src={userImg3} />} nomeUsuarioSugestao='Beyonce_' nomePerfilSugestao='Beyonce' />
                <Sugestoes fotoSugestao={<img src={userImg4} />} nomeUsuarioSugestao='strokes' nomePerfilSugestao='The Strokes' />
                <Sugestoes fotoSugestao={<img src={userImg5} />} nomeUsuarioSugestao='Rihanna' nomePerfilSugestao='Rihanna' />
            </div>

            <div className='FooterDireito textAlternative'>
                <p className='texto-footer'>
                    <a href="#">Sobre</a> • <a href="#">Ajuda</a> • <a href="">Imprensa</a> • <a href="#">API</a> • <a href="#">Carreiras</a> • <a href="#">Privacidade</a> • <a href="#">Termos</a> • <a href="#">Localizações</a> • <a href="#">Idioma</a> • <a href="#">Meta Verified</a>  
                </p>
                <p className='texto-footer'>&copy; 2023 INSTAGRAM FROM META </p>
            </div>
        </div>
    )
}