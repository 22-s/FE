import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import SearchBar from "../../components/Home/searchBar";
import BookmarkBar from "../../components/Home/bookmarkBar";
import CategoryBox from '../../components/Home/categoryBox';
import Accounting from '../../assets/images/Home/accounting.svg';
import IT from '../../assets/images/Home/it.svg';
import Marketing from '../../assets/images/Home/marketing.svg';
import HR from '../../assets/images/Home/hr.svg';
import Captain from '../../assets/images/Home/captain.svg';
import Negotiate from '../../assets/images/Home/negotiate.svg';

const windowWidth = Dimensions.get('window').width;

export default function QuizHome() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <SearchBar />
                <BookmarkBar />
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="정확한 회계 처리"
                      subtitle="회계/재무" 
                      icon={<Accounting />}
                  />
                  <CategoryBox 
                      title="IT 프로젝트 관리"
                      subtitle="기술 IT"
                      icon={<IT />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="효과적인 고객 유치"
                      subtitle="마케팅/세일즈"
                      icon={<Marketing />}
                  />
                  <CategoryBox 
                      title="인사 관리를 위한"
                      subtitle="HR/조직"
                      icon={<HR />}
                  />
                </View>
                <View style={styles.categoryArea}>
                  <CategoryBox 
                      title="원활한 의견 전달"
                      subtitle="회의 시 소통 전략"
                      icon={<Captain />}
                  />
                  <CategoryBox 
                      title="효과적인 협상 전략"
                      subtitle="협상/의사결정"
                      icon={<Negotiate />}
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
