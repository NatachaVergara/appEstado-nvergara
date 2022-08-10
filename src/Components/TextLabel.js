import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const TextLAbel = props => {
    return (
        <View {...props} style={styles.container}>
            <Text onPress={props.change} style={styles.label}> {props.text}  </Text>
            <Text onPress={props.onReturn} style={styles.label}> ⬅️ Volver </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        width: 500,
        marginTop: 40,
    },
    label: {
        padding: 20,
        fontFamily: 'SemiBold',
        fontSize: 15,
        backgroundColor: "#000000c0",
        color: "white",
        margin:10,
        borderRadius:10,
    }
})

export default TextLAbel