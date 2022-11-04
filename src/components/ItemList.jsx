import React from 'react'
import Item from './Item'



const ItemList = ({items}) => {
  return (
    <div className="item-list">
        {items.map((producto) => (
            <Item producto={producto} key={producto.id}/>
        ))}
    </div>
  )
}

export default ItemList