import { CoffeeCard, CoffeeListArrayType } from '../CoffeeCard'
import { CoffeeListContainer, List } from './styles'

export function CoffeeList() {
  const coffeeListArray: CoffeeListArrayType[] = [
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 1,
      image: '/public/Expresso.png',
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: 2,
      image: '/public/Americano.png',
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
  ]

  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <List>
        {coffeeListArray.map((item) => {
          return <CoffeeCard key={item.id} item={item} />
        })}
      </List>
    </CoffeeListContainer>
  )
}
