import React from 'react'
import { Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Title, TextInput, Button } from 'react-native-paper';




const DirYFactScreen = ({ navigation }) => {







  const onHandlerPagar = () => navigation.navigate('PagoConfirmacion')
  const onHandlerVolver = () => navigation.navigate('Carrito')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <Title >Información de envío</Title>
              <TextInput
                label="Nombre Completo"
                left={<TextInput.Icon name="account-outline" />}
                style={styles.textInput}
              />
              <TextInput
                label="Dirección"
                left={<TextInput.Icon name="home" />}
                style={styles.textInput}
              />
              <TextInput
                label="Edificio/Puerta/Lote"
                left={<TextInput.Icon name="home" />}
                style={styles.textInput}
              />
              <TextInput
                label="Provincia"
                left={<TextInput.Icon name="earth" />}
                style={styles.textInput}
              />
              <TextInput
                label="Código Postal"
                left={<TextInput.Icon name="map-marker" />}
                style={styles.textInput}
                keyboardType="numeric"
              />
              <TextInput
                label="Teléfono"
                left={<TextInput.Icon name="cellphone" />}
                style={styles.textInput}
                keyboardType="phone-pad"
              />
              <TextInput
                label="Email"
                left={<TextInput.Icon name="email" />}
                style={styles.textInput}
              />
              <TextInput
                label="Notas"
                left={<TextInput.Icon name="note-multiple" />}
                style={styles.textInput}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.inner, styles.buttonsContainer]}>
            <Button
              onPress={onHandlerPagar}
              style={styles.button}
              mode="outlined"
            >
              <Text>Proceder a pagar</Text>
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
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 0,

  },
  inner: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: 350,

  },
  textInput: {
    width: 300,
    margin: 10
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
export default DirYFactScreen