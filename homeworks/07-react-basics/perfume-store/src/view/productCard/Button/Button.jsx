import styles from "./Button.module.css";
import cartIcon from "./icon-cart.svg";

function Button(props) {
  return (
    <button className={styles.button}>
      <img alt="cartIcon" src={cartIcon} className={styles.buttonIcon} />
      {props.name}
    </button>
  );
}

export default Button;
