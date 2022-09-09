import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Title, TextInput, Button } from 'react-native-paper';
import MaskInput, { Masks } from 'react-native-mask-input';
import Colors from '../../Constants/Colors';
import { useSelector, useDispatch } from 'react-redux';

//NPM credit card

const PagosScreen = ({ navigation }) => {
    const email = useSelector(store => store.auth.email)
    const users = useSelector(store => store.usuarios.users)
    const user = users === undefined ? null : users.find(e => e.email === email)
    let nombre = user.nombre
    const [cNumber, onChangeCNumber] = useState('')
    const [cName, onChangeCName] = useState(nombre)
    const [cExpDate, onChangeCExpDate] = useState('----')
    const [cvc, onChangeCCvc] = useState('')
    const [cardType, onChangecardType] = useState('VISA')


    //Campos de la tarjeta de credito
    const creditcardDateMask = [/\d/, /\d/, "/", /\d/, /\d/]
    const creditCardCVC = [[/\d/], [/\d/], [/\d/]]


    const onHandlerVolver = () => navigation.navigate('DireccionFacturacion')
    const onHandlerCheckout = () => navigation.navigate('FinalizarCompra')


    const noValidate = !(
        cNumber.length && cName.length && cExpDate.length && cvc.length  && cardType.length > 0
    )



    return (
        <ScrollView style={styles.container}>
            <KeyboardAwareScrollView style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inner}>
                        <Title>Información de Pago</Title>
                        <Text style={{ color: Colors.secondary }}>* campos obligatorios</Text>
                        <TextInput
                            label="Nombre Completo *"
                            value={cName}
                            left={<TextInput.Icon name="account-outline" />}
                            style={styles.textInput}
                            onChangeText={onChangeCName}
                        />
                        <TextInput
                            label="Tipo de tarjeta *"
                            value={cardType}
                            left={<TextInput.Icon name="credit-card" />}
                            style={styles.textInput}
                            onChangeText={onChangecardType}
                        />

                        <View style={[styles.textInput, styles.ccInput]}>
                            <Text variant="displaySmall">Número de tarjeta *</Text>
                            <MaskInput
                                value={cNumber}
                                onChangeText={onChangeCNumber}
                                mask={Masks.CREDIT_CARD}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={[styles.textInput, styles.dateCvc]}>
                            <View style={styles.ccInput}>
                                <Text variant="displaySmall">Fecha expiración *</Text>
                                <MaskInput
                                    value={cExpDate}
                                    onChangeText={onChangeCExpDate}
                                    mask={creditcardDateMask}
                                    keyboardType="numeric"
                                />
                            </View>
                            <View style={styles.ccInput}>
                                <Text variant="displaySmall">Código de seguridad *</Text>
                                <MaskInput
                                    value={cvc}
                                    showObfuscatedValue
                                    obfuscationCharacter="#"
                                    onChangeText={(obfuscated) => { onChangeCCvc(obfuscated) }}
                                    mask={creditCardCVC}
                                    keyboardType="numeric"
                                />
                            </View>
                        </View>



                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.inner, styles.buttonsContainer]}>
                    <Button
                        onPress={onHandlerCheckout}
                        style={styles.button}
                        mode="outlined"
                        disabled={noValidate}
                    >
                        <Text>Finalizar Compra</Text>
                    </Button>

                    <Button
                        onPress={onHandlerVolver}
                        mode="outlined"
                        icon="arrow-left"

                        style={styles.button}
                    >
                        <Text>Volver</Text>
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    inner: {
        padding: 24,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        marginVertical: 20
    },
    textInput: {
        width: 300,
        margin: 10
    },
    ccInput: {
        backgroundColor: '#e6e6e6',
        borderBottomColor: '#999999',
        borderBottomWidth: 1,
        padding: 10
    },
    dateCvc: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    buttonsContainer: {

        padding: 0,
        marginBottom: 100,
        marginVertical: 0
    },
    button: {
        margin: 10,
        color: 'red'
    }

})

export default PagosScreen