import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext)
    if (cart.length === 0){
        return <h2>No hay productos en el carrito <button><Link to="/">Volver al menú</Link></button></h2>
    } else {
        return (
            <div>
                {cart.map((prod) => (
                    <div key = {prod.id}>
                        <img src={prod.pictureUrl} alt={prod.title} />
                        <div>
                            <h3>{prod.title}</h3>
                            <h3>{prod.price}</h3>
                            <h3>{prod.cantidad}</h3>
                            <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <h3>Total: {totalPrecio()}</h3>
                <button onClick={deleteAll}>Vaciar carrito</button>
                <button><Link to="/">Volver al menú</Link></button>
                <button><Link to="/check">Chequear</Link></button>
            </div>
        )
    }
}

export default Cart