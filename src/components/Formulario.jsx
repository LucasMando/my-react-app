import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { useState } from "react"
import { dataBase } from "../config"
import { CartContext } from "../context/CartContext"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [idOrden, setIdOrden] = useState()

    const {cart, totalPrecio, deleteAll} = useContext(CartContext)
    const totalCarrito = totalPrecio()

    const enviarInfo = (e) => {
        e.preventDefault()
        const orden = {
            comprador: {
                nombre,
                apellido,
                telefono: 1125802166,
                direccion: 'Hidalgo 1049',
                mail:'lucasmcespedes@gmail.com',
            },
            items: cart,
            total: totalCarrito,
            fecha: serverTimestamp()
        }
        const ordersCollection = collection(dataBase, "ordenes")

        console.log(orden)

        addDoc(ordersCollection, orden)
            .then((res) => {
                setIdOrden(res.id)
                deleteAll()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleName = (e) => setNombre(e.target.value)

    const handleLastName = (e) => setApellido(e.target.value)

    if (idOrden) {
        return (<h1>Gracias por tu compra, tu numero de orden es: {idOrden}</h1>)
    } else {
        return (
            <form action="" onSubmit={enviarInfo}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={nombre}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={apellido}/>
                <button>Enviar</button>
            </form>
        )
    }
}

export default Formulario