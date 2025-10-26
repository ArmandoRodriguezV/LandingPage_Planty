import './iconCard.css';

type IconCardType = {
    text: string,
    image: any
}
export default function IconCard({ text, image }: IconCardType) {
    return (
        <div className='iconCard neumorph1'>
            <img src={image} />
            <p className='paragraph'>{text}</p>
        </div>
    );
}