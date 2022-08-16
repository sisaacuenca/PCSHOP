import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

// hooks

const ItemCount = (props) => {
    const [contador, setContador] = useState(props.initial);


    useEffect(() => {
        console.log('%c    Renderizado Siempre', 'color: #38761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    });


    function agregarAlContador() {
        if (contador >= props.stock) {
            setContador(contador)
            console.log("sin stock")
        } else {
            setContador(contador + 1);
        }

    }
    function restarAlContador() {

        if (contador <= 1) {
            setContador(1)
        } else {
            setContador(contador - 1)
        };
    }

    console.log('Contador listo para el render');

    return (
        <div><Button variant="dark" onClick={restarAlContador}>-</Button>{contador}<Button variant="dark" onClick={agregarAlContador}>+</Button></div>
    );
}
/*
1. MONTADO / MOUNT - renderiza el componente
2. Actualizacion / Update
    a. espera alguna modifacion o cambio en el estado
    b. cuando detecta cambio en el estado entonces procesa el cambio 
    c. re-renderiza y muestra el nuevo layout (con el nuevo estado)
3. DESMONTAR / UNMOUNT
*/

export default ItemCount;