import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, Animated } from 'react-native';
import DatePicker from 'react-native-date-picker';
import LogoText from '../../assets/images/Logo/logo2.svg';
import QuizIcon from '../../assets/images/Logo/quiz.svg';
import MannerIcon from '../../assets/images/Logo/manner.svg';
import WordIcon from '../../assets/images/Logo/word.svg';
import TrendIcon from '../../assets/images/Logo/trend.svg';
import EyeIcon1 from '../../assets/images/Logo/eye.svg';
import EyeIcon2 from '../../assets/images/Logo/eye2.svg';
import DateIcon from '../../assets/images/Logo/date.svg';
import Box1 from '../../assets/images/Logo/box1.svg';
import Box2 from '../../assets/images/Logo/box2.svg';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [date, setDate] = useState(new Date());
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [emailAvailable, setEmailAvailable] = useState(null); // Default to null to show initial Box1
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [openDatePicker, setOpenDatePicker] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current; 

  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);

    fadeAnim.setValue(0);

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setToastVisible(false));
      }, 3000); 
    });
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setIsPasswordMatch(password === text || text === '');
  };

  const handleEmailCheck = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검증 정규식
    if (!emailRegex.test(email)) {
        setEmailAvailable(false); 
        showToast("올바른 이메일 형식을 입력해주세요.");
        return;
    }
    // example data, 나중에는 백에서 유효한지 Boolean으로 받아오면 됨!
    const isAvailable = email !== "haeun9394@gmail.com"; 
    setEmailAvailable(isAvailable);
    showToast(isAvailable ? "사용 가능한 이메일입니다." : "이미 가입된 이메일입니다.");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 */}
      <LogoText width={400} height={120} style={styles.logo} />

      {/* 이름 입력 필드 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="이름"
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholderTextColor="#4D678C"
        />
      </View>

      {/* 이메일 입력 필드 */}
    <View style={styles.emailContainer}>
        <TextInput
            placeholder="이메일"
            value={email}
            onChangeText={setEmail}
            style={styles.emailInput}
            placeholderTextColor="#4D678C"
        />
        <TouchableOpacity style={styles.checkButton} onPress={handleEmailCheck}>
        <View style={styles.checkButtonContent}>
            <Text style={styles.checkButtonText}>중복체크</Text>
            {emailAvailable === null ? (
                <Box1 width={17} height={17} style={styles.iconInsideButton} />
            ) : emailAvailable ? (
                <Box2 width={17} height={17} style={styles.iconInsideButton} />
            ) : (
                <Box1 width={17} height={17} style={styles.iconInsideButton} />
            )}
        </View>
    </TouchableOpacity>
    </View>

      {/* Toast Notification */}
      {toastVisible && (
        <Animated.View style={[styles.toast, { opacity: fadeAnim }]}>
          <Text style={styles.toastText}>{toastMessage}</Text>
        </Animated.View>
      )}

      {/* 비밀번호 입력 필드 */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="비밀번호"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
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

      {/* 비밀번호 확인 입력 필드 */}
      <View style={[styles.inputContainer, !isPasswordMatch && styles.inputError]}>
        <TextInput
          placeholder="비밀번호 확인"
          secureTextEntry={!isConfirmPasswordVisible}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          style={styles.input}
          placeholderTextColor="#4D678C"
        />
        <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
          {isConfirmPasswordVisible ? (
            <EyeIcon1 width={24} height={24} style={styles.icon} />
          ) : (
            <EyeIcon2 width={24} height={24} style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>
      {!isPasswordMatch && (
        <Text style={styles.errorText}>비밀번호가 일치하지 않습니다. 다시 확인해주세요.</Text>
      )}

      {/* 입사일 입력 필드 */}
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={() => setOpenDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateText}>
            {date.toDateString() === new Date().toDateString() ? '입사일' : `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOpenDatePicker(true)}>
          <DateIcon width={24} height={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        open={openDatePicker}
        date={date}
        mode="date"
        locale="ko"
        onConfirm={(selectedDate) => {
          setDate(selectedDate);
          setOpenDatePicker(false);
        }}
        onCancel={() => setOpenDatePicker(false)}
        minimumDate={new Date(1900, 0)} 
        maximumDate={new Date()}
        title="날짜 선택"
        confirmText="확인"
        cancelText="취소"
    />

      {/* 회원가입 버튼 */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>회원가입</Text>
      </TouchableOpacity>

      {/* 로그인 링크 */}
      <Text style={styles.loginText}>
        계정이 있으신가요? <Text style={styles.loginLink}>로그인</Text>
      </Text>

      {/* 하단 네비게이션 메뉴 */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <QuizIcon width={24} height={24} />
          <Text style={styles.navText}>퀴즈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MannerIcon width={24} height={24} />
          <Text style={styles.navText}>매너설명서</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <WordIcon width={24} height={24} />
          <Text style={styles.navText}>업무용어</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <TrendIcon width={24} height={24} />
          <Text style={styles.navText}>트랜드</Text>
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
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#268AFF',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '90%',
  },
  emailInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 12,
    fontSize: 16,
    color: '#5A5A5A',
    fontWeight: 'bold',
  },
  checkButtonContent: {
    flexDirection: 'row',     
    alignItems: 'center',     
    justifyContent: 'center', 
  },
  checkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#268AFF',
    paddingVertical: 6, 
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  checkButtonText: {
    color: '#FFFFFF', 
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 5,
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
  inputError: {
    borderColor: 'red',
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
  dateButton: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 12,
    color: '#4D678C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 35,
  },
  signUpButton: {
    width: '90%',
    backgroundColor: '#268AFF',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    fontSize: 14,
    color: '#5A5A5A',
    textAlign: 'right',
    fontWeight: 'bold',
    width: '90%', 
  },
  loginLink: {
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
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#268AFF',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '90%',
  },
  emailInput: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 12,
    fontSize: 16,
    color: '#5A5A5A',
    fontWeight: 'bold',
  },
  checkButton: {
    backgroundColor: '#268AFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginLeft: 10,
  },
  checkButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  iconInsideButton: {
    marginLeft: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#268AFF',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#268AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  toast: {
    position: 'absolute',
    bottom: 130,
    left: '10%',
    right: '10%',
    backgroundColor: '#FAECEC',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 7, 
  },
  toastText: {
    color: '#FF000F',
    fontSize: 14,
  },
});

export default Signup;
