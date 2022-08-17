import React, { useRef } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Animated,
    Pressable,
} from 'react-native'

import ImageBackgoundBook from '../Components/ImageBackgoundBook'
import { IMG_BACKGROUND } from '../Constants/img'
//Galeria de imagenes
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;

const LibrosCarousel = (props) => {
    const scrollX = useRef(new Animated.Value(0)).current;

    return (

        <ImageBackgoundBook source={IMG_BACKGROUND} resizeMode="cover" >
            <Animated.FlatList
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}

                showsHorizontalScrollIndicator={false}
                horizontal={true}
                snapToAlignment="start"
                contentContainerStyle={{
                    paddingTop: 200,
                    paddingHorizontal: ESPACIO_CONTENEDOR,
                }}
                snapToInterval={ANCHO_CONTENEDOR}
                decelerationRate={0}
                scrollEventThrottle={16}


                data={props.lista}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        (index - 1) * ANCHO_CONTENEDOR,
                        index * ANCHO_CONTENEDOR,
                        (index + 1) * ANCHO_CONTENEDOR,
                    ];

                    const scrollY = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, -50, 0],
                    });

                    return (
                        <View style={{ width: ANCHO_CONTENEDOR }}>
                            <Pressable
                                onPress={() => props.handleselected(item)}
                            >
                                <Animated.View
                                    style={{
                                        marginHorizontal: ESPACIO,
                                        padding: ESPACIO,
                                        borderRadius: 34,
                                        backgroundColor: "#fff",
                                        alignItems: "center",
                                        transform: [{ translateY: scrollY }],
                                    }}
                                >

                                    <Image
                                        source={{ uri: item.url }}
                                        style={styles.posterImage}
                                    />
                                </Animated.View>
                            </Pressable>
                        </View>
                    );
                }}
            />
        </ImageBackgoundBook>


    )
}



const styles = StyleSheet.create({
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR * 1.2,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    },
});
export default LibrosCarousel