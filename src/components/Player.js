import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white'
  },
  cardsContainer: {
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  playerName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  }
})

const Player = (props) => {
  const { children, dealFn, roundEnded } = props
  const { name, handValue, id } = props.player
  const bust = handValue > 21

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'space-between' }}>
        <Text style={styles.playerName}>{name} ({handValue})</Text>
        <Button
          onClick={dealFn}
          disabled={bust || roundEnded}
        >
          { bust ? 'BUST!' : 'Hit me!' }
        </Button>
      </View>

      <View style={styles.cardsContainer}>
        { children }
      </View>
    </View>
  )
}

export default Player
