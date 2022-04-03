import React from 'react'
import { Link } from 'react-router-dom'
import {FooterBottom,FooterTop} from './Footer.styles';

const Footer = () => {
  return (
    <section>
      <FooterTop className='footer-top'>
        <div className="container">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src='images/logo.png' alt='logo'/>
            </Link>
            <p className="footer-brand-text">
              There are many variations of passages of but the majority have suffered
              alterations cted humour, or randomsed words wich htly believable. If you are going
            </p>
            <h3 className="h4 social-title">Join the community</h3>
            <ul className="social-list">
              <li>
                <Link to="/" className='social-link'><i className="fa-brands fa-github"></i></Link>
              </li>
              <li>
                <Link to="/" className='social-link'><i className="fa-brands fa-twitter-square"></i></Link>
              </li>
              <li>
                <Link to="/" className='social-link'><i className="fa-brands fa-instagram"></i></Link>
              </li>
              <li>
                <Link to="/" className='social-link'><i className="fa-brands fa-youtube-square"></i></Link>
              </li>
            </ul>
          </div>
          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Marketplace</h3>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Gaming</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Products</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">All NFTs</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Social Network</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Domain Names</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Collectbles</Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Explore</h3>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Feature Drops</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Live Auctions</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">All NFTs</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Collections</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Top Seller</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Items Details</Link>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <h3 className="h3 footer-item-title">Supports</h3>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Settings & Privacy</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Help & Support</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Item Details</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">24/7 Supports</Link>
              </li>
              <li className="footer-item">
                <Link to="/" className="footer-link">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </FooterTop>
      <FooterBottom className='footer-bottom'>
        <div className="container">
         <div>
         <p className="copyright">
            2022 <Link to="https://www.youtube.com/channel/UC1PZHWV6VvICTL1LgFUZq6g">@codewithsadee</Link> all rights reserved
          </p>
          <p className='more-text'>Keep Pratice! Made with love</p>
         </div>
          <div className="footer-bottom-links">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Term & Conditions</Link>
          </div>
        </div>
      </FooterBottom>
    </section>
  )
}

export default Footer