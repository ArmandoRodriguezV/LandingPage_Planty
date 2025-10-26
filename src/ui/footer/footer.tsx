import './footer.css';
import vs from '../../assets/VS.svg';

export default function Footer() {
    return (
        <div className='footer content'>
            <div>
                <p className='link'>Contactanos</p>
                <p className='link'>IG: @VEGA_SCRIPT</p>
            </div>
            <img src={vs} height="175px"/>
        </div>
    );
}