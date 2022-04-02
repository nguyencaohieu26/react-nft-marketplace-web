import styled from 'styled-components';

export const ProductCartContainer = styled.div`
    background: var(--eerie-black-1);
    padding: 18px;
    border: 1px solid var(--onyx-2);
    border-radius: 8px;
    
    .product-banner{
        height: 210px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 25px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover ;
        }
    }
    .product-actions{
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .product-card-menu,.add-to-wishlist{
            width: 25px;
            height: 25px;
            display: grid;
            border-radius: 50%;
            place-items: center;
        }
        .product-card-menu{
            font-size: 12px;
            background: var(--golden-puppy);
            color: var(--black);
        }

        .add-to-wishlist{
            color: var(--white);
            background: var(--eerie-black-1);
            &.active{
                color: var(--red-crayola);
            }
            &:is(:hover,:focus){--white:hsl(0,0%,80%)}
        }

        .place-bid-btn{
            top: 200%;
            left: 50%;
            opacity: 0;
            padding:8px 16px;
            position: absolute;
            color: var(--black);
            font-size: var(--fs-7);
            border-radius: 4px;
            text-transform: capitalize;
            transform: translate(-50%,0);
            transition: var(--transition);
            background: var(--golden-puppy);
        }
    }
    .product-title{
        margin-bottom: 15px;
        color: var(--white);
    }
    .product-meta{
        display: flex;
        margin-bottom: 25px;
        align-items: center;
        justify-content: space-between;
        .product-author{
            gap: 10px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .author-img{
            overflow: hidden;
            border-radius: 50%;
            background: var(--black);
        }
        .author-username,.label,.product-price{
             color: inherit;
             font-size: var(--fs-8);
        }
        .author-username:is(:hover,:focus){
            color: var(--golden-puppy);
        }
        .author-price data{
            font-size: var(--fs-6);
            font-weight: var(--fw-700);
        }
    }
    .product-footer{
        display: flex;
        align-items: center;
        font-size: var(--fs-8);
        justify-content: space-between;
    }
    .tag{
        color: var(--black);
        padding: 4px 10px;
        border-radius: 4px;
        background: var(--golden-puppy);
    }
    &:is(:hover,:focus) .place-bid-btn,
    .place-bid-btn:focus{
        transform: translate(-50%,-50%);
        opacity: 1;
    }
    &:is(:hover,:focus) .product-title{
        color: var(--red-crayola);
    }
`