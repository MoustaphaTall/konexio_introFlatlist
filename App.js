import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    const url = 'http://restcountries.eu/rest/v2/all';
    const countries = [];

    fetch(url)
      .then(res => res.json())
      .then(json => {
          json.map(country =>
            countries.push({name: country.name, capital: country.capital}))
          this.setState({ countries })
        }
      );
  } 
  
  renderItem({ item }) {
    return (
      <View>
        <Text>{item.name} - Capital: {item.capital}</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.countries}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

export default App;