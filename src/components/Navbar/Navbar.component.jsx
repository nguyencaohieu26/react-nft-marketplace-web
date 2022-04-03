import React,{useState} from 'react'
import {Container,Header,NavBar,NavbarLink} from './Navbar.styles';
import {NavbarToggleButton} from '../Button/Button.styles'; 
import {publicRoutes} from '../../routers/public.router';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isToggleMenuOpen,setToggleMenuOpen] = useState(false);
   
  const handleToggleMenu = () =>{
    setToggleMenuOpen(!isToggleMenuOpen);
  }
  return (
    <Header>
      <Container className='container'>
        <Link to="/" className='logo'>
          <img src='/images/logo.png' alt='NAFT logo'/>
        </Link>
        <div className='header-right'>
          <div className="header-nav-wrapper">
            <NavbarToggleButton className='navbar-toggle-btn' onClick={handleToggleMenu}><i className="fa-solid fa-bars"></i></NavbarToggleButton>
            <NavBar className={`navbar ${isToggleMenuOpen ? 'active' : null}`}>
              <ul className="navbar-list">
                {
                  publicRoutes.map(link =>{
                    return (<li key={link.id}>
                      <NavbarLink className='navbar-link' to={`${link.path}`}>{link.title}</NavbarLink>
                    </li>)
                  })
                }
              </ul>
            </NavBar>
          </div>
          <div className="header-actions">
            <input type="search" placeholder='Search' className="search-field" />
            <button className='btn btn-primary'>Sign in</button>
          </div>
        </div>
    </Container>
    </Header>
  )
}

export default Navbar;