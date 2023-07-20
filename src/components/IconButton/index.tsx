import { IconProps } from 'phosphor-react'
import React from 'react'
import { IconButtonContainer } from './styles'

interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  size?: 'small' | 'big'
  title: string
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

export const IconButton: React.FC<IconButtonProps> = ({
  size = 'big',
  title,
  icon: Icon,
  ...props
}) => {
  return (
    <IconButtonContainer size={'big'} {...props}>
      <Icon size={16} color={'#8047F8'} />
      {title}
    </IconButtonContainer>
  )
}
