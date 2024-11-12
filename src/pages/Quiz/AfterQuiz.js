import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Title from '../../components/QuizDetailComponent/Title';
import Content from '../../components/QuizDetailComponent/Content';
import CorrectModal from '../../components/QuizDetailComponent/CorrectModal';
import NavButtonNext from '../../components/AfterQuizComponent/NavButtonNext';
import NavButtonPrev from '../../components/AfterQuizComponent/NavButtonPrev';

const AfterQuiz = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  return (
    <View style={styles.container}>
      <View marginBottom={12}>
        <Title content="1. 신입사원은 정시에 맞추어 출근해야 하나요?" />
      </View>
      <View marginBottom={17}>
        <Content content="당신은 이제 막 입사한 신입 사원입니다. 회사의 공식 출근 시간은 오전 9시로 정해져 있습니다. 그렇다면, 출근 시간을 정확히 맞춰 9시에 도착하는 것이 좋은 걸까요? 아니면, 다른 요인을 고려해야 할까요?" />
      </View>
      <View style={styles.answer}></View>
      <CorrectModal
        content="출근 시각 10분 일찍 출근해서 업무 시작 준비를 해야합니다! 여유를 가지고 하루 일과 및 계획을 점검하며, 간단한 청소 정리정돈으로 하루를 시작합니다."
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isCorrect={isCorrect}
      />
      <View style={styles.buttonContainer}>
        <NavButtonPrev />
        <NavButtonNext />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  quizHeader: {
    marginBottom: 20,
  },
  answer: {
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    position: 'absolute',
    zIndex: 10,
  },
});

export default AfterQuiz;
