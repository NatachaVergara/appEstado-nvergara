import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Title = props => {
    return (
        <Text {...props} style={[styles.title, props.style]}  > {props.title} </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        fontSize: 30,
        fontFamily: 'CormorantSCBold',
        backgroundColor: "#000000c0",
        width: 300,      
        textAlign: 'center',
    },
})




export default Title