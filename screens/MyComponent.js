import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
//imported TouchableHighlight component


class MyComponent extends Component {
  constructor(props) {
    super(props);

    //No constructor and methods weren't bound

    this.handlePress = this.handlePress.bind(this);
    this.onSelected = this.onSelected.bind(this);

  }

  onSelected(item) {
    //onSelected wasn't a function, now it does something (ish)
    return
    <Text>{item}</Text>
  }

  handlePress() {
    const { onSelected, item } = this.props;

    this.onSelected(item);
  }

  render() {
    return (
      // <Text> component missing
      <View style={styles.container}>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Press Me!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default MyComponent;
