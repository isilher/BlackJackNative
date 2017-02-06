import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'ivory',
    minHeight: 80
  },
  cardsContainer: {
    flexDirection: 'row',
    flex: 5,
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  houseName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500'
  }
})

const House = (props) => {
  const {
    children,
    dealerHandValue,
    closeRoundFn,
    roundEnded
  } = props

  return (
    <View style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'space-between' }}>
        <Text style={styles.houseName}>House ({dealerHandValue})</Text>
        <Button
          onClick={closeRoundFn}
          disabled={roundEnded}
        >
          { roundEnded ? 'ENDED' : 'Reveal' }
        </Button>
      </View>

      <View style={styles.cardsContainer}>
        { children }
      </View>
    </View>
  )
}

export default House
