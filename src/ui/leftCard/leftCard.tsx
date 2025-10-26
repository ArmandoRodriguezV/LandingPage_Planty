import './leftCard.css';

type LeftCardType = {
    title: string;
    text: string;
    image: any;
}
export default function LeftCard({title, text, image}: LeftCardType) {
    return (
        <div className='leftCard neumorph1 content'>
            <img src={image} />
            <div className='frag content'>
                <p className='title'>{title}</p>
                <p className='paragraph'>{text}</p>
            </div>
        </div>
    );
}