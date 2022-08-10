import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../../Components/Card'
import Title from '../../Components/Title'
import Colors from '../../Constants/Colors'
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../Store/actions/auth.actions'




const Inicio = ({ navigation }) => {
    const userId = useSelector(store => store.auth.userId)
    const dispatch = useDispatch()
    const onLogout = () => dispatch(logOut())

    return (


        <SafeAreaView style={styles.container}>

            {!userId ? <View>
                <Title
                    title={'Bienvenidos'}
                    style={styles.title}
                />
                <Card style={styles.cardContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title='Login' color={Colors.secondary} onPress={() => { navigation.navigate('LoginScreen') }} />

                        <Button title='Registro' color={Colors.secondary} onPress={() => { navigation.navigate('RegisterScreen') }} />
                    </View>
                </Card></View> :
                <Card style={styles.cardContainer}>
                    <View style={styles.buttonContainer}>
                        <Button title='Logout' color={Colors.secondary} onPress={onLogout} />
                    </View>
                </Card>}

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center"
    },
    title: {
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
        padding: 10,

    },


})

export default Inicio