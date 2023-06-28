import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
    </LayoutContainer>
  )
}
