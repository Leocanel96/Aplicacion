import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  render () {
      return (
        <View style={styles.centerContent}>
          <Text style = { styles.textStyle }>Descargando Pokemon</Text>
          <StatusBar style="auto" />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  centerContent:{
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle: {
    fontSize:30
  }
});
