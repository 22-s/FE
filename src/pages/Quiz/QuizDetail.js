import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from '../../components/QuizDetailComponent/Title';
import Content from '../../components/QuizDetailComponent/Content';
import O from '../../assets/images/QuizDetail/O.svg';
import X from '../../assets/images/QuizDetail/X.svg';

const QuizDetail = () => {
  return (
    <View style={styles.container}>
      <View marginBottom={12}>
        <Title content="1. 신입사원은 정시에 맞추어 출근해야 하나요?" />
      </View>
      <View marginBottom={17}>
        <Content content="당신은 이제 막 입사한 신입 사원입니다. 회사의 공식 출근 시간은 오전 9시로 정해져 있습니다. 그렇다면, 출근 시간을 정확히 맞춰 9시에 도착하는 것이 좋은 걸까요? 아니면, 다른 요인을 고려해야 할까요?" />
      </View>
      <View style={styles.answer}>
        <O width={165} height={75} />
        <X width={165} height={75} />
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
  answer: {
    width: 360,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default QuizDetail;
