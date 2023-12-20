import styles from "./button.module.css";

const Button = ({ isOutline, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      <img src="/image/msg.png" alt="" />
      {text}
    </button>
  );
};
export default Button;
