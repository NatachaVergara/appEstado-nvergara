import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextLAbel = props => {
    return (
        <View {...props} style={styles.container}>
            <Text onPress={props.change} style={styles.label}> {props.text}  </Text>
            <Text onPress={props.onReturn} style={styles.label}> ⬅️ Inicio </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    label:{
        padding:20,
        fontFamily:'SemiBold'
    }
})

export default TextLAbel