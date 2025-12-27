// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import NavigationContainer to wrap the entire navigation structure
import { NavigationContainer } from '@react-navigation/native';
// Import createStackNavigator for stack-based navigation (push/pop screens)
import { createStackNavigator } from '@react-navigation/stack';
// Import createDrawerNavigator for drawer/side menu navigation
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import all screen components
import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';

/**
 * HomeNavigatorScreen
 * Creates a stack navigator for the Home screen
 * Stack navigator allows navigation with push/pop behavior
 * @returns {JSX.Element} Stack navigator configured for Home screen
 */
function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();
  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },      // Header background color
        headerTintColor: '#fff',                       // Header text/icon color
        headerTitleStyle: { color: '#fff' }            // Header title text color
      }}>
      {/* Home screen route */}
      <HomeNavigator.Screen name='Home' component={Home} />
    </HomeNavigator.Navigator>
  );
}

/**
 * AboutNavigatorScreen
 * Creates a stack navigator for the About screen
 * @returns {JSX.Element} Stack navigator configured for About screen
 */
function AboutNavigatorScreen() {
  const AboutNavigator = createStackNavigator();
  return (
    <AboutNavigator.Navigator 
    initialRouteName='About' 
    screenOptions={{
      headerStyle: { backgroundColor: '#7cc' },      // Header background color
      headerTintColor: '#fff',                       // Header text/icon color
      headerTitleStyle: { color: '#fff' }            // Header title text color
    }}>
      {/* About screen route */}
      <AboutNavigator.Screen name='About' component={About} />
    </AboutNavigator.Navigator>
  );
}

/**
 * ContactNavigatorScreen
 * Creates a stack navigator for the Contact screen
 * @returns {JSX.Element} Stack navigator configured for Contact screen
 */
function ContactNavigatorScreen() {
  const ContactNavigator = createStackNavigator();
  return (
    <ContactNavigator.Navigator
    initialRouteName='Contact'
    screenOptions={{
      headerStyle: { backgroundColor: '#7cc' },      // Header background color
      headerTintColor: '#fff',                       // Header text/icon color
      headerTitleStyle: { color: '#fff' }            // Header title text color
    }}>
      {/* Contact screen route */}
      <ContactNavigator.Screen name='Contact' component={Contact} />
    </ContactNavigator.Navigator>
  );
}

/**
 * MenuNavigatorScreen
 * Creates a stack navigator for Menu and Dishdetail screens
 * Allows navigation from Menu to Dishdetail when a dish is selected
 * @returns {JSX.Element} Stack navigator with Menu and Dishdetail screens
 */
function MenuNavigatorScreen() {
  const MenuNavigator = createStackNavigator();
  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: '#7cc' },      // Header background color
        headerTintColor: '#fff',                       // Header text/icon color
        headerTitleStyle: { color: '#fff' }            // Header title text color
      }}>
      {/* Menu screen route - displays list of dishes */}
      <MenuNavigator.Screen name='Menu' component={Menu} />
      {/* Dishdetail screen route - displays detailed dish information */}
      <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
    </MenuNavigator.Navigator>
  );
}

/**
 * MainNavigatorScreen
 * Creates the main drawer navigator that contains all major sections
 * Drawer navigator provides a side menu for navigating between main sections
 * @returns {JSX.Element} Drawer navigator with all main screen navigators
 */
function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();
  return (
    <MainNavigator.Navigator initialRouteName='HomeScreen'>
      {/* Home section - opens HomeNavigatorScreen when selected */}
      <MainNavigator.Screen name='HomeScreen' component={HomeNavigatorScreen} options={{ title: 'Home', headerShown: false }} />
      {/* About section - opens AboutNavigatorScreen when selected */}
      <MainNavigator.Screen name='AboutScreen' component={AboutNavigatorScreen} options={{ title: 'About', headerShown: false }} />
      {/* Menu section - opens MenuNavigatorScreen when selected */}
      <MainNavigator.Screen name='MenuScreen' component={MenuNavigatorScreen} options={{ title: 'Menu', headerShown: false }} />
      {/* Contact section - opens ContactNavigatorScreen when selected */}
      <MainNavigator.Screen name='ContactScreen' component={ContactNavigatorScreen} options={{ title: 'Contact Us', headerShown: false }} />
    </MainNavigator.Navigator>
  );
}

/**
 * Main Component
 * Root component that wraps the entire navigation structure
 * NavigationContainer is required at the root level for React Navigation to work
 */
class Main extends Component {
  /**
   * Render method that provides the navigation container
   * @returns {JSX.Element} NavigationContainer wrapping the main navigator
   */
  render() {
    return (
      <NavigationContainer>
        {/* Main drawer navigator containing all app sections */}
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }
}
export default Main;