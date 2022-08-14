import React, { useState } from 'react'
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Dimensions,
    TextInput,
    Image,
    Pressable,
    ImageBackground,
    SafeAreaView
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
//import { confirmCarrito } from '../Store/actions/carrito.action'

//NPM credit card
const SWIPER_HEIGHT = 180;
import CreditCard, { CardImages } from 'react-native-credit-card';
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');



const PagosScreen = ({ navigation }) => {
    const [cNumber, onChangeCNumber] = useState('')
    const [cName, onChangeCName] = useState('Jorge Pérez')
    const [cExpDateMes, onChangeCExpDateMes] = useState('09')
    const [cExpDateAno, onChangeCExpDateAno] = useState('22')
    const [cvc, onChangeCCvc] = useState('222')
    const [cardType, onChangecardType] = useState({ type: 'visa', image: "data:image/gif;base64,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" })

    // console.log(cNumber)



    const onHandlerVolver = () => navigation.navigate('DireccionFacturacion')
    // const dispatch = useDispatch()
    const items = useSelector(store => store.carrito.carrito)
    // console.log(items)
    const total = useSelector(store => store.carrito.total)
    const userId = useSelector(store => store.auth.userId)
    // const handlerConfirm = () => dispatch(confirmCarrito(items, total, userId))



    let cardTypes = [];
    for (let key in CardImages) {
        cardTypes.push({
            type: key,
            image: CardImages[key]
        });
    }
    console.log(cardType.image)


    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.background} source={require('../../../assets/img/background.png')} resizeMode={'cover'} />
            <ImageBackground
                style={{ marginVertical: 10, marginHorizontal: 10, marginBottom: 0, elevation: 3, alignSelf: 'center', width: 400, height: 250 }}
                source={require('../../../assets/img/card-front.png')}
            >
                <Image source={{ uri: cardType.image }} resizeMode={'cover'} />
                <Text style={styles.text}> {cNumber} </Text>
                <Text style={styles.text}> {cName} </Text>
                <Text style={styles.text}> {cExpDateMes}/{cExpDateAno} </Text>
                <Text style={styles.text}> {cvc} </Text>



            </ImageBackground>


            <Swiper
                style={styles.wrapper}
                height={SWIPER_HEIGHT}
                showsButtons={false}
            >


                <View style={styles.slide}>
                    <View style={styles.card}>
                        <Text style={styles.textNumber}>NÚMERO DE TARJETA</Text>
                        {cNumber.length < 0 ? <Text> **** **** **** **** **** </Text> : <TextInput autoFocus={true} value={cNumber} onChangeText={onChangeCNumber} keyboardType="numeric" maxLength={16} />}
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.card}>
                        <Text style={styles.textName}>NOMBRE Y APELLIDO</Text>
                        <TextInput autoFocus={true} value={cName} onChangeText={onChangeCName} />
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.card}>
                        <Text style={styles.textName}>EXPIRACIÓN</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TextInput value={cExpDateMes} onChangeText={onChangeCExpDateMes} keyboardType="numeric" />
                            <Text>/</Text>
                            <TextInput value={cExpDateAno} onChangeText={onChangeCExpDateAno} keyboardType="numeric" />
                        </View>
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.card}>
                        <Text style={styles.textCvc}>CVV/CVC NUMBER</Text>
                        <TextInput value={cvc} onChangeText={onChangeCCvc} keyboardType="numeric" maxLength={4} />
                    </View>
                </View>
                <View style={styles.slide}>
                    <View style={styles.card}>
                        <Text style={styles.textNumber}>CARD TYPE</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {cardTypes.map((cardType) => {
                                return (
                                    <TouchableOpacity key={cardType.type} onPress={() => onChangecardType({ type: cardType.type })}>
                                        <View>
                                            <Image source={{ uri: cardType.image }} style={{ width: 57, height: 35, marginHorizontal: 5 }} />
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>
                </View>


            </Swiper>


            <TouchableOpacity onPress={() => { }}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>NEXT</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={onHandlerVolver}>
                <Text style={styles.textButton}>VOLVER</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        paddingTop: 50
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height
    },
    wrapper: {
        height: 300,

    },
    slide: {
        height: SWIPER_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,

    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 50,
        fontWeight: "bold",
        textAlign: "center",

    },
    card: {
        marginHorizontal: 10,
        marginBottom: 30,
        backgroundColor: '#fff',
        borderRadius: 3,
        elevation: 3,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ddd',
        padding: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#1ba549',
        justifyContent: 'center',
    },
    textButton: {
        textAlign: 'center',
        color: '#fff'
    },

})

export default PagosScreen