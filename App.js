import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
//AppNavigation
import MainNavigation from './src/Navigation/MainNavigation';
//Redux
import { Provider } from 'react-redux'
import store from './src/Store'


export default function App() {

  const [loaded] = useFonts({ CormorantSCBold: require('./assets/fonts/CormorantSC-Bold.ttf'), SemiBold: require('./assets/fonts/CormorantSC-SemiBold.ttf'), light: require('./assets/fonts/CormorantSC-Light.ttf') })

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

