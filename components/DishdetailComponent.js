// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import React Native components for building UI
import { View, Text, FlatList } from 'react-native';
// Import ScrollView from react-native-virtualized-view for optimized scrolling
import { ScrollView } from 'react-native-virtualized-view';
// Import UI components from react-native-elements library
import { Card, Image, Icon } from 'react-native-elements';
// Import dishes and comments data from shared folder
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

/**
 * RenderComments Component
 * Displays a list of comments for a dish in a card format
 */
class RenderComments extends Component {
  /**
   * Render method that displays the comments card with a list of comments
   * @returns {JSX.Element} Card component containing a FlatList of comments
   */
  render() {
    return (
      <Card>
        <Card.Title>Comments</Card.Title>
        <Card.Divider />
        {/* FlatList component for efficiently rendering the list of comments */}
        <FlatList data={this.props.comments}
          renderItem={({ item, index }) => this.renderCommentItem(item, index)}
          keyExtractor={(item) => item.id.toString()} />
      </Card>
    );
  }

  /**
   * Renders a single comment item in the list
   * @param {Object} item - The comment object containing comment text, rating, author, and date
   * @param {number} index - The index of the item in the list
   * @returns {JSX.Element} A View component displaying comment information
   */
  renderCommentItem(item, index) {
    return (
      <View key={index} style={{ margin: 10 }}>
        {/* Display the comment text */}
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        {/* Display the rating as number of stars */}
        <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
        {/* Display the author name and date */}
        <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date}</Text>
      </View>
    );
  }
}

/**
 * RenderDish Component
 * Displays detailed information about a single dish including image, name, description, and favorite button
 */
class RenderDish extends Component {
  /**
   * Render method that displays dish details
   * @returns {JSX.Element} Card component with dish information or empty View if dish is null
   */
  render() {
    // Get the dish from props
    const dish = this.props.dish;
    // Only render if dish exists
    if (dish != null) {
      return (
        <Card>
          {/* Display dish image with featured title overlay */}
          <Image source={require('./images/uthappizza.png')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card.FeaturedTitle>{dish.name}</Card.FeaturedTitle>
          </Image>
          {/* Display dish description */}
          <Text style={{ margin: 10 }}>{dish.description}</Text>
          {/* Favorite icon button - shows filled heart if favorited, outline heart if not */}
          <Icon raised reverse type='font-awesome' color='#f50'
                name={this.props.favorite ? 'heart' : 'heart-o'}
                onPress={() => this.props.favorite ? alert('Already favorite') : this.props.onPressFavorite()} />
        </Card>
      );
    }
    // Return empty view if dish is null
    return (<View />);
  }
}

/**
 * Dishdetail Component
 * Main component for displaying detailed information about a specific dish
 * Shows dish details, comments, and allows users to mark dishes as favorites
 */
class Dishdetail extends Component {
  /**
   * Constructor initializes the component state
   * @param {Object} props - Component props (includes route params for dishId)
   */
  constructor(props) {
    super(props);
    // Initialize state with dishes, comments data, and empty favorites array
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      favorites: []
    };
  }
  
  /**
   * Render method that displays the dish detail page
   * Extracts dishId from route params and filters relevant data
   * @returns {JSX.Element} ScrollView containing dish details and comments
   */
  render() {
    // Get dishId from route parameters and convert to integer
    const dishId = parseInt(this.props.route.params.dishId);
    // Find the dish by ID from the dishes array
    const dish = this.state.dishes[dishId];
    // Filter comments to only show comments for this specific dish
    const comments = this.state.comments.filter((comment) => comment.dishId === dishId);
    // Check if this dish is already in the favorites list
    const favorite = this.state.favorites.some((fav) => fav === dishId);
    
    return (
      <ScrollView>
        {/* Render dish details with favorite functionality */}
        <RenderDish dish={dish} favorite={favorite} onPressFavorite={() => this.markFavorite(dishId)} />
        {/* Render comments for this dish */}
        <RenderComments comments={comments} />
      </ScrollView>
    );
  }

  /**
   * Marks a dish as favorite by adding it to the favorites array
   * @param {number} dishId - The ID of the dish to mark as favorite
   */
  markFavorite(dishId) {
    this.setState({
      // Add the dish to favorites array by concatenating a new object with the dishId
      favorites: this.state.favorites.concat(dishId)
    });
  }
}
export default Dishdetail;