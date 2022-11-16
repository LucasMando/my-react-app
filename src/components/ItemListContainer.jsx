import { useEffect, useState } from 'react';
import { products } from '../products.js'
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const {categoryName} = useParams()

    
    useEffect(() => {
        if (categoryName) {
            const getProducts = () => {
                return new Promise((res, rej) => {
                    const productosFiltrados = products.filter((prod) => prod.category === categoryName)
                    setTimeout(() => {
                        res(productosFiltrados);
                    }, 1000);
                });
            };
        
            getProducts()
                .then((res) => {
                    setItems(res);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
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
        }
    }, [categoryName])
    

    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;