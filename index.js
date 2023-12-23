import React, {Component} from 'react';
import {AppRegistry, FlatList, Text} from 'react-native';
import {name as appName} from './app.json';

const Test = () => {
  let data = [];

  for (let i = 0; i < 50; i++) {
    data.push({id: i});
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item?.id}
      renderItem={({item, index}) => {
        console.log('Render:', index);
        return <Text>{index}</Text>;
      }}
    />
  );
};

class App extends Component {
  render() {
    return <Test />;
  }
}

AppRegistry.registerComponent(appName, () => App);
