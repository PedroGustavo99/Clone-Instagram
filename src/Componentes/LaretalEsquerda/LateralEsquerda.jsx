import logo from '../../assets/img/instagramNome.png'
import foto1 from '../../assets/img/fotoPedro.jpeg'
import './LateralEsquerda.css'
import ItemLateralEsquerda from './ItemLateralEsquerda';
import { AiFillHome } from 'react-icons/ai';
import { GrSearch } from 'react-icons/gr';
import { MdOutlineExplore } from 'react-icons/md';
import { BiMoviePlay } from 'react-icons/bi';
import { BiPaperPlane } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';


export default function LateralEsquerda() {
    return (
        <div className="lateralEsquerda">
            <div className="logoLateralEsquerda">
                <img src={logo} />
            </div>
            <div>
                <div className='MenuLateralEsquerda'>
                    <ul>
                        <ItemLateralEsquerda icone={<AiFillHome style={{ height: "25px", width: "25px" }} />} texto='Home' />
                        <ItemLateralEsquerda icone={<GrSearch style={{ height: "25px", width: "25px" }} />} texto='Pesquisar' />
                        <ItemLateralEsquerda icone={<MdOutlineExplore style={{ height: "25px", width: "25px" }} />} texto='Explorar' />
                        <ItemLateralEsquerda icone={<BiMoviePlay style={{ height: "25px", width: "25px" }} />} texto='Reels' />
                        <ItemLateralEsquerda icone={<BiPaperPlane style={{ height: "25px", width: "25px" }} />} texto='Messages' />
                        <ItemLateralEsquerda icone={<AiOutlineHeart style={{ height: "25px", width: "25px" }} />} texto='Notificações' />
                        <ItemLateralEsquerda icone={<BsPlusSquare style={{ height: "25px", width: "25px" }} />} texto='Criar' />
                        <ItemLateralEsquerda icone={<img src={foto1} />} texto='Perfil' />
                        <div className='button_more'>
                            <ItemLateralEsquerda icone={<FiAtSign style={{ height: "25px", width: "25px" }} />} texto='Threads' />
                            <ItemLateralEsquerda icone={<FaBars style={{ height: "25px", width: "25px" }} />} texto='More' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

