import { BsCart3 } from "react-icons/bs"
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
const CartWidget = () => {
    return (
        <Button variant="outline-primary">Carrito<BsCart3/><Badge bg="primary">0</Badge></Button>
    )
}
export default CartWidget