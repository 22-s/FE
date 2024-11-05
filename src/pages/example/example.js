import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Example() {
  // 상태(state)로 count 값을 관리
  const [count, setCount] = useState(0);

  // count를 증가시키는 함수
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native!</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase Count" onPress={increaseCount} />
    </View>
  );
}

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});
