// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import React Native components for building UI
import { View, Text } from 'react-native';
// Import ScrollView from react-native-virtualized-view for optimized scrolling
import { ScrollView } from 'react-native-virtualized-view';
// Import UI components from react-native-elements library
import { Card, Image } from 'react-native-elements';

// Import data from shared folder
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';

/**
 * RenderItems Component
 * A reusable component for rendering featured items (promotions, leaders, or dishes)
 * Displays items in a card format with image, title, subtitle, and description
 */
class RenderItems extends Component{
  /**
   * Render method that displays an item in a card format
   * @returns {JSX.Element} Card component with item details or empty View if item is null
   */
  render() {
    // Get the item from props
    const item = this.props.item;
    // Only render if item exists
    if (item != null) {
      return (
        <Card>
          {/* Display item image with featured title and subtitle overlay */}
          <Image source={require('./images/uthappizza.png')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* Item name displayed as featured title */}
            <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
            {/* Item designation/role displayed as featured subtitle (if available) */}
            <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
          </Image>
          {/* Display item description */}
          <Text style={{ margin: 10 }}>{item.description}</Text>
        </Card>
      );
    }
    // Return empty view if item is null
    return (<View />);
  }
}

/**
 * Home Component
 * Main component for the home page that displays featured promotions, leaders, and dishes
 */
class Home extends Component {
  /**
   * Constructor initializes the component state
   * @param {Object} props - Component props
   */
  constructor(props) {
    super(props);
    // Initialize state with data from shared folder
    this.state = {
      promotions: PROMOTIONS,
      leaders: LEADERS,
      dishes: DISHES
    };
  }

  /**
   * Render method that displays the home page content
   * Filters and displays the featured promotion, leader, and dish
   * @returns {JSX.Element} ScrollView containing featured items
   */
  render() {
    // Find the featured dish (first dish where featured === true)
    const dish = this.state.dishes.filter((dish) => dish.featured === true)[0];
    // Find the featured promotion (first promotion where featured === true)
    const promotion = this.state.promotions.filter((promotion) => promotion.featured === true)[0];
    // Find the featured leader (first leader where featured === true)
    const leader = this.state.leaders.filter((leader) => leader.featured === true)[0];
    
    return (
      <ScrollView>
        {/* Render featured promotion */}
        <RenderItems item={promotion} />
        {/* Render featured leader */}
        <RenderItems item={leader} />
        {/* Render featured dish */}
        <RenderItems item={dish} />
      </ScrollView>
    );
  }
}

export default Home;