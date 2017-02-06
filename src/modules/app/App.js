import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { Game, Player, House, Card } from './../../components'
import * as actions from './actions'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'lightskyblue',
    paddingTop: 20
  }
})

const renderPlayers = (players, dealCard, roundEnded) => {
  return Object.keys(players).map((id) => {
    const player = players[id]
    return (
      <Player
        key={id}
        player={{ ...player, id }}
        dealFn={() => dealCard(id)}
        roundEnded={roundEnded}
      >
        {renderCards(player.hand)}
      </Player>
    )
  })
}

const renderHouse = (dealerHand, dealerHandValue, closeRound, roundEnded) => {
  return (
    <House
      dealerHandValue={dealerHandValue}
      closeRoundFn={closeRound}
      roundEnded={roundEnded}
    >
      {renderCards(dealerHand)}
    </House>
  )
}

const renderCards = (cards) => {
  return Object.keys(cards).map((id) => {
    const value = cards[id]
    return (
      <Card
        key={id}
        card={value}
      />
    )
  })
}

const App = (props) => {
  const {
    players,
    resetDeck,
    addNewPlayer,
    newPlayerName,
    setNewPlayerName,
    dealerHand,
    dealerHandValue,
    dealCard,
    closeRound,
    roundEnded
  } = props

  return (
    <View style={styles.container}>
      <Game
        resetFn={resetDeck}
        addNewPlayerFn={addNewPlayer}
        newPlayerName={newPlayerName}
        setNewPlayerName={setNewPlayerName}
      >
        {renderPlayers(players, dealCard, roundEnded)}
        {renderHouse(dealerHand, dealerHandValue, closeRound, roundEnded)}
      </Game>
    </View>
  )
}

export default connect(
  (state) => ({
    players: state.app.players,
    newPlayerName: state.app.newPlayerName,
    dealerHand: state.app.dealerHand,
    dealerHandValue: state.app.dealerHandValue,
    roundEnded: state.app.roundEnded
  }),
  (dispatch) => ({
    resetDeck: () => dispatch(actions.resetDeck()),
    addNewPlayer: () => {
      dispatch(actions.addNewPlayer()),
      dispatch(actions.resetDeck())
    },
    dealCard: (playerId) => dispatch(actions.dealCard(playerId)),
    setNewPlayerName: (name) => dispatch(actions.setNewPlayerName(name)),
    closeRound: () => {
      dispatch(actions.endRound()),
      dispatch(actions.drawHouseHand())
    }
  })
)(App)
