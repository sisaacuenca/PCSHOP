import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from 'react'
import {getItemById} from '../data/Data';
import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const {itemId} = useParams()
    
    const[data, setData]= useState()
    const [loading, setLoading] = useState(true)
    
    
    useEffect(()=>{
      getItemById(itemId)
      .then((res)=>setData(res))
      .catch(err=>console.log(err))
      .finally(() => setLoading(false))

  }, [itemId]);
   


    return (<div>{ loading ? <Spinner /> : <ItemDetail {...data} /> }</div>)

} export default ItemDetailContainer;