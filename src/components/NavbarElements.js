import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #0000;
    height:80px;
    display: flex;
    justify-content: space-around;
    padding: 0;
    z-index:10;
    margin:0;
    position:sticky;
`
export const NavLink = styled(Link)`
color: #92968D;
display:flex;
align-items:center;
text-decoration:none;
padding:0 3rem;
height:100%;
cursor:pointer;
font-size: 20px;

&.active{
    color: #ffff;
}
`
export const Bars = styled(FaBars)`
    display:none;
    color:#ffff;

@media screen and (max-width: 768px){
display: block;
position:absolute;
top: 0;
right: 0;
// transform:translate(-100%,75%);
font-size: 1.8rem;
cursor:pointer;
}
`
export const NavMenu = styled.div`
display:flex;
align-items:center;
margin-right:-24px;

@media screen and (max-width:768px){
    display:none;
}
`
export const NavBtn= styled.nav`
    display:flex;
    align-items:center;
    margin-right:24px;

@media screen and (max-width:768px){
    display:none;
}
`