import CartWidget from "../CartWidget"
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <h1>Mi Tienda Online</h1>
            <ul className={styles.ul}>
                <li>Indumentaria</li>
                <li>Accesorios</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar