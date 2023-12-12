import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import * as Font from 'expo-font';


const OpenWebsiteButton = () => {
  const handlePress = async () => {
    const url = 'https://domonation.dev';

    // Check if the device supports opening URLs
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Open the URL in the device's default web browser
      await Linking.openURL(url);
    } else {
      console.error(`Cannot open URL: ${url}`);
    }
  };
  return (
    <View>
      <Button title="Open Website" onPress={handlePress} />
    </View>
  );
};


const MainMenu = () => {
  // Define functions for button actions (e.g., navigation).

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Domonation's Daily Fortune</Text>
        <Text style={styles.body}>Learn from Domonation's vast array of wisdom...</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the "Open Daily Fortune" screen
        }}
      >
        <Text style={styles.buttonText}>Open Daily Fortune</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the "Submit a Fortune" screen
        }}
      >
        <Text style={styles.buttonText}>Submit a Fortune</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the "Credits" screen
        }}
      >
        <Text style={styles.buttonText}>Credits</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Navigate to the "Support" screen
        }}
      >
        <Text style={styles.buttonText}>Support</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const url = 'https://domonation.dev';
          Linking.openURL(url);
          return;
        }}
      >
        <Text style={styles.buttonText}>Visit Domonation</Text>
      </TouchableOpacity>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Set your background color here
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3498db', // Set button background color
    padding: 10,
    width: 200,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // Set button text color
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    textAlign: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  }
});

export default MainMenu;

