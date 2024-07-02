import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, getAllProduct } from '../store/reducers/reducer';  
import './Product.css';

export default function Products() {
  const data:any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  const addToCartShop =(item:any)=>{
    dispatch((addToCart(item)))

  }


  return (
    <div>
      <h2>List Product</h2>
      {data.reducer.products.map((item:any) => (
        <div key={item.id} className="product-container">
          <img className="product-image" src={item.image} alt={item.name} />
          <div className="product-details">
            <h2>{item.name}</h2>
            <p>{item.state}</p>
            <h4>Quantity: {item.quantity}</h4>
          </div>
          <div className="product-actions">
            <input className="quantity-input" type="number" placeholder="1" />
            <p>Price: {item.price}$</p>
            <button className="add-to-cart-button" onClick={()=>addToCartShop(item)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}
