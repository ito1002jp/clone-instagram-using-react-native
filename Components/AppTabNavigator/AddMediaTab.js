import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class AddMediaTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="add-circle" style= {{ color: tintColor }} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AddMediaTab</Text>
      </View>
    );
  }
}

export default AddMediaTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
