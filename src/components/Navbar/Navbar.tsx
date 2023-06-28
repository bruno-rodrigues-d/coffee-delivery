import { NavbarContainer, Location, Cart, LocationContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/" title="Home">
        <span>
          <img src={logo} alt="" />
        </span>
      </NavLink>
      <nav>
        <LocationContainer>
          <NavLink to="/checkout" title="Checkout">
            <Location>
              <MapPin size={24} color="#8047F8" weight="fill" />
              <a>Santa Rita do Sapucaí, MG</a>
            </Location>
          </NavLink>
        </LocationContainer>

        <NavLink to="/checkout" title="Checkout">
          <Cart>
            <ShoppingCart size={24} color="#C47F17" weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </NavbarContainer>
  )
}