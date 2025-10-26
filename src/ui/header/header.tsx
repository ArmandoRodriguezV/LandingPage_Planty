import './header.css';
import logo from '../../assets/logo.svg';

export default function Header() {
    return (
        <div className='header isLight content'>
            <img src={logo} />
            <p className='title noSelect'>Planty</p>
        </div>
    );
}