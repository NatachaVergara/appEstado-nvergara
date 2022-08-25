import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Title from '../../Components/Title';

// import AuthNavigator from './AuthNavigator';
import { useSelector, useDispatch } from 'react-redux';
import { selectUsuario, getUsuarios } from '../../Store/actions/users.action'
import { getOrders } from '../../Store/actions/orders.action'
import * as ImagePicker from 'expo-image-picker';
import CreateUserModal from '../../Components/CreateUserModal';

import { Provider } from 'react-native-paper';

const UserScreen = () => {
    //MODAL
    const [visible, setVisible] = useState(false)
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    // console.log('USER SCREEN')
    const dispatch = useDispatch()
    //Traigo los datos que necesito de mis store
    const email = useSelector(store => store.auth.email)
    const userID = useSelector(store => store.auth.userId)
    const orders = useSelector(store => store.orders.orders)
    const users = useSelector(store => store.usuarios.users)
    // console.log('USERS', users)
    const user = users.find(user => user.userId === userID)
    // console.log('USER: ', user)
    const userOrders = orders.filter(orders => orders.userId === userID)
    // console.log('USER ORDERS ITEMS: ', userOrders)


    //Sumo el total de las compras realizadas por el usuario  
    let sumaTotal = []
    userOrders.map(x => sumaTotal.push(x.total))
    let sumaFinal = sumaTotal.reduce((a, b) => a + b, 0)
    // console.log(sumaFinal)
    /************************************************************/


    //Suma cantidad de libros comprado por el cliente
    let libros = []
    userOrders.map(i => libros.push(i.items[0].titulo))
    console.log('LIBROS', libros.length)


    const [image, setImage] = useState('https://via.placeholder.com/150')


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    useEffect(() => {
        dispatch(selectUsuario(userID))
        dispatch(getUsuarios())
        dispatch(getOrders())
    }, [])

    return (
        <Provider>
            <SafeAreaView style={styles.container}>
                <CreateUserModal
                    visible={visible}
                    hideModal={hideModal}
                    showModal={showModal}
                    userId={userID}
                    setImage={setImage}
                    pickImage={pickImage}
                    email={email}
                    image={image}
                />



                {
                    user === null || user === undefined ?

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignSelf: "center" }}>
                                <View style={styles.profileImage}>
                                    <Image source={{ uri: image }} style={styles.image} resizeMode="center" />
                                </View>
                                <View style={styles.active}></View>
                                <View style={styles.add}>
                                    <TouchableOpacity onPress={pickImage}>
                                        <Ionicons name="camera-outline" size={25} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}></Ionicons>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.infoContainer}>
                                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>- </Text>
                            </View>

                            <View style={styles.statsContainer}>
                                <View style={styles.statsBox}>
                                    <Text style={[styles.text, { fontSize: 24 }]}>-</Text>
                                    <Text style={[styles.text, styles.subText]}>Compras</Text>
                                </View>

                                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                    <Text style={[styles.text, { fontSize: 24 }]}>$-</Text>
                                    <Text style={[styles.text, styles.subText]}>Total</Text>
                                </View>
                            </View>


                            <View style={styles.datosPersonales}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginBottom: 30 }} >
                                        <View style={styles.editDatos}>
                                            <Title title='Crear usuario' style={[styles.text, { fontWeight: "200", fontSize: 30, paddingBottom: 10 }]} />
                                            <TouchableOpacity onPress={showModal}>
                                                <Ionicons name="create-outline" size={25} color="#DFD8C8" style={{ marginTop: 25, marginLeft: 0 }}></Ionicons>
                                            </TouchableOpacity>
                                        </View>
                                        {/* Crear flatlist */}
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Email: {email} </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Nombre completo: -  </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Domicilio: - </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Documento: - </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Principal:-</Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Alternativo: - </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </ScrollView>
                        :
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{ alignSelf: "center" }}>
                                <View style={styles.profileImage}>
                                    <Image source={{ uri: image }} style={styles.image} resizeMode="center" />
                                </View>
                                <View style={styles.active}></View>
                                <View style={styles.add}>
                                    <TouchableOpacity onPress={pickImage}>
                                        <Ionicons name="camera-outline" size={25} color="#DFD8C8" style={{ marginTop: 0, marginLeft: 2 }}></Ionicons>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.infoContainer}>
                                <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{user.nombre} </Text>
                            </View>

                            <View style={styles.statsContainer}>
                                <View style={styles.statsBox}>
                                    <Text style={[styles.text, { fontSize: 24 }]}>{userOrders.length}   </Text>
                                    <Text style={[styles.text, styles.subText]}>Compras</Text>
                                </View>

                                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                    <Text style={[styles.text, { fontSize: 24 }]}>{libros.length} </Text>
                                    <Text style={[styles.text, styles.subText]}>Libros</Text>
                                </View>
                                <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                                    <Text style={[styles.text, { fontSize: 24 }]}>${sumaFinal}</Text>
                                    <Text style={[styles.text, styles.subText]}>Total</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 32 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {url.length < 0 ? <Text>Cargando...</Text> : url.map(i => (
                                        <View style={styles.mediaImageContainer} key={i.id}>
                                            <Image source={{ uri: i.url }} style={styles.image} resizeMode="cover">
                                            </Image>
                                        </View>
                                    ))}
                                </ScrollView>
                            </View>

                            <View style={styles.datosPersonales}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={{ marginBottom: 30 }} >
                                        <View style={styles.editDatos}>
                                            <Title title='Datos Personales' style={[styles.text, { fontWeight: "200", fontSize: 30, paddingBottom: 10 }]} />
                                            {user === null || user === undefined ? <TouchableOpacity onPress={showModal}>
                                                <Ionicons name="create-outline" size={25} color="#DFD8C8" style={{ marginTop: 25, marginLeft: 0 }}></Ionicons>
                                            </TouchableOpacity> : null}

                                        </View>
                                        {/* Crear flatlist */}
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Email: {user.user.email} </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Nombre completo: {user.user.nombreCompleto}</Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Domicilio: {user.user.domicilio} {user.user.edificio_Puerta_Lote} {user.user.provincia}. {user.user.codigo_Postal} </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Documento: {user.user.documento} </Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Principal:{user.user.telefonoPrincipal}</Text>
                                        <Text style={[styles.text, { fontSize: 15, marginLeft: 10 }]}>Teléfono Alternativo: {!user.user.telefonoAlternativo ? 'No' : user.user.telefonoAlternativo}  </Text>
                                    </View>
                                </ScrollView>
                            </View>
                        </ScrollView>
                }

            </SafeAreaView>
        </Provider>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        marginBottom: 30,

    },
    text: {
        fontFamily: 'CormorantSCBold',
        color: "#52575D",
        backgroundColor: '#ffff'
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },

    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: 10,
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    datosPersonales: {
        alignSelf: 'center',
        marginTop: 16,
        marginBottom: 30,
        paddingBottom: 30
    },
    datosCuenta: {
        alignSelf: 'center',
        marginTop: 16,

    },
    editDatos: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }


});
export default UserScreen