import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableHighlight, StyleSheet, Text, View, Button } from "react-native";
import colors from "../../src/style/index";

export default class NextArrowButton extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}>
        <Text >Registrate</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    right: -2,
    bottom: 100,
    paddingTop: 0
    
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 80,
    backgroundColor: colors.green02
  }
});

