// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import React Native components for building UI
import { Text, View, FlatList } from 'react-native';
// Import ScrollView from react-native-virtualized-view for optimized scrolling
import { ScrollView } from 'react-native-virtualized-view';
// Import UI components from react-native-elements library
import { Card, ListItem, Avatar } from 'react-native-elements';
// Import the leaders data from shared folder
import { LEADERS } from '../shared/leaders';

/**
 * RenderHistory Component
 * Displays the restaurant's history information in a card format
 */
class RenderHistory extends Component {
  render() {
    return (
      <Card>
        <Card.Title>Our History</Card.Title>
        <Card.Divider />
        {/* Display restaurant history text with margin styling */}
        <Text style={{ margin: 10 }}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
        <Text style={{ margin: 10 }}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the worlds best cuisines in a pan.</Text>
      </Card>
    );
  }
}

/**
 * RenderLeadership Component
 * Displays the corporate leadership team in a card with a list of leaders
 */
class RenderLeadership extends Component {
  /**
   * Main render method that displays the leadership card
   * Uses FlatList to efficiently render the list of leaders
   */
  render() {
    return (
      <Card>
        <Card.Title>Corporate Leadership</Card.Title>
        <Card.Divider />
        {/* FlatList component for rendering the list of leaders efficiently */}
        <FlatList data={this.props.leaders}
          renderItem={({ item, index }) => this.renderLeaderItem(item, index)}
          keyExtractor={(item) => item.id.toString()} />
      </Card>
    );
  }
  
  /**
   * Renders a single leader item in the list
   * @param {Object} item - The leader object containing name and description
   * @param {number} index - The index of the item in the list
   * @returns {JSX.Element} A ListItem component displaying leader information
   */
  renderLeaderItem(item, index) {
    return (
      <ListItem>
        {/* Container for avatar and content, arranged horizontally */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* Circular avatar image for the leader */}
          <Avatar rounded source={require('./images/profile-picture.png')} />
          <ListItem.Content>
            {/* Leader's name displayed in bold */}
            <ListItem.Title style={{ fontWeight: 'bold' }}>{item.name}</ListItem.Title>
            {/* Leader's description/role displayed as subtitle */}
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </View>
      </ListItem>
    );
  }
}

/**
 * About Component
 * Main component for the About page that displays restaurant history and leadership
 */
class About extends Component {
  /**
   * Constructor initializes the component state
   * @param {Object} props - Component props
   */
  constructor(props) {
    super(props);
    // Initialize state with leaders data from shared folder
    this.state = {
      leaders: LEADERS
    };
  }
  
  /**
   * Render method that displays the About page content
   * Combines RenderHistory and RenderLeadership components in a scrollable view
   */
  render() {
    return (
      <ScrollView>
        {/* Render the restaurant history section */}
        <RenderHistory />
        {/* Render the corporate leadership section, passing leaders data as prop */}
        <RenderLeadership leaders={this.state.leaders} />
      </ScrollView>
    );
  }
}
export default About;