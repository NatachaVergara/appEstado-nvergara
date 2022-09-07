import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
//AppNavigation
import MainNavigation from './src/Navigation/MainNavigation';
//Redux
import { Provider } from 'react-redux'
import store from './src/Store'
import { init } from './src/db/index'
import { heroku_API } from './src/Constants/database';

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
  })



export default function App() {


  const [loaded] = useFonts({ CormorantSCBold: require('./assets/fonts/CormorantSC-Bold.ttf'), SemiBold: require('./assets/fonts/CormorantSC-SemiBold.ttf'), light: require('./assets/fonts/CormorantSC-Light.ttf') })

  if (!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}