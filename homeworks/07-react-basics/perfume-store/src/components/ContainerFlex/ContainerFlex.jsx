import styles from "./ContainerFlex.module.css";

const ContainerFlex = (props) => {
  return <div className={styles.containerFlex}>{props.children}</div>;
};

export default ContainerFlex;
