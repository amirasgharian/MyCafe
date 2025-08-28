import { useContext } from 'react';
import '../styles/App.css'
import { shopContext } from '../context/shopContext.jsx';

function ProductCard({ product}) {
    const {cartItems , addToCart , removeFromCart} = useContext(shopContext)
    const isInCart = cartItems?.some((i)=>i.id===product.id)
return (
<div className="card m-2" style={{ width: "20rem" }}>
    <div className="card-body">
        <img src={product.img} className="card-img-top product-img" alt={product.name} />
        <h5 className="card-title mt-2 " >{product.name}</h5>
        <p className="card-text">قیمت: {product.price} تومان</p>
        <button className="btn btn-primary btn-sm" onClick={() => addToCart(product.id)}>+</button>
        <span className='mx-1'>{cartItems?.filter((item)=>item.id===product.id)[0]?.count}</span>
        { isInCart && 
        <button className="btn btn-primary btn-sm" onClick={() => removeFromCart(product.id)}>-</button>
        }
    </div>
</div>
);
}


export default ProductCard;