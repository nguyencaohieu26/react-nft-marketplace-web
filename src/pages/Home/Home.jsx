import React from 'react'
import AboutCard from '../../components/AboutCard/AboutCard.component';
import {NewProductList,AboutList,ExploreProductList,TopSellersList} from '../../db/data';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import TopSellerCard from '../../components/TopSellerCard/TopSellerCard.component';
import { Hero,NewProduct,ProductList,AboutContainer,ExploreProductContainer,TopSellersContainer } from './Home.styles'

const Home = () => {
  return (
    <section>
      <article>
        {/*    #HERO    */}
        <Hero>
          <div className="container">
            <div className="hero-content">
              <h1 className="h1 hero-title">
                Discover digital art sell your specific <span> NFT</span>  
              </h1>
              <p className="hero-text">
                Partner with one of the world's largest retailers to showcase your band and products.
              </p>
              <div className="btn-group">
                <button className="btn btn-primary">Explor more</button>
                <button className="btn btn-secondary">Create now</button>
              </div>
            </div>
            <figure className="hero-banner">
                <img src="/images/hero-banner.jpg" alt="ntf-art" />
            </figure>
          </div>
        </Hero>
        
        {/*    #NEW PRODUCT   */}
        <NewProduct>
          <div className="container">
            <div className="section-header-wrapper">
              <h2 className="h2 section-title">Newest Items</h2>
              <button className="btn btn-primary">View all</button>
            </div>
            <ProductList>
              {NewProductList.map(product=>{
                return <li className="product-item" key={product.id}>
                  <ProductCard product={product}/>
                </li>
              })}
            </ProductList>
          </div>
        
        </NewProduct>
        
        {/*     #ABOUT        */}
        <AboutContainer>
          <div className="container">
            <h2 className="h2 about-title">Create and sell your NFTs</h2>
             <ol className="about-list">
             {
              AboutList.map(aboutItem =>{
                return (<AboutCard key={aboutItem.id} aboutItem={aboutItem}/>)
              })
             }
             </ol> 
          </div>
        </AboutContainer>
        
        {/*     #EXPLORE PRODUCT    */}
        <ExploreProductContainer>
          <div className="container">
          <div className="section-header-wrapper">
              <h2 className="h2 section-title">Explore Product</h2>
              <button className="btn btn-primary">Explore</button>
            </div>
            <ProductList>
              {ExploreProductList.map(product=>{
                return <li className="product-item" key={product.id}>
                  <ProductCard product={product}/>
                </li>
              })}
            </ProductList>
          </div>
        </ExploreProductContainer>

        {/*     #TOP SELLER   */}
        <TopSellersContainer>
          <div className="container">
            <h2 className="h2 top-seller-title">
              Top seller in <span>{new Date().toString()} </span>day
              <i className="fa-solid fa-chevron-down"></i>
            </h2>
            <ol className="top-seller-list">  
            {
              TopSellersList.map(topseller =>{
                return (
                  <TopSellerCard key={topseller.id} topSellerItem={topseller}/>
                )
              })
            }
            </ol>
          </div>
        </TopSellersContainer>
      </article>
    </section>
  )
}

export default Home