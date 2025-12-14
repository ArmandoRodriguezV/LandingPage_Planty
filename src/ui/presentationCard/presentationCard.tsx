import './presentationCard.css';
import cel from '../../assets/imgs/cel.png';

export default function PresentationCard() {
    return (
        <div className='presentationCard neumorph1 content isLight'>
            <div className='contain1'>
                <p className='title'>
                    Cultiva inteligencia Cosecha sostenibilidad
                </p>
                <p className='subtitle'>
                    Planty te ayuda a crear y cuidar tu huerto urbano con IA y tecnología verde
                </p>
            </div>
            <img src={cel} width="230" height="492" />
        </div>
    );
}