// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import React Native components for building UI
import { Text, View, Button  } from 'react-native';

/**
 * HelloComponent
 * A simple demonstration component that displays personal information
 * and allows incrementing age and weight through a button press
 */
class HelloComponent extends Component {
  /**
   * Constructor initializes the component state
   * @param {Object} props - Component props (expects a 'name' prop)
   */
  constructor(props) {
    super(props);
    // Initialize state with default age and weight values
    this.state = {
      age: 30,
      weight: 80
    };
  }

  /**
   * Render method that displays the component UI
   * Shows greeting, name from props, and age/weight from state
   * @returns {JSX.Element} View containing text elements and a button
   */
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Greeting text */}
        <Text style={{ margin: 50 }}>Hello world!</Text>
        {/* Display name from props with bold and italic styling */}
        <Text style={{ fontWeight: 'bold', fontStyle: 'italic' }}>My name is {this.props.name}</Text>
        {/* Display age from state with red text color */}
        <Text style={{ color: 'red' }}>Im {this.state.age} years old </Text>
        {/* Display weight from state with cyan background */}
        <Text style={{ backgroundColor: 'cyan' }}>and my weight is {this.state.weight} kg</Text>
        {/* Button container with margin */}
        <View style={{ margin: 50 }}>
          {/* Button that triggers age and weight increment */}
          <Button title='NEXT YEAR' onPress={() => this.onPressNextYear()} />
        </View>
      </View>
    );
  }

  /**
   * Handler for the "NEXT YEAR" button press
   * Increments age by 1 and weight by 2 to simulate aging
   */
  onPressNextYear() {
    // Get current age and weight from state
    var curAge = this.state.age;
    var curWeight = this.state.weight;
    // Update state with incremented values
    this.setState({
      age: curAge + 1,      // Age increases by 1 year
      weight: curWeight + 2 // Weight increases by 2 kg
    });
  }
}

export default HelloComponent;