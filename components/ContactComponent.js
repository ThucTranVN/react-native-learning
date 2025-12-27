// Import React and Component class for creating React components
import React, { Component } from 'react';
// Import Text component from React Native for displaying text
import { Text } from 'react-native';
// Import Card component from react-native-elements for styled card UI
import { Card } from 'react-native-elements';

/**
 * Contact Component
 * Displays the restaurant's contact information including address, phone, fax, and email
 */
class Contact extends Component {
  /**
   * Render method that displays contact information in a card format
   * @returns {JSX.Element} Card component containing contact details
   */
  render() {
    return (
      <Card>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        {/* Display street address */}
        <Text style={{ margin: 10 }}>121, Clear Water Bay Road</Text>
        {/* Display area and district */}
        <Text style={{ margin: 10 }}>Clear Water Bay, Kowloon</Text>
        {/* Display country/region */}
        <Text style={{ margin: 10 }}>HONG KONG</Text>
        {/* Display telephone number */}
        <Text style={{ margin: 10 }}>Tel: +852 1234 5678</Text>
        {/* Display fax number */}
        <Text style={{ margin: 10 }}>Fax: +852 8765 4321</Text>
        {/* Display email address */}
        <Text style={{ margin: 10 }}>Email: confusion@food.net</Text>
      </Card>
    );
  }
}
export default Contact;