// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import FlatList component for efficiently rendering lists
import { FlatList } from 'react-native';
// Import UI components from react-native-elements library
import { ListItem, Avatar } from 'react-native-elements';
// Import dishes data from shared folder
import { DISHES } from '../shared/dishes';

/**
 * Menu Component
 * Displays a list of all available dishes in the restaurant
 * Allows users to tap on a dish to navigate to its detail page
 */
class Menu extends Component {
  /**
   * Constructor initializes the component state
   * @param {Object} props - Component props (includes navigation prop from React Navigation)
   */
  constructor(props) {
    super(props);
    // Initialize state with dishes data from shared folder
    this.state = {
      dishes: DISHES
    };
  }

  /**
   * Render method that displays the menu list
   * Uses FlatList for efficient rendering of the dish list
   * @returns {JSX.Element} FlatList component displaying all dishes
   */
  render() {
    return (
      <FlatList data={this.state.dishes}
          renderItem={({ item, index }) => this.renderMenuItem(item, index)}
          keyExtractor={(item) => item.id.toString()} />
    );
  }
  
  /**
   * Renders a single menu item (dish) in the list
   * Each item is clickable and navigates to the dish detail screen
   * @param {Object} item - The dish object containing id, name, and description
   * @param {number} index - The index of the item in the list
   * @returns {JSX.Element} A ListItem component displaying dish information
   */
  renderMenuItem(item, index) {
    // Get navigate function from navigation prop (provided by React Navigation)
    const { navigate } = this.props.navigation;
    return (
      <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
          {/* Avatar image for the dish */}
          <Avatar source={require('./images/uthappizza.png')} />
          {/* Content container with left margin for spacing */}
          <ListItem.Content style={{ marginLeft: 10 }}>
            {/* Dish name displayed as title */}
            <ListItem.Title>{item.name}</ListItem.Title>
            {/* Dish description displayed as subtitle */}
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
      </ListItem>
    );
  }

  // Commented out method - previously used for selecting a dish
  // onDishSelect(item) {
  //   this.setState({ selectedDish: item });
  // }
}
export default Menu;