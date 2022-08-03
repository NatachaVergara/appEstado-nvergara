import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const GridItem = ({ item, onSelected }) => {

    return (

        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ ...styles.flatList }}
                onPress={() => onSelected(item)}
            >
                <View >

                    <ImageBackground
                        style={styles.containerIMG}
                        source={{ uri: item.img }}
                        resizeMode="cover"

                    >
                        <View>
                            <Text style={styles.autor}> {item.autor} </Text>
                        </View>

                    </ImageBackground>


                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 5,
    },
    containerIMG: {
        flex: 1,
        width: 170,
        height: 200,

    },

    autor: {
        fontFamily: 'SemiBold',
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'black'

    }


})

export default GridItem


