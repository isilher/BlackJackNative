import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'ivory',
    width: 70,
    height: 100,
    borderColor: 'darkgrey',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 4
  },
  cardText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: '500',
    fontSize: 20
  },
  suitSymbol: {
    fontFamily: 'Verdana',
    fontSize: 46,
    opacity: 5
  }
})

const suitSymbol = (symbol) => {
  switch(symbol) {
    case 'Hearts':
      return(
        <Text style={styles.suitSymbol}>&hearts;</Text>
      )
    case 'Diamonds':
      return(
        <Text style={styles.suitSymbol}>&diams;</Text>
      )
    case 'Spades':
      return(
        <Text style={styles.suitSymbol}>&spades;</Text>
      )
    case 'Clubs':
      return(
        <Text style={styles.suitSymbol}>&clubs;</Text>
      )
    default:
      return(
        <Text>{symbol}</Text>
      )
  }
}

const Card = (props) => {
  const { face, suit } = props.card

  return (
    <View style={styles.container}>
      <Text style={styles.cardText}>{face}</Text>
      {suitSymbol(suit)}
    </View>
  )
}

export default Card
