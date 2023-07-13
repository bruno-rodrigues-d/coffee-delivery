import { NavbarContainer, Location, Cart, LocationContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { useContext } from 'react'

export function Navbar() {
  const { items } = useContext(CartContext)

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
            {items.length > 0 && <span>{items.length}</span>}
            <ShoppingCart size={24} color="#C47F17" weight="fill" />
          </Cart>
        </NavLink>
      </nav>
    </NavbarContainer>
  )
}
