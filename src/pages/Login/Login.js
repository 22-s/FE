import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import LogoText from '../../assets/images/Logo/logo2.svg';
import QuizIcon from '../../assets/images/Logo/quiz.svg';
import MannerIcon from '../../assets/images/Logo/manner.svg';
import WordIcon from '../../assets/images/Logo/word.svg';
import TrendIcon from '../../assets/images/Logo/trend.svg';
import EyeIcon1 from '../../assets/images/Logo/eye.svg';
import EyeIcon2 from '../../assets/images/Logo/eye2.svg';

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 */}
      <LogoText width={400} height={120} style={styles.logo} />

      {/* 이메일 입력 필드 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="이메일"
          style={styles.input}
          placeholderTextColor="#4D678C"
        />
      </View>

      {/* 비밀번호 입력 필드 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="비밀번호"
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
          placeholderTextColor="#4D678C"
        />
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? (
            <EyeIcon1 width={24} height={24} style={styles.icon} />
          ) : (
            <EyeIcon2 width={24} height={24} style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>

      {/* 로그인 버튼 */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      {/* 회원가입 링크 */}
      <Text style={styles.signUpText}>
        계정이 없으신가요? <Text style={styles.signUpLink}>회원가입</Text>
      </Text>

      {/* 하단 네비게이션 메뉴 */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <QuizIcon width={24} height={24} />
          <Text style={styles.navText}>퀴즈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MannerIcon width={24} height={24} />
          <Text style={styles.navTextInactive}>매너설명서</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <WordIcon width={24} height={24} />
          <Text style={styles.navTextInactive}>업무용어</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <TrendIcon width={24} height={24} />
          <Text style={styles.navTextInactive}>트렌드</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: -10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#268AFF',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 12,
    fontSize: 16,
    color: '#5A5A5A',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
    color: '#4D678C',
  },
  loginButton: {
    width: '90%',
    backgroundColor: '#268AFF',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 15,
    fontSize: 14,
    color: '#5A5A5A',
    textAlign: 'right',
    fontWeight: 'bold',
    width: '90%', 
  },
  signUpLink: {
    color: '#5A5A5A',
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 30,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 5,
  },
  navTextInactive: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 5,
  },
});

export default LoginPage;
