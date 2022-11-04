import React, { useEffect, useState } from 'react'
import { products } from '../products';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    const {detalles} = useParams() 

    useEffect(() => {
        const getProduct = () => {
            return new Promise((res, rej) => {
                const product = products.find((prod) => prod.id === +detalles)
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
    }, [detalles]);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer