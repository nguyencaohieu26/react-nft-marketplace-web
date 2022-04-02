import styled from 'styled-components';

export const Hero = styled.section`
    padding: 60px 0;
    .hero-content{
        text-align: center;
        margin-bottom: 40px;
        .hero-title{
            margin-bottom: 15px;
            & > span{
                display: inline-block;
                -webkit-text-stroke-width: 1px;
                -webkit-text-stroke-color: var(--golden-puppy);
                -webkit-text-fill-color: transparent;
            }
        }
        .hero-text{
            color: var(--white);
            font-size: var(--fs-7);
            margin-bottom: 20px;
        } 
        .btn-group{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }   
    }
    .hero-banner{
            overflow: hidden;
            border-radius: 50%;
            border: 20px solid var(--eerie-black-1);
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
`

export const NewProduct =styled.section`
    background: var(--eerie-black-2);
    padding: 60px 0;
    .section-header-wrapper{
        gap: 20px;
        display: flex;
        margin-bottom: 40px;
        align-items: center;
        justify-content: space-between;
    }
`

export const ExploreProductContainer = styled(NewProduct)`    
`

export const ProductList = styled.ul`
    gap: 25px;
    display: grid;
    grid-template-columns: 1fr;
`

export const AboutContainer = styled.section`
    padding: 60px 0;
    .about-title{
        text-align: center;
        margin-bottom: 40px;
    }
    .about-list{
        gap: 25px;
        display: grid;
        margin: 0 10px;
        grid-template-columns: 1fr;
    }
`

export const TopSellersContainer = styled.section`
    padding: 60px 0;
    
    .top-seller-title{
        gap: 5px;
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        justify-content: flex-start;
        
        span{color: var(--golden-puppy);}
        i{margin-left: 10px;font-size:13px}
    }

    .top-seller-list{
        display: grid;
        grid-template-columns: 1fr;
    }
`