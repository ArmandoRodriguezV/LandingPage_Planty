import './textContainer.css';

type TextContainerType = {
  title: string;
  content: string;
};

export default function TextContainer({ title, content }: TextContainerType) {
  return (
    <div className="textContainer content">
      <p className="title">{title}</p>
      <p className="paragraph">{content}</p>
    </div>
  );
}
