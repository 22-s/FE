import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Prev from '../../assets/images/AfterQuiz/Prev.svg';

const NavButton = () => {
  return (
    <TouchableOpacity style={styles.navButton}>
      <Prev width={27} height={20} />
      <Text style={styles.buttonText}>이전</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  navButton: {
    width: 48,
    height: 48,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 9,
  },
  buttonText: {
    color: '#67ADFF',
    fontSize: 10,
    fontWeight: '600',
  },
});

export default NavButton;
