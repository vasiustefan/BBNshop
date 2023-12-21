import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating, quantity}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    /*
    const increaseQuantity = () => {
        // increase quantity of item in basket
        dispatch({
            type: "INCREASE_QUANTITY",
            quantity: basket[id].quantity -= 1,
        })
    }
    const decreaseQuantity = () => {
        // decrease quantity of item in basket
        dispatch({
            type: "DECREASE_QUANTITY",
            quantity: basket[id].quantity += 1,
        })
    }
    */
  return (
    <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
            <div className="checkoutProduct__title">
                <p> {title} </p>
            </div>
                <p className="checkoutProduct__price"> 
                    <small> $ </small> 
                    <strong> {price} </strong> 
                </p>
            <div className="checkoutProduct__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p> ⭐ </p>
                    ))}
            </div>
            <p> Quantity: {quantity} </p>
            {/*             
            <div className="checkoutProduct__quantity">
                <button onClick={decreaseQuantity}> - </button>
                <p> {quantity} </p>
                <button onClick={increaseQuantity}> + </button>
            </div> */}

            <button onClick={removeFromBasket}> Remove from Basket </button>
        </div>
    </div>
  )
}

export default CheckoutProduct;