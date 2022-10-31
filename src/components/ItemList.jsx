import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
  return (
    <>
        {items.map((producto) => (
            <Item producto={producto} key={producto.id}/>
        ))}
    </>
  )
}

export default ItemList