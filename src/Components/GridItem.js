import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Colors from '../Constants/Colors'

const GridItem = ({ item, onSelected }) => {
    return (

        <View style={styles.gridItem}>
            <TouchableOpacity
                style={{ ...styles.container }}
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.autor}> {item.autor} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        borderRadius: 6,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: 150,
        height: 150,
        backgroundColor:Colors.primary
    },
    autor: {
        fontFamily: 'SemiBold',
        color:'red'        
    }


})

export default GridItem


