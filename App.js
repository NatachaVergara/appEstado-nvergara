import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import MainNavigation from './src/Navigation/MainNavigation';






export default function App() {

  const [loaded] = useFonts({ CormorantSCBold: require('./assets/fonts/CormorantSC-Bold.ttf'), SemiBold: require('./assets/fonts/CormorantSC-SemiBold.ttf'), light: require('./assets/fonts/CormorantSC-Light.ttf') })

  if (!loaded) return <AppLoading />

  return (
    <MainNavigation />

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
