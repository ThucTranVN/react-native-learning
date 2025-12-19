import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import { Card, Image } from 'react-native-elements';

import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';

class RenderItems extends Component{
  render() {
    const item = this.props.item;
    if (item != null) {
      return (
        <Card>
          <Image source={require('./images/uthappizza.png')} style={{ width: '100%', height: 100, flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card.FeaturedTitle>{item.name}</Card.FeaturedTitle>
            <Card.FeaturedSubtitle>{item.designation}</Card.FeaturedSubtitle>
          </Image>
          <Text style={{ margin: 10 }}>{item.description}</Text>
        </Card>
      );
    }
    return (<View />);
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promotions: PROMOTIONS,
      leaders: LEADERS,
      dishes: DISHES
    };
  }

  render() {
    const dish = this.state.dishes.filter((dish) => dish.featured === true)[0];
    const promotion = this.state.promotions.filter((promotion) => promotion.featured === true)[0];
    const leader = this.state.leaders.filter((leader) => leader.featured === true)[0];
    return (
      <ScrollView>
        <RenderItems item={promotion} />
        <RenderItems item={leader} />
        <RenderItems item={dish} />
      </ScrollView>
    );
  }
}

export default Home;