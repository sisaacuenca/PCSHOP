
import ItemList from "../itemList/ItemList"
import Spinner from 'react-bootstrap/Spinner';
import {getItem, getItemByCategory} from "../data/Data"
import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react'

function ItemListContainer() {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    
    const {categoryId}=useParams()
    

    useEffect(() => {
        if(!categoryId){
            getItem()
            .then((resp) => setData(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }else{
            getItemByCategory(categoryId)
            .then((resp) => setData(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        
    },[categoryId])


    return (
        <div>
            {
                loading ?


                    <Spinner animation="border" role="status">
                        
                    </Spinner>
                    : <ItemList data={data}/>
            }
        </div>
    )

} export default ItemListContainer