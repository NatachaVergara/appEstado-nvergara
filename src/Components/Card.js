import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'


const Card = props => {
   
    return (
        
        <View {...props} style={[styles.card, props.style]}>
           
            {props.children}
           
        </View>
       
    )
}

const styles = StyleSheet.create({
    card: {
        width:'80%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50,
        elevation: 5,
        borderRadius: 10,
       // backgroundColor:'black',
        padding: 50,
        marginTop:'50%'
    }
})


export default Card