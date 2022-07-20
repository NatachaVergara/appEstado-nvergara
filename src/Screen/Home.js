import React from 'react'
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Colors from '../Constants/Colors'

const Home = ({ onHome, onLogin, onRegister }) => {
  const logOut = () => {
    onHome(false), onLogin(false), onRegister(false)
  }


  const libros = [{
    id: 1,
    titulo: 'El principito',
    url: 'https://cdn.culturagenial.com/es/imagenes/4475-el-principito-3c_sm.jpg',
    autor: ' Antoine de Saint-Exupéry'
  },

  {
    id: 2, titulo: 'Persuación',
    url: 'https://images.cdn2.buscalibre.com/fit-in/360x360/67/50/67506f52061e2746c0b6b40b5dfebdba.jpg', autor: 'Jane Austen'
  }]

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.buttonContainer}  >
        <Button
          title="Salir"
          onPress={logOut}
          color={Colors.primary}
        />
      </View>


      <FlatList
        data={libros}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({ item, index }) =>
            <Card style={styles.card}>
              <Text style={styles.label}> {item.titulo} </Text>
              <Image source={{ uri: item.url }}
                style={{ width: 100, height: 100 }} />
              <Text style={styles.label}> {item.autor} </Text>
            </Card>

        }
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginTop: '10%',
    justifyContent: "center",
    alignItems: "center",
   marginLeft: 30
  },
  label: {
    color: 'red',
    margin: 20,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonContainer: {
    paddingHorizontal: 15,
    marginBottom:15
  }

})


export default Home