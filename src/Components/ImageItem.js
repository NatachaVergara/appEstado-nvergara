import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export const ImageItem = ({ item }) => {
    
    return (

        <View style={styles.mediaImageContainer}>
            <Image source={{ uri: item.url}} style={styles.image} resizeMode="cover">
            </Image>
        </View>
    )
}
const styles = StyleSheet.create({
    mediaImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
    },
    image: {
        flex: 1,       
    },



});