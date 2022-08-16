import { Modal } from "bootstrap"
import ItemCount from "../ItemCount/ItemCount"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ nombre, precio, stock, img})=>{
    return(
        <Modal>
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    ${precio}
                </Card.Text>
                <ItemCount stock={stock} initial={1} />
                <Button variant="dark">Agregar al Carrito</Button>
                <div>stock: {stock}</div>
            </Card.Body>
        </Card>

        </div>
        </Modal>
    )
}
export default ItemDetail