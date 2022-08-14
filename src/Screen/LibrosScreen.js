import React, { useEffect, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  Pressable,
} from 'react-native'
//import LibroItem from '../Components/LibroItem'


//Reducer-Store
import { useSelector, useDispatch } from 'react-redux'
//actions
import { selectLibro, filteredLibros, filteredByCategory } from '../Store/actions/libros.action'
import ImageBackgoundBook from '../Components/ImageBackgoundBook'


//Galeria de imagenes

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;

const LibrosScreen = ({ navigation }) => {
  const dispatch = useDispatch()

  const autor = useSelector(store => store.autores.selected)
  const categoriaID = useSelector(store => store.categoria.selected)
  const librosFiltrados = useSelector(store => store.libros.filteredLibros)
  // console.log('Catergorias en LibrosScreen', categoriaID.id)
  const filtradoporCategoria = useSelector(store => store.libros.filteredByCategory)
  // console.log(filtradoporCategoria)

  useEffect(() => {
    if (autor != null) { dispatch(filteredLibros(autor.id)) }
    if (categoriaID != null) { dispatch(filteredByCategory(categoriaID.id)) }

  }, [autor, categoriaID])

  const lista = librosFiltrados.length > 0 ? librosFiltrados : filtradoporCategoria






  const handleSelected = (item) => {

    dispatch(selectLibro(item.id))
    navigation.navigate('LibroDetalleScreen', {
      libro: item,
      volver: 'LibrosScreen'

    })
  }

  //const renderLibrosxAutor = ({ item }) => (<LibroItem item={item} onSelected={handleSelected} />)
  const img = { uri: 'https://firebasestorage.googleapis.com/v0/b/buscolibro-rn.appspot.com/o/libros%2Fcloseup-books-wellorganized-shelves-bookstore%20(1).jpg?alt=media&token=8103b03d-f530-4cfe-a16b-9d0ad55ac64e' }

  const scrollX = useRef(new Animated.Value(0)).current;



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackgoundBook source={img} resizeMode="cover" style={styles.image}>
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


          data={lista}
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
                  onPress={() => handleSelected(item)}
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
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: ANCHO_CONTENEDOR * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
export default LibrosScreen