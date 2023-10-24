import './ConteudoCentral.css'
import IntensStories from './ItensStories'
import post1 from '../../assets/img/paulista.jpeg'
import post2 from '../../assets/img/imaginePost.jpeg'
import perfil from '../../assets/img/fotoPedro2.jpeg'
import perfilUser from '../../assets/img/imagine.jpeg'
import usuario1 from '../../assets/img/mdchefe.jpeg'
import usuario2 from '../../assets/img/nirvana.jpeg'
import usuario3 from '../../assets/img/alice.jpeg'
import usuario4 from '../../assets/img/saopaulo.jpeg'
import usuario5 from '../../assets/img/proa.jpeg'
import usuario6 from '../../assets/img/SOAD.jpeg'
import usuario7 from '../../assets/img/metallica.jpeg'
import usuario8 from '../../assets/img/doors.jpeg'

import HeaderPost from './HeaderPost'
import Post from './Post'
import ContententImagemPost from './ContentImagemPost'
import Botoes from './Botoes'
import Curtidas from './Curtidas'
import Comentarios from './Comentarios'

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';
import { HiOutlineBookmark } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';

export default function ConteudoCentral() {
    return (

        <div className="conteudoCentral">
            <div className='conteinerStories'>
            <div className="stories">
                <IntensStories fotoStory={<img src={usuario1} />} nomeStory='MD.Chefe' />
                <IntensStories fotoStory={<img src={usuario2} />} nomeStory='Nirvana' />
                <IntensStories fotoStory={<img src={usuario3} />} nomeStory='AliceIn..' />
                <IntensStories fotoStory={<img src={usuario4} />} nomeStory='São Paulo' />
                <IntensStories fotoStory={<img src={usuario5} />} nomeStory='Proa' />
                <IntensStories fotoStory={<img src={usuario6} />} nomeStory='SOAD' />
                <IntensStories fotoStory={<img src={usuario7} />} nomeStory='Metallica' />
                <IntensStories fotoStory={<img src={usuario8} />} nomeStory='TheDoors' />
            </div>
            </div>

            <div className="timeline">
                <Post>
                    
                    <HeaderPost fotoUsuario={<img src={perfil} />} nomeUsuario='Junim_pedro' postDate='10 min' fimore={<FiMoreHorizontal/>}/> 
                    <ContententImagemPost fotoPost={<img src={post1} />} />

                    <div className='containerButtons'>
                        <div className='containerButtons2'>
                            <Botoes button={<AiOutlineHeart className='icons-post' />} />
                            <Botoes button={<FaRegComment className='icons-post' />} />
                            <Botoes button={<TbSend className='icons-post' />} />
                        </div>
                        <Botoes button={<HiOutlineBookmark className='icons-post' />} />
                    </div>

                    <Curtidas quantidadeCurtidas='290'curtidas='curtidas' />

                    <Comentarios perfilComentarios='JuniorPedro' comentarios='Visitando a Av. Paulista mais uma vez !' />
                    <Comentarios perfilComentarios='Songsterr_top' comentarios='👏👏👏👏👏👏' />

                    <Comentarios todosComentarios='Ver todos os comentários'/>

                </Post>

                <Post>
                    
                    <HeaderPost fotoUsuario={<img src={perfilUser} />} nomeUsuario='Imagine_Dragons' postDate='56 min' fimore={<FiMoreHorizontal/>}/> 
                    <ContententImagemPost fotoPost={<img src={post2} />} />

                    <div className='containerButtons'>
                        <div className='containerButtons2'>
                            <Botoes button={<AiOutlineHeart className='icons-post' />} />
                            <Botoes button={<FaRegComment className='icons-post' />} />
                            <Botoes button={<TbSend className='icons-post' />} />
                        </div>
                        <Botoes button={<HiOutlineBookmark className='icons-post' />} />
                    </div>

                    <Curtidas quantidadeCurtidas='290'curtidas='curtidas' />

                    <Comentarios perfilComentarios='JuniorPedro' comentarios='Are you ready for a new show?' />
                    <Comentarios perfilComentarios='Songsterr_top' comentarios='🔥🔥🔥🔥🔥' />

                    <Comentarios todosComentarios='Ver todos os comentários'/>

                </Post>

            </div>
        </div>

    )
}