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
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: 3,
      image: '/public/Expresso_Cremoso.png',
      type: ['tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: 4,
      image: '/public/Cafe_Gelado.png',
      type: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: 5,
      image: '/public/Cafe_com_Leite.png',
      type: ['tradicional', 'com leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: 6,
      image: '/public/Latte.png',
      type: ['tradicional', 'com leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: 7,
      image: '/public/Capuccino.png',
      type: ['tradicional', 'com leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: 8,
      image: '/public/Macchiato.png',
      type: ['tradicional', 'com leite'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: 9,
      image: '/public/Mochaccino.png',
      type: ['tradicional', 'com leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: 10,
      image: '/public/Chocolate_Quente.png',
      type: ['especial', 'com leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: 11,
      image: '/public/Cubano.png',
      type: ['especial', 'alcoólico', 'gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: 12,
      image: '/public/Havaiano.png',
      type: ['especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: 13,
      image: '/public/Arabe.png',
      type: ['especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: 14,
      image: '/public/Irlandes.png',
      type: ['tradicional', 'alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
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
