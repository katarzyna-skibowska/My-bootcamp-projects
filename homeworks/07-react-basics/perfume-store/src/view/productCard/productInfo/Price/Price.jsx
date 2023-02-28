import styles from "./Price.module.css";

function Price() {
  return (
    <>
      <ins className={styles.discount}>$149.99</ins>
      <del className={styles.price}>$169.99</del>
    </>
  );
}

export default Price;
