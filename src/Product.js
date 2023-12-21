import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating, quantity}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Check if item is already in cart
        const index = basket.findIndex(item => item.id === id);
        if (index !== -1) {
            // Item is already in cart, increase quantity by 1
            basket[index].quantity += 1;
            dispatch({
                type: "UPDATE_QUANTITY",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: basket[index].quantity,
                }
            });
            // console.log(basket[index].quantity);
        } else {
            // Item is not in cart, add with quantity of 1
            dispatch({
                type: "ADD_TO_BASKET",
                item: {
                    id: id,
                    title: title,
                    image: image,
                    price: price,
                    rating: rating,
                    quantity: 1,
                },
            });
        }
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => ( // _ is a throwaway variable (each and every item in the array)
                        <p>⭐</p>
                    ))}
                </div>
                <p>{quantity}</p>
            </div>
            <img src={image} alt="product-img" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product;