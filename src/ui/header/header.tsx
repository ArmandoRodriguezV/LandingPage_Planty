import './header.css';
import logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const nav = useNavigate();

    const navigateToLanding = () => {
        nav("/");
    }

    return (
        <div className='header isLight content' onClick={navigateToLanding}>
            <div className='logoComponent' >
                <img src={logo} />
                <p className='title noSelect'>Planty</p>
            </div>
            <a href="/avisoprivacidad">
                Aviso de Privacidad 
            </a>
        </div>
    );
}