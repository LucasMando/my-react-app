import { useState, createContext } from "react";

export const CartContext = createContext()

const Provider = (props) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad }])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cantidad: prodDelCarrito.cantidad + cantidad
                }
                return productoActualizado
            } else {
                return prodDelCarrito
            }
        })
        setCart (cartActualizado)
    }

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados)
    }

    const deleteAll = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value = {{ cart, addToCart, deleteAll, deleteOne}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default Provider