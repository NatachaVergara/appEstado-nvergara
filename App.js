import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import AppNavigator from './src/Navigation/AppNavigator';




export default function App() {
  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [home, setHome] = useState(false)
  // let content = <Start onLogin={setLogin} onRegister={setRegister} />

  // if (login) {
  //   content = <Login onLogin={setLogin} onRegister={setRegister} onHome={setHome} />
  // }

  // if (register) {
  //   content = <Register onRegister={setRegister} onLogin={setLogin} />
  // }

  // if (home) {
  //   content = <Home onHome={setHome} onRegister={setRegister} onLogin={setLogin} />
  // }
  const [loaded] = useFonts({ CormorantSCBold: require('./assets/fonts/CormorantSC-Bold.ttf'), SemiBold: require('./assets/fonts/CormorantSC-SemiBold.ttf'), light: require('./assets/fonts/CormorantSC-Light.ttf') })

  if (!loaded) return <AppLoading />

  return (
  <AppNavigator/>
  
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
