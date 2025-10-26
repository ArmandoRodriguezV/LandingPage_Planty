import './titleCard.css';

type TitleCardType = {
    title: string;
    content: string;
}
export default function TitleCard({ title, content }: TitleCardType) {
    return (
        <div className='titleCard neumorph1'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
