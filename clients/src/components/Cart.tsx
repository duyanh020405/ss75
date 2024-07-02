import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delteteItemCart, getAllCart } from '../store/reducers/reducer';
import './Cart.css';

export default function Cart() {
  const data:any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);
  const deleteCart=(item:any)=>{
    dispatch(delteteItemCart(item))
  }

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {data.reducer.cart.map((item:any) => (
        <div key={item.id} className="cart-item">
          <b>Name: {item.name}</b>
          <img src={item.image} alt={item.name} />
          <button onClick={()=>deleteCart(item)}>Delete</button>
          <b>Quantity:{item.quantity}</b>
          <b>State :{item.state}</b>
        </div>
      ))}
    </div>
  );
}
