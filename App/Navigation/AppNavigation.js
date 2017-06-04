import { StackNavigator } from 'react-navigation'
import TopCategoryScreen from '../Containers/TopCategoryScreen'
import DrawerScreen from '../Containers/DrawerScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TopCategoryScreen: { screen: TopCategoryScreen },
  DrawerScreen: { screen: DrawerScreen },
  LaunchScreen: { screen: TopCategoryScreen },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: { title: 'Login' }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
