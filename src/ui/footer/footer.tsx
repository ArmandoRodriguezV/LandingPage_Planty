import './footer.css';
import vs from '../../assets/VS.svg';

export default function Footer() {
    return (
        <div className='footer content'>
            <div>
                <p className='link'>Contáctanos</p>
                <a href='mailto:bs.personal.0001@gmail.com' className='link'>
                    bs.personal.0001@gmail.com
                </a>
            </div>
            <img src={vs} height="175px"/>
        </div>
    );
}
