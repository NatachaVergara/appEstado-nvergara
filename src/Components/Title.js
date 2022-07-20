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
        fontSize: 50,
        fontFamily: 'CormorantSCBold'
    },
})




export default Title