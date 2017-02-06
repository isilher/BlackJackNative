import React, { PropTypes } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: "500"
  }
});

const Button = (props) => {
  const { children, onClick, disabled, style } = props

  return (
    <TouchableOpacity onPress={onClick} style={[styles.button, style]} disabled={disabled}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

Button.PropTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
