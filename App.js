import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from "./screen/LoggedOut";
import Login from "./screen/Login"
export default class App extends Component {
  render() {
    return <Login />;
  }
}