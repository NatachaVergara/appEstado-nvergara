import React from 'react'
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Card from '../../Components/Card'
import Title from '../../Components/Title'
import Colors from '../../Constants/Colors'
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../Store/actions/auth.actions'
import { IMG_BACKGROUND } from '../../Constants/img'





const Inicio = ({ navigation }) => {
    const userId = useSelector(store => store.auth.userId)
    const dispatch = useDispatch()
    const onLogout = () => dispatch(logOut())


    return (


        <SafeAreaView style={styles.container}>

            <ImageBackground source={IMG_BACKGROUND} resizeMode="cover"
                style={styles.image}

            >

                {!userId ?

                    <View>
                        <Title
                            title={'Bienvenido'}
                            style={styles.title}
                        />
                        <Card style={styles.card}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { navigation.navigate('LoginScreen') }}>
                                    <Text style={styles.buttonText}>Login</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { navigation.navigate('RegisterScreen') }}>
                                    <Text style={styles.buttonText}>Registro</Text>
                                </TouchableOpacity>
                            </View>

                        </Card>


                    </View>
                    :
                    <View>
                        <Card style={styles.cardContainer}>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={onLogout}>
                                    <Text style={styles.buttonText}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </View>}

            </ImageBackground>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 500
    },
    title: {
        marginTop: 10,
        backgroundColor: "#000000c0",
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        fontFamily: 'SemiBold',
        borderRadius: 10,
        alignSelf: 'center'
    },
    card: {
        width: 300,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",

    },
    button: {
        backgroundColor: "#000000",
        borderRadius: 10,
    },
    buttonText: {
        color: "red",
        fontSize: 15,

        fontWeight: "bold",
        fontFamily: 'SemiBold',

        padding: 20,
        alignItems: "center",
        justifyContent: 'center',

    }


})

export default Inicio