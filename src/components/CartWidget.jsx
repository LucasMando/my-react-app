import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {totalUnidades} = useContext(CartContext)
    return (
        <div>
            <span className="material-symbols-outlined"><Link to="/cart">shopping_cart</Link></span>
            {totalUnidades()}
        </div>
    )
}

export default CartWidget