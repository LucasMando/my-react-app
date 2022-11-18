import CartWidget from "../CartWidget"
import styles from "./NavBar.module.css"
import {Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <h1><Link to="/">Mi Tienda Online</Link></h1>
                <ul className={styles.ul}>
                    <li><NavLink to="/category/StarWars">Star Wars</NavLink></li>
                    <li><NavLink to="/category/Marvel">Marvel</NavLink></li>
                    <li><NavLink to="/category/Peliculas">Peliculas</NavLink></li>
                </ul>
                <CartWidget />
            </nav>
        </header>
        
    )
}

export default NavBar