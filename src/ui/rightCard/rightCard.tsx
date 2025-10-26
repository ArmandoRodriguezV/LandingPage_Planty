import './rightCard.css';

type RightCardType = {
    title: string;
    text: string;
    image: any;
}
export default function RightCard({title, text, image}: RightCardType) {
    return (
        <div className='rightCard neumorph1 content'>
            <div className='frag content'>
                <p className='title'>{title}</p>
                <p className='paragraph'>{text}</p>
            </div>
            <img src={image} />
        </div>
    );
}