import classes from "./Text.module.scss";
const TextSection = ({ title, description }) => {
  return (
    <div className={classes.textSection}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
export default TextSection;
