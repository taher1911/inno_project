import classes from "./Card.module.scss";
import Image from "next/image";
const Card = ({ img, title, description }) => {
  return (
    <div className={classes.card}>
      <div className={classes.img}>
        <Image src={`/${img}`} alt={title} width={27} height={27} />
      </div>
      <div className={classes.data}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
