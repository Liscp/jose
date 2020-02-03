import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import InputField from "../components/form/InputFiled";
import colors from "../src/style/index";
import NextArrowButton from "../components/buttons/NextArrowButton";
export default class Login extends Component {
  render() {
    return (
      <ImageBackground style={styles.wrapper} source={require('../img/fondo.jpg')} behavior="padding">
        <View style={styles.scrollViewWrapper, styles.avoidView}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Registrate</Text>
            <InputField 
              labelText="Nombres" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="text" 
              customStyle={{marginBottom:30}} 
                
            />
            <InputField 
              labelText="Apellido" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="text" 
              customStyle={{marginBottom:30}} 
                
            />
            <InputField 
              labelText="Correo Institucional" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="email"  
              customStyle={{marginBottom:30}}
            />
            <InputField 
              labelText="Contraseña" 
              labelTextSize={14} 
              labelColor={colors.white} 
              textColor={colors.white} 
              borderBottomColor={colors.white} 
              inputType="password"  
              customStyle={{marginBottom:30}}
            />
          </ScrollView>
          <NextArrowButton />
         </View>
       </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  backgroundImage: {
    position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3
  }
});