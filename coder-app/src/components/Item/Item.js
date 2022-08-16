import './item.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';





function Item(id, nombre, precio, img, stock) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    ${precio}
                </Card.Text>
                <Button variant="info" onClick={<ItemDetailContainer />}>Ver Detalle</Button>
            </Card.Body>
        </Card>

    );
}

export default Item;