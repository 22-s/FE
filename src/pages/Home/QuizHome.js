import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
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
                      subtitle={["매너", "와 일의 기본"]} 
                      highlightStyle={{ color: "#222222" }}
                      icon={<Bag />}
                  />
                  <CategoryBox 
                      title="첫인상을 좌우하는"
                      subtitle="명함 공유 매너"
                      icon={<Card />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="이렇게 보내면 OK!"
                      subtitle="팀장님께 메일 작성"
                      icon={<Email />}
                  />
                  <CategoryBox 
                      title="명확하고 간결하게,"
                      subtitle="보고서 작성법"
                      icon={<Pen />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="상황별 스타일링 가이드"
                      subtitle="TPO에 맞는 복장"
                      icon={<Outfit />}
                  />
                  <CategoryBox 
                      title="원활한 의견 전달"
                      subtitle="회의 시 소통 전략"
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
