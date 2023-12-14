import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import { styles } from './src/styles/styles.js';



const MainMenu = () => {

  return (
    <View style={styles.container}>

      {/* Background Image */}
      {/* <ImageBackground
        source={require('./assets/background-main-menu.png')}
        style={styles.backgroundImage}
      > */}

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={[styles.title]}>Daily WisDom</Text>
        <Text style={styles.body}>Learn from Domonation's vast array of knowledge...</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Implement navigation to the "Open Daily Fortune" screen here
        }}>
        <Text style={styles.buttonText}>Open Daily Fortune</Text>
      </TouchableOpacity>

      {/* Other buttons and actions... */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const url = 'https://domonation.dev';
          Linking.openURL(url);
        }}
      >
        <Text style={styles.buttonText}>Visit Domonation</Text>
      </TouchableOpacity>

      {/* </ImageBackground> */}

    </View >
  );
};



export default MainMenu;


