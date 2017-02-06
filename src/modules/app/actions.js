import {
  RESET_DECK,
  ADD_NEW_PLAYER,
  DEAL_CARD,
  SET_NEW_PLAYER_NAME,
  END_ROUND,
  DRAW_HOUSE_HAND
} from './constants'

export const resetDeck = () => {
  return {
    type: RESET_DECK
  }
}

export const addNewPlayer = () => {
  return {
    type: ADD_NEW_PLAYER
  }
}

export const dealCard = (playerId) => {
  return {
    type: DEAL_CARD,
    payload: playerId
  }
}

export const setNewPlayerName = (name) => {
  return {
    type: SET_NEW_PLAYER_NAME,
    payload: name
  }
}

export const endRound = () => {
  return {
    type: END_ROUND
  }
}

export const drawHouseHand = () => {
  return {
    type: DRAW_HOUSE_HAND
  }
}
