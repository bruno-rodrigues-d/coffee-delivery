import { addressFormSchema } from './reducer'

export enum ActionTypes {
  ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS',
}

export function addNewAddress(address: addressFormSchema) {
  return {
    type: ActionTypes.ADD_NEW_ADDRESS,
    payload: {
      address,
    },
  }
}
