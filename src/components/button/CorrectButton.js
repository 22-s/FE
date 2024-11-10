import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CorrectButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>정답</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 14,
    backgroundColor: '#E5EFFF',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#268AFF',
    fontSize: 10,
  },
});

export default CorrectButton;
