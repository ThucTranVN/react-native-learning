// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import React Native components for building UI (View, Text) and Linking for opening URLs
import { View, Text, Linking } from 'react-native';
// Import Icon and Image components from react-native-elements for UI elements
import { Icon, Image } from 'react-native-elements';
// Import NavigationContainer to wrap the entire navigation structure
import { NavigationContainer } from '@react-navigation/native';
// Import createStackNavigator for stack-based navigation (push/pop screens)
import { createStackNavigator } from '@react-navigation/stack';
// Import createDrawerNavigator and drawer content components for custom drawer implementation
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

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
      <HomeNavigator.Screen name='Home' component={Home} 
        options={({navigation}) => ({
          headerTitle: 'Home',
          // Custom header left button - menu icon to toggle drawer navigation
          headerLeft: () => (
            <Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />
          )
        })}
      />
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
      <AboutNavigator.Screen name='About' component={About} 
        options={({navigation}) => ({
          headerTitle: 'About',
          // Custom header left button - menu icon to toggle drawer navigation
          headerLeft: () => (
            <Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />
          )
        })}
      />
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
      <ContactNavigator.Screen name='Contact' component={Contact} 
        options={({navigation}) => ({
          headerTitle: 'Contact',
          // Custom header left button - menu icon to toggle drawer navigation
          headerLeft: () => (
            <Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />
          )
        })}
      />
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
      <MenuNavigator.Screen name='Menu' component={Menu} 
        options={({navigation}) => ({
          headerTitle: 'Menu',
          // Custom header left button - menu icon to toggle drawer navigation
          headerLeft: () => (
            <Icon name='menu' size={36} color='#fff' onPress={() => navigation.toggleDrawer()} />
          )
        })}
      />
      {/* Dishdetail screen route - displays detailed dish information */}
      <MenuNavigator.Screen name='Dishdetail' component={Dishdetail} options={{ headerTitle: 'Dish Detail' }} />
    </MenuNavigator.Navigator>
  );
}

/**
 * CustomDrawerContent Component
 * Custom drawer content that displays a branded header with logo and app name,
 * followed by the default drawer items and a custom Help link
 * @param {Object} props - Navigation props passed from drawer navigator
 * @returns {JSX.Element} Custom drawer content with header, menu items, and help link
 */
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Custom drawer header with logo and app name */}
      <View style={{backgroundColor: '#512DA8', height: 80, alignItems: 'center', flexDirection: 'row'}}>
        {/* Logo container - takes 1/3 of the width */}
        <View style={{flex: 1}}>
          <Image source={require('./images/logo.png')} style={{margin: 10, width: 80, height: 60}} />
        </View>
        {/* App name container - takes 2/3 of the width */}
        <View style={{flex: 2}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
            TDK & Friends
          </Text>
        </View>
      </View>
      {/* Render default drawer items (Home, About, Menu, Contact) */}
      <DrawerItemList {...props} />
      {/* Custom Help drawer item that opens external URL */}
      <DrawerItem
        label="Help"
        // Icon changes color based on focus state (highlighted when focused)
        icon={({ focused, color, size }) => (
          <Icon name="help" size={size} color={focused ? '#7cc' : '#ccc'} />
        )}
        // Opens help URL in browser when pressed
        onPress={() => Linking.openURL('https://www.tdk.best')}
      />
    </DrawerContentScrollView>
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
    <MainNavigator.Navigator 
      initialRouteName='HomeScreen' 
      // Use custom drawer content component instead of default
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/* Home section - opens HomeNavigatorScreen when selected */}
      <MainNavigator.Screen 
        name='HomeScreen' 
        component={HomeNavigatorScreen} 
        options={{ 
          title: 'Home', 
          headerShown: false, 
          // Custom drawer icon - home icon that changes color when drawer item is focused
          drawerIcon: ({ focused, size }) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ) 
        }} 
      />
      {/* About section - opens AboutNavigatorScreen when selected */}
      <MainNavigator.Screen 
        name='AboutScreen' 
        component={AboutNavigatorScreen} 
        options={{ 
          title: 'About', 
          headerShown: false, 
          // Custom drawer icon - info icon that changes color when drawer item is focused
          drawerIcon: ({ focused, size }) => (
            <Icon name="info" size={size} color={focused ? '#7cc' : '#ccc'} />
          ) 
        }} 
      />
      {/* Menu section - opens MenuNavigatorScreen when selected */}
      <MainNavigator.Screen 
        name='MenuScreen' 
        component={MenuNavigatorScreen} 
        options={{ 
          title: 'Menu', 
          headerShown: false, 
          // Custom drawer icon - menu icon that changes color when drawer item is focused
          drawerIcon: ({ focused, size }) => (
            <Icon name="menu" size={size} color={focused ? '#7cc' : '#ccc'} />
          ) 
        }} 
      />
      {/* Contact section - opens ContactNavigatorScreen when selected */}
      <MainNavigator.Screen 
        name='ContactScreen' 
        component={ContactNavigatorScreen} 
        options={{ 
          title: 'Contact Us', 
          headerShown: false, 
          // Custom drawer icon - contacts icon that changes color when drawer item is focused
          drawerIcon: ({ focused, size }) => (
            <Icon name="contacts" size={size} color={focused ? '#7cc' : '#ccc'} />
          ) 
        }} 
      />
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