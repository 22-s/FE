import React from 'react';
import {Modal, View, StyleSheet, Text} from 'react-native';
import NextQuizButton from './button/NextQuizButton';
import AddReviewButton from './button/AddReviewButton';
import XButton from '../../assets/images/QuizDetail/XButton.svg';

const CorrectModal = ({content, modalVisible, setModalVisible, isCorrect}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.top}>
            <XButton width={17} height={17} />
          </View>
          <View style={styles.modalTitle}>
            <Text
              style={[
                styles.titleText,
                {color: isCorrect ? '#268AFF' : '#FF4326'},
              ]}>
              {isCorrect ? '정답입니다!' : '틀렸습니다'}
            </Text>
          </View>
          <View style={styles.modalContent}>
            <Text style={styles.text}>{content}</Text>
          </View>
          <View style={styles.bottom}>
            <NextQuizButton />
            <AddReviewButton />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(0, 0, 0, 0.40)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 288,
    height: 445,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    padding: 21,
  },
  top: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalTitle: {
    width: 215.841,
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 13,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
  modalContent: {
    alignItems: 'center',
    width: 243,
    height: 249,
    borderColor: '#BAC4CE',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 23,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#72777A',
  },
  bottom: {
    width: 243,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CorrectModal;
