import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const DirYFactScreen = ({ navigation }) => {
  const onHandlerPagar = () => navigation.navigate('PagoConfirmacion')
  const onHandlerVolver = () => navigation.navigate('Carrito')

  return (
    <View style={styles.container}>
      <Text>Informacion Del usuario</Text>
      <Text>Direccion de facturacion</Text>
      <Text>Direccion de envio </Text>
      <Text>Item y suma total</Text>
      <Pressable onPress={onHandlerPagar}>
        <Text>Terminar compra</Text>
      </Pressable>

      <Pressable onPress={onHandlerVolver}>
        <Text>Volver</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    marginVertical:30,
    backgroundColor: '#fff',

  },
})
export default DirYFactScreen