import { ActionTypes } from './actions'

import { produce } from 'immer'

export interface addressFormSchema {
  cep: string
  rua: string
  numero: number
  complemento: string
  bairro: string
  cidade: string
  uf: string
}

interface addressState {
  address: addressFormSchema[]
}

export function addressReducer(state: addressState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ADDRESS:
      return produce(state, (draft: { address: any[] }) => {
        draft.address.push(action.payload.address)
      })
  }
}
