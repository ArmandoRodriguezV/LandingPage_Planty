import './presentationCard.css';
import cel from '../../assets/imgs/cel.png';
import { FaGooglePlay } from 'react-icons/fa';

export default function PresentationCard() {
    return (
        <div className='presentationCard neumorph1 content isLight'>
            <div className='contain1'>
                <p className='title'>
                    Cultiva inteligencia, Cosecha sostenibilidad
                </p>
                <p className='subtitle'>
                    Planty te ayuda a crear y cuidar tu huerto urbano con IA y tecnología verde
                </p>
                <div className='play-store'>
                    <p className='subtitle'>
                        <FaGooglePlay style={{ fontSize: 60, margin: "0 40px 0 0" }}/>
                        Proximamente
                    </p>
                </div>
            </div>
            <img src={cel} width="230" height="492" />
        </div>
    );
}