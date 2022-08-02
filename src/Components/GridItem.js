import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../Constants/Colors'


const GridItem = ({ item, onSelected }) => {
    return (

        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ ...styles.container }}
                onPress={() => onSelected(item)}
            >
                <ImageBackground
                    style={styles.container}
                    source={require('../../assets/img/closeBook1.png')}
                >
                    <View>
                        <Text style={styles.autor}> {item.autor} </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
       
    },
    container: {
        flex: 1,
        
       
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: 160,
        height: 150,
        
    },
    autor: {
        fontFamily: 'SemiBold',
        color: 'red',
        fontSize: 15
    }


})

export default GridItem


