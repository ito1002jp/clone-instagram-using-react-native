import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base';

class CardComponent extends React.Component {

  render() {
     
    const images = {
      "1": require('../assets/shutterstock_259874381-e1508504389477.jpg'),
      "2": require('../assets/shutterstock_289409681-e1508328833118.jpg'),
      "3": require('../assets/m_1_9E3tzNO7Llxfpray8HBImQ.jpg'),
    }


    return (
      <Card>
	<CardItem>
	  <Left>
	    <Thumbnail source={require('../assets/me.jpg')} />
	    <Body>
	      <Text>Tesshu</Text>
	      <Text>Jan 15, 2019</Text>
	    </Body>
	  </Left>
	</CardItem>
	<CardItem cardBody>
	  <Image source={ images[this.props.imageSource] }
	    style={{ height: 200, width: null, flex: 1}}
	    />
	</CardItem>
	<CardItem style={{ height: 45 }}>
	  <Left>
	    <Button transparent>
	      <Icon name="heart" style={{ color:'black' }} />
	    </Button>
	    <Button transparent>
	      <Icon name="chatbubbles" style={{ color:'black' }} />
	    </Button>
  	    <Button transparent>
	      <Icon name="send" style={{ color:'black' }} />
	    </Button>
	  </Left>
	</CardItem>
	<CardItem style={{ height: 35}}>
	  <Text>{this.props.likes} likes</Text>
	</CardItem>
	<CardItem>
	  <Body>
 	    <Text>
	      <Text style={{ fontWeight: "900" }}>Tesshu </Text>
	      This Japanese Lorem Ipsum is based on the kanji frequency count at tidraso.co.uk and includes about 50% kanji, 25% hiragana, 20% katakana and 5% roman numerals and punctuation. Katakana and hiragana cluster in strings between 1 to 4 chars at random points in each paragraph. Hiragana occurs more often at the end of sentences, rather in clumps of 1 to 4 chars rather than just single chars.
	    </Text>
	  </Body>
	</CardItem>
      </Card>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
