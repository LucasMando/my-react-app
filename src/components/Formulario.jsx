import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { useState } from "react"
import { dataBase } from "../config"
import { CartContext } from "../context/CartContext"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [email,setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [idOrden, setIdOrden] = useState()
    const {cart, totalPrecio, deleteAll} = useContext(CartContext)
    const totalCarrito = totalPrecio()

    const enviarInfo = (e) => {
        e.preventDefault()
        const orden = {
            comprador: {
                nombre,
                apellido,
                telefono,
                direccion,
                email,
            },
            items: cart,
            total: totalCarrito,
            fecha: serverTimestamp()
        }
        const ordersCollection = collection(dataBase, "ordenes")

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
    const handleTelefono = (e) => setTelefono(e.target.value)
    const handleDireccion = (e) => setDireccion(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleEmail2 = (e) => setEmail2(e.target.value)

    if (idOrden) {
        return (<h1>Gracias por tu compra, tu numero de orden es: {idOrden}</h1>)
    } else {
        return (
            <form action="" onSubmit={enviarInfo}>
                <input type="text" placeholder="Nombre" name="nombre" onChange={handleName} value={nombre}/>
                <input type="text" placeholder="Apellido" name="apellido" onChange={handleLastName} value={apellido}/>
                <input type="text" placeholder="Telefono" name="telefono" onChange={handleTelefono} value={telefono}/>
                <input type="text" placeholder="Direccion" name="direccion" onChange={handleDireccion} value={direccion}/>
                <input type="text" placeholder="Email" name="email" onChange={handleEmail} value={email}/>
                <input type="text" placeholder="Confirma Email" name="email2" onChange={handleEmail2} value={email2}/>
                <button disabled = {email !== email2}>Enviar</button>
            </form>
        )
    }
}

export default Formulario