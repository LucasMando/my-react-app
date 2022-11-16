import CartWidget from "../CartWidget"
import styles from "./NavBar.module.css"
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <h1><Link to="/">Mi Tienda Online</Link></h1>
                <ul className={styles.ul}>
                    <li><Link to="/category/StarWars">Star Wars</Link></li>
                    <li><Link to="/category/Marvel">Marvel</Link></li>
                    <li><Link to="/category/Peliculas">Peliculas</Link></li>
                </ul>
                <CartWidget />
            </nav>
        </header>
        
    )
}

export default NavBar