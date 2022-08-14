import React from 'react'
import { Image, View } from 'react-native'

export const ImageItem = ({ item, styles }) => {
    return (
        <View style={styles.mediaImageContainer}>
            <Image source={item.url} style={styles.image} resizeMode="cover"></Image>
        </View>
    )
}
