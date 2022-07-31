import React from 'react'
import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../Components/Card'
import Colors from '../Constants/Colors'
import {libros} from '../Data/Libros'
const Home = () => {


  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.buttonContainer}  >
        <Button
          title="Salir"
          color={Colors.primary}
        />
      </View>


      <FlatList
        data={libros}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({ item }) =>
            <Card style={styles.card}>
              <Text style={styles.label}> {item.titulo} </Text>
              <Image source={{ uri: item.url }}
                style={{ width: 100, height: 100 }} />
              <Text style={styles.label}> {item.autor} </Text>
              <Text style={styles.label}>Precio ${item.precio} </Text>
              <Button 
                title={'Ver mas..'}
              />
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
    marginBottom: 15
  }

})


export default Home