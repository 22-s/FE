import React from 'react';
import {View, StyleSheet} from 'react-native';

const whiteBox = ({height, children}) => {
  return <View style={[styles.container, {height}]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: 359,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
});

export default whiteBox;
