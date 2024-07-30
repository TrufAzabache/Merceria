import React from "react";
import Subtotal from './Subtotal'
import '../estilos/checkout.css'

function checkout (){
     return (
        <div className="checkout">
            <div className="checkout_left">
                <div>
                    <h2 className="checkout_title">Tu Carrito de Compra está vacío</h2>
                    <p>No tienes productos en la cesta. Añade uno.</p>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>

        </div>
     )
}

export default checkout