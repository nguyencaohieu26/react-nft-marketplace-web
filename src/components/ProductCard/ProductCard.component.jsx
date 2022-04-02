import {ProductCartContainer} from './ProductCard.styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const ProductCard = ({product}) => {
    const [like,setLike] = useState(false);
    
    const handleAddWishList = () =>{setLike(!like);}

  return (
        <ProductCartContainer tabIndex="0">
            <figure className="product-banner">
            <img src={product.productImg} alt='Dimond riding a blue body art'/>
            <div className="product-actions">
                <button className="product-card-menu"><i className="fa-solid fa-cart-shopping"></i></button>
                <button className={`add-to-wishlist ${like ? 'active' : null}`} onClick={handleAddWishList}><i className="fa-solid fa-heart"></i></button>
                <button className='place-bid-btn'>Place bid</button>
            </div>
            </figure>
            <div className="product-content">
            <Link to="/" className="h4 product-title">{product.title}</Link>
            <div className="product-meta">
                <div className="product-author">
                <figure className="author-img">
                    <img src={product.authorImg} alt={product.authorName}/>
                </figure>
                <div className="author-content">
                    <h4 className="h5 author-title">{product.authorTitle}</h4>
                    <Link to="/" className="author-username">{product.authorUsername}</Link>
                </div>
                </div>
                <div className="product-price">
                <data value={product.currentPrice}>{product.currentPrice}ETH</data>
                <p className="lable">Current Bid</p>
                </div>
            </div>
            <div className="product-footer">
                <p className="total-bid">{product['total-bid']}+ Place Bid.</p>
                <button className="tag">{product.tag} </button>
            </div>
            </div>
        </ProductCartContainer>
  )
}

export default ProductCard;