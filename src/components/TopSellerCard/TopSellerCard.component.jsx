
import React from 'react'
import { Link } from 'react-router-dom'
import {TopSellerItem} from './TopSellerCard.styles'


const TopSellerCard = ({topSellerItem}) => {
    const {id,name,price,imgURL} = topSellerItem;

  return (
    <TopSellerItem>
        <Link to="/" className='top-seller-card'>
            <div className="card-number">{id}</div>
            <figure className='card-avatar'>
            <img src={imgURL} alt={name} />
            <div className="avatar-badge">
                <i className="fa-solid fa-check"></i>
            </div>
            </figure>
            <div className="card-content">
            <h3 className="h5 card-title">{name}</h3>
            <data value={price}>${price}</data>  
            </div> 
        </Link>
    </TopSellerItem>
  )
}

export default TopSellerCard;