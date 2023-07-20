import { Minus, Plus } from 'phosphor-react'
import { useImperativeHandle, useState, forwardRef } from 'react'
import {
  CoffeeQuantityContainer,
  QuantityButton,
  QuantityInput,
} from './styles'

export interface CoffeeQuantityRef {
  quantity: number
}

interface CoffeeQuantityProps {
  initialQuantity?: number
  onIncrement?: (quantity: number) => void
  onDecrement?: (quantity: number) => void
}

const Coffee = (
  { initialQuantity = 1, onIncrement, onDecrement }: CoffeeQuantityProps,
  ref: any,
) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  useImperativeHandle(ref, () => ({ quantity }), [quantity])

  function incrementAmount() {
    let newQuantity = 1

    if (!isNaN(quantity)) {
      newQuantity = quantity + 1
    }

    setQuantity(newQuantity)
    onIncrement?.(newQuantity)
  }

  function decrementAmount() {
    let newQuantity = 1

    if (!isNaN(quantity)) {
      newQuantity = quantity - 1
    }

    setQuantity(newQuantity)
    onDecrement?.(newQuantity)
  }

  return (
    <CoffeeQuantityContainer>
      <QuantityButton
        type="button"
        onClick={decrementAmount}
        disabled={quantity <= 1}
      >
        <Minus size={14} />
      </QuantityButton>

      <QuantityInput
        type="text"
        inputMode="numeric"
        value={isNaN(quantity) ? '' : quantity}
        onChange={(e: { target: { value: string } }) =>
          setQuantity(parseInt(e.target.value))
        }
      />

      <QuantityButton type="button" onClick={incrementAmount}>
        <Plus size={14} />
      </QuantityButton>
    </CoffeeQuantityContainer>
  )
}

export const CoffeeQuantity = forwardRef<
  CoffeeQuantityRef,
  CoffeeQuantityProps
>(Coffee)
