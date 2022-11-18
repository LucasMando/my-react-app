import { useEffect, useState } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { dataBase } from '../config.js';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryName} = useParams()

    
    useEffect(() => {
        const collectionProd = collection(dataBase, 'itemCollection')

        const filtrado = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd

        getDocs(filtrado)
            .then((res) => {
                const productos = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data()
                    }
                })
                setItems(productos)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [categoryName])
    

    return (
        <div id="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;