import styles from "./ContainerBlock.module.css"

const ContainerBlock = (props) => {
    return <div className={styles.containerBlock}>{props.children}</div>
}

export default ContainerBlock