import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffees.map((item) => {
          return <CoffeeCard key={item.id} item={item} />
        })}
      </List>
    </CoffeeListContainer>
  )
}
