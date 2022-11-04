import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => console.log(cantidad)
    return (
        <div>
            <h2>{item.title}</h2>
            <img src={item.pictureUrl} alt={item.title} />
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail