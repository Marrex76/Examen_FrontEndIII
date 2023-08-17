
import styles from "./Card.module.css";

function Card(props) {
    return (
    <div className={styles.exito}>
        <h3>Se ha registrado con exito</h3>
        <p>Nombre: {props.name}</p>
        <p>Apellido: {props.lastname}</p>
    </div>
    );
}

export default Card;
