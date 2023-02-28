import styles from "./Picture.module.css"
import pic from "./image-product-desktop.jpg"

function Picture() {
    return(
    <img className={styles.picture} src={pic} alt="perfume" />
    )
}

export default Picture 