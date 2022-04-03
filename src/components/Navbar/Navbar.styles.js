import styled,{css} from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    padding: 0 12px;
`
export const Header = styled.header`
    padding: 20px 0;
    border-bottom: 1px solid var(--onyx-1);
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header-nav-wrapper{
        position: relative;
    }
    .header-actions{
        display: none;
    }
    
`;
export const NavBar = styled.nav`
    background-color: var(--onyx-1);
    position: absolute;
    top: calc(100% + 20px);
    right: 0;
    width: 250px;
    border-radius:8px;
    transform: scale(.8);
    transform-origin: top right;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: var(--transition);
    &.active{
        transform: scale(1);
        opacity: 1;
        visibility: visible;
        pointer-events: all;
    }
`
export const NavbarLink = styled(Link)`
    background: transparent;
    color: var(--white);
    font-size: var(--fs-7);
    padding: 8px 10px;
    border-radius: 4px;
    &:is(:hover,:focus){
        background: var(--davys-gray);
    }
`
