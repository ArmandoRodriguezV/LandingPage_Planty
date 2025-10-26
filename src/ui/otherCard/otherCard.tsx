import './otherCard.css';

export default function OtherCard() {
    return (
        <div className='otherCard neumorph2 content'>
            <div className='oCcontain content'>
                <div className='imgpart top'></div>
                <p className='cont paragraph content'>Administra tus huertos</p>
                <div className='imgpart bot'></div>
            </div>
            <div className='oCcontain content'>
                <p className='cont paragraph content'>Genera tu propio huerto</p>
                <div className='imgpart cen'></div>
                <p className='cont paragraph content'>Aprende agricultura</p>
            </div>
        </div>
    );
}