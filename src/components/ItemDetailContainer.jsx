import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {detalles} = useParams() 

    useEffect(() => {
        const collectionProd = collection(dataBase, 'itemCollection')
        const reference = doc(collectionProd, detalles)

        getDoc(reference)
        .then((res) => {
            setItem({
                id: res.id,
                ...res.data()
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }, [detalles]);
    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer