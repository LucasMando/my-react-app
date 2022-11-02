import React, { useEffect, useState } from 'react'
import { products } from '../products';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === 1)
                setTimeout(() => {
                    res(product);
                }, 2000);
            });
        };

        getProduct()
            .then((res) => {
                setItem(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer