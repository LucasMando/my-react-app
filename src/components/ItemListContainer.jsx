import { useEffect, useState } from 'react';
import { products } from '../products.js'
import ItemList from './ItemList.jsx';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(products);
                }, 2000);
            });
        };

        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;