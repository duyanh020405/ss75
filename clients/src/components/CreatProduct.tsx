import React, { useState } from 'react';
import './Creat.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../store/reducers/reducer';

interface Product {
  id: number;
  name: string;
  image: string;
  state: string;
  price: number;
  quantity: number;
}

interface RootState {
  reducer: {
    products: Product[];
  };
}

export default function CreateProduct() {
  const data = useSelector((state: RootState) => state.reducer.products);
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    name: '',
    image: '',
    state: '',
    price: 0,
    quantity: 0
  });

  const generateId = () => {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productWithId = { ...newProduct, id: generateId() };
    dispatch(addToList(productWithId));
    setNewProduct({
      name: '',
      image: '',
      state: '',
      price: 0,
      quantity: 0
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Them san pham</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={newProduct.name} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="text" id="image" name="image" value={newProduct.image} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" value={newProduct.state} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" id="price" name="price" value={newProduct.price} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" name="quantity" value={newProduct.quantity} onChange={handleChange} />
        </div>

        <button type="submit">Add to List</button>
      </form>
    </div>
  );
}
