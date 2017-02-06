//we are using namespaceing to prevent module's action type collision
//every module should have a unique name. the best practice is to set name
//base on module's name

//name of this modules
export const NAME = 'app'

//action types
export const RESET_DECK = `${NAME}/RESET_DECK`
export const ADD_NEW_PLAYER = `${NAME}/ADD_NEW_PLAYER`
export const DEAL_CARD = `${NAME}/DEAL_CARD`
export const CALCULATE_HAND_VALUE = `${NAME}/CALCULATE_HAND_VALUE`
export const SET_NEW_PLAYER_NAME = `${NAME}/SET_NEW_PLAYER_NAME`
export const END_ROUND = `${NAME}/END_ROUND`
export const DRAW_HOUSE_HAND = `${NAME}/DRAW_HOUSE_HAND`

//as you can see above, each action is namespaced with module's name.

//app constants
export const SUITS = ['Hearts', 'Clubs', 'Spades', 'Diamonds']

export const FACES = [
  { face: '2', value: 2 },
  { face: '3', value: 3 },
  { face: '4', value: 4 },
  { face: '5', value: 5 },
  { face: '6', value: 6 },
  { face: '7', value: 7 },
  { face: '8', value: 8 },
  { face: '9', value: 9 },
  { face: '10', value: 10 },
  { face: 'Jack', value: 10 },
  { face: 'Queen', value: 10 },
  { face: 'King', value: 10 },
  { face: 'Ace', value: 11 }
]
