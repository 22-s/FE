import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import SearchBar from "../../components/Home/searchBar";
import ReviewBar from "../../components/Home/reviewBar";
import CategoryBox from '../../components/Home/categoryBox';
import Bag from '../../assets/images/Home/bag.svg';
import Card from '../../assets/images/Home/card.svg';
import Email from '../../assets/images/Home/email.svg';
import Pen from '../../assets/images/Home/pen.svg';
import Outfit from '../../assets/images/Home/outfit.svg';
import Meeting from '../../assets/images/Home/meeting.svg';

const windowWidth = Dimensions.get('window').width;

export default function QuizHome() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <SearchBar />
                <ReviewBar />
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="업무의 첫걸음"
                      subtitle={
                        <>
                          <Text style={{ color: '#F2892E' }}>매너</Text>
                          <Text>와 </Text>
                          <Text style={{ color: '#F2892E' }}>일</Text>
                          <Text>의 기본</Text>
                        </>
                      }
                      icon={<Bag />}
                  />
                  <CategoryBox 
                      title="첫인상을 좌우하는"
                      subtitle={
                        <>
                          <Text style={{ color: '#007AFF' }}>명함</Text>
                          <Text> 공유 매너</Text>
                        </>
                      }
                      icon={<Card />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="이렇게 보내면 OK!"
                      subtitle={
                        <>
                          <Text>팀장님께</Text>
                          <Text>{'\n'}</Text>
                          <Text style={{ color: '#008D39' }}>메일</Text>
                          <Text> 보내기</Text>
                        </>
                      }
                      icon={<Email />}
                  />
                  <CategoryBox 
                      title="명확하고 간결하게,"
                      subtitle={
                        <>
                          <Text style={{ color: '#FD553E' }}>보고서</Text>
                          <Text> 작성법</Text>
                        </>
                      }
                      icon={<Pen />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="상황별 스타일링 가이드"
                      subtitle={
                        <>
                          <Text style={{ color: '#141587' }}>TPO</Text>
                          <Text>에 맞는 </Text>
                          <Text style={{ color: '#B14D00' }}>복장</Text>
                        </>
                      }
                      icon={<Outfit />}
                  />
                  <CategoryBox 
                      title="원활한 의견 전달"
                      subtitle={
                        <>
                          <Text style={{ color: '#98A304' }}>회의</Text>
                          <Text> 시 소통 전략</Text>
                        </>
                      }
                      icon={<Meeting />}
                  />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
    },
    categoryArea: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
      paddingLeft: 10,
      paddingRight: 10,
      marginTop: 10,
    }
});
