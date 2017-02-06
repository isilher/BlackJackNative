import _ from 'lodash'
import { handleActions } from 'redux-actions'
import {
  RESET_DECK,
  ADD_NEW_PLAYER,
  DEAL_CARD,
  SET_NEW_PLAYER_NAME,
  END_ROUND,
  DRAW_HOUSE_HAND,
  SUITS,
  FACES
} from './constants'

const shuffleCards = () => {
  let cards = []
  _.each((SUITS), (suit) => {
    cards = cards.concat(FACES.map((card) => {
      const { face, value } = card
      return { face, suit, value }
    }))
  })
  return _.shuffle(cards)
}

const calculateHandValue = (cards) => {
  value = _.sumBy(cards, 'value')
  ace = _.find(cards, {value: 11})

  while(value > 21 && ace) {
    aceIndex = cards.findIndex(x => x.value == 11)
    cards[aceIndex] = { ...ace, value: 1}
    value = _.sumBy(cards, 'value')
    ace = _.find(cards, {value: 11})
  }

  return value
}

const initialState = {
  deck: shuffleCards(),
  players: {},
  newPlayerName: null,
  dealerHand: [],
  dealerHandValue: 0,
  roundEnded: false
}

export default handleActions({
  [ADD_NEW_PLAYER]: (state, action) => {
    const { players, newPlayerName } = state
    const id = Object.keys(players).length + 1

    return {
      ...state,
      players: {
        ...players,
        [id]: {
          name: newPlayerName || `Player ${id}`,
          hand: [],
          handValue: 0
        }
      },
      newPlayerName: ''
    }
  },

  [RESET_DECK]: (state, action) => {
    let { players } = state

    _.each((players), (player, playerId) => {
      players[playerId] = { ...players[playerId], hand: [], handValue: 0 }
    })

    return {
      ...initialState,
      players: { ...players }
    }
  },

  [DEAL_CARD]: (state, action) => {
    const { deck, players } = state
    const { payload: playerId } = action
    const card = deck.pop()

    newHand = [ ...players[playerId].hand, card ]

    return { ...state,
      deck: deck,
      players: {
        ...players,
        [playerId]: {
          ...players[playerId],
          hand: newHand,
          handValue: calculateHandValue(newHand)
        }
      }
    }
  },

  [SET_NEW_PLAYER_NAME]: (state, action) => {
    const { payload: name } = action

    return { ...state, newPlayerName: name }
  },

  [END_ROUND]: (state, action) => {
    return { ...state, roundEnded: true }
  },

  [DRAW_HOUSE_HAND]: (state, action) => {
    const { deck } = state
    let dealerHandValue = 0
    let dealerHand = []

    while(dealerHandValue < 17) {
      const card = deck.pop()
      dealerHand = [ ...dealerHand, card ]
      dealerHandValue = calculateHandValue(dealerHand)
    }

    return { ...state,
      deck: deck,
      dealerHand,
      dealerHandValue
    }
    return state
  }

}, initialState)
