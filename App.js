import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Login from './src/Screen/Login';
import Register from './src/Screen/Register';
import Start from './src/Screen/Start';

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Home from './src/Screen/Home';
export default function App() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [home, setHome] = useState(false)
  let content = <Start onLogin={setLogin} onRegister={setRegister} />

  if (login) {
    content = <Login onLogin={setLogin} onRegister={setRegister} onHome={setHome} />
  }

  if (register) {
    content = <Register onRegister={setRegister} onLogin={setLogin} />
  }

  if (home) {
    content = <Home onHome={setHome} onRegister={setRegister} onLogin={setLogin} />
  }
  const [loaded] = useFonts({ CormorantSCBold: require('./assets/fonts/CormorantSC-Bold.ttf'), SemiBold: require('./assets/fonts/CormorantSC-SemiBold.ttf'), light: require('./assets/fonts/CormorantSC-Light.ttf') })
  if (!loaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <Header title='Busco Libro App' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
