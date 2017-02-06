import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import Button from './Button'
import Player from './Player'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  menu: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'stretch',
    margin: 5,
    height: 50
  },
  playerNameInput: {
    height: 40,
    flex: 2,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
})

const Game = (props) => {
  const {
    children,
    resetFn,
    addNewPlayerFn,
    newPlayerName,
    setNewPlayerName
  } = props

  return (
    <View style={styles.container}>
      <View>
        { children }
      </View>

      <View style={ styles.menu }>

        <TextInput
          style={styles.playerNameInput}
          defaultValue={newPlayerName}
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          placeholder='Your name'
        />

        <Button style={{ flex: 1 }} onClick={addNewPlayerFn}>Add me</Button>

        <Button style={{ flex: 1 }} onClick={resetFn}>Shuffle</Button>
      </View>
    </View>
  )
}

export default Game
