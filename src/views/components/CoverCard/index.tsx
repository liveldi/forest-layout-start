import './style.scss';

interface CoverCardProps {
  image: string;
  title: string;
  subTitle: string;
  text: string;
  link: string;
}

const CoverCard = ({
  image,
  title,
  subTitle,
  text,
  link
}: CoverCardProps) => {
  return (
    <div>African forest</div>
  )
};

export default CoverCard;