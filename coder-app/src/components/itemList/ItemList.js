import React from "react"
import Item from "../Item/Item"
function ItemList({data}) {
    return (
        <div>
            {
            data.map((prod) => <Item key={prod.id}  {...prod} />)
            }
        </div>
    )
} export default ItemList