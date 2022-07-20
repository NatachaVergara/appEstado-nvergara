import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import Colors from '../Constants/Colors'

const Input = props => {
    return (
        <TextInput  {...props} style={[styles.input, props.style]} />
    )
}


const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        color:Colors.text,
    }

})
export default Input