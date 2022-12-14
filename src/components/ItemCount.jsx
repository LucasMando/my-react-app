import { useState } from "react"

function ItemCount ({stock, initial, onAdd}){

    const [cantidad, setCantidad] = useState(initial)

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const restar = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    }

    const agregar = () => {
        onAdd(cantidad)
    }

    return (
        <div>
            <p>{cantidad}</p>
            <button disabled={cantidad === stock} onClick={sumar}>+</button>
            <button disabled={cantidad === initial} onClick={restar}>-</button>
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount