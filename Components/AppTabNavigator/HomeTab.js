import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent';

class HomeTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="home" style= {{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={ styles.container }>

	<Header>
	  <Left><Icon name="camera" style={{ paddingLeft: 10 }}/></Left>
	  <Body><Text>Instagram</Text></Body>
	  <Right><Icon name="send" style={{ paddingRight: 10 }}/></Right>
	</Header>


        <Content>
	  <View style={{ height:100 }}>
	    <View style={{ flex:1, flexDirection: 'row', justifyContent:'space-between'
			 , alignItems: 'center', paddingHorizontal: 7}}>
	      <Text style={{ fontWeight: 'bold' }}>Stories</Text>
	      <View style={{ flexDirection:'row', 'alignItems':'center' }}>
	    	<Icon name="md-play" style={{ fontSize: 14 }} />
	        <Text>Watch All</Text>
	      </View>
	    </View>
	    <View style={{ flex: 3}}>
 	      <ScrollView
	        horizontal={true}
	    	showsHorizontalScrollIndicator={false}
	        contentContainerStyle={{
		  alignItems:'center',
		  paddingStart:5,
		  paddingEnd:5,
		}}
	      >
		 <Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
		<Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
		<Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
		<Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
		<Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
		<Thumbnail source={require('../../assets/me.jpg')} 
	    	  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
	    	/>
 	      </ScrollView>
	    </View>
	  </View>
	  <CardComponent imageSource ="1" likes="101" />
	  <CardComponent imageSource ="2" likes="1" />
	  <CardComponent imageSource ="3" likes="30" />
	</Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
