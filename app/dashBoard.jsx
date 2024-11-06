import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import SessionsCard from "../components/SessionCard";
import AdsCard from "../components/AdsCard";
import CustomCard from "../components/CustomCard";
import ScreenWrapper from "../components/ScreenWrapper";
import StatisticCard from "../components/Statistic";

const screenWidth = Dimensions.get("window").width;
const maxWidth = 1400;
const containerPadding = 16;

const Dashboard = () => {
  const statisticData = [
    {
      title: "by medium",
      organic: "17.3K",
      none: "6,603",
      cpc: "1,333",
      refferal: "1,009",
      p_social: "87",
    },
    {
      title: "by medium",
      organic: "97",
      none: "49",
      cpc: "49",
      refferal: "31",
      p_social: "3",
    },
  ];

  const sessionsData = [
    {
      sessions: [
        56, 49, 41, 78, 68, 75, 40, 57, 57, 35, 55, 74, 76, 69, 77, 70, 80, 66,
        68, 63, 59, 63, 32, 62, 34, 45, 48, 45, 56, 59,
      ],
      previousSessions: [
        40, 32, 51, 38, 49, 21, 65, 70, 67, 70, 26, 60, 22, 61, 49, 28, 49, 66,
        54, 47, 38, 51, 25, 22, 40, 67, 45, 49, 30, 24,
      ],
      title: "Sessions",
      amount: "26.9",
      unit: "K",
    },
    {
      sessions: [
        57, 85, 84, 80, 49, 45, 72, 78, 78, 73, 45, 56, 75, 76, 39, 77, 66, 35,
        57, 60, 38, 54, 77, 38, 69, 63, 62, 54, 51, 60,
      ],
      previousSessions: [
        25, 37, 31, 61, 42, 40, 57, 43, 28, 47, 41, 68, 43, 60, 74, 39, 31, 60,
        31, 26, 47, 25, 33, 65, 38, 49, 65, 74, 68, 26,
      ],
      title: "Conversions",
      amount: "229",
      unit: "",
    },
  ];

  const adsData = [
    {
      title: "Google Ads",
      budget: "2.6",
      progress: 52,
      conversions: 49,
      costPerConversion: 53.3,
    },
    {
      title: "Facebook",
      budget: "2",
      progress: 35,
      conversions: 3,
      costPerConversion: 678.3,
    },
  ];

  const customData = [
    {
      sessions: "1,333",
      cpc: "2.0",
    },
    {
      sessions: "87",
      cpc: "23.4",
    },
  ];

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          {/* Sessions Cards Row */}
          <View style={styles.row}>
            {sessionsData.map((data, index) => (
              <View key={`sessions-${index}`} style={styles.cardWrapper}>
                <SessionsCard
                  data={data}
                  amount={data.amount}
                  unit={data.unit}
                  title={data.title}
                />
              </View>
            ))}
            {adsData.map((data, index) => (
              <View key={`ads-${index}`} style={styles.cardWrapper}>
                <AdsCard
                  title={data.title}
                  budget={data.budget}
                  progress={data.progress}
                  conversions={data.conversions}
                  costPerConversion={data.costPerConversion}
                />
              </View>
            ))}
          </View>

          {/* Ads Cards Row */}
          <View style={styles.row}>
            {statisticData.map((data, index) => (
              <View key={`statistic-${index}`} style={styles.cardWrapper}>
                <StatisticCard
                  organic={data.organic}
                  cpc={data.cpc}
                  none={data.none}
                  refferal={data.refferal}
                  p_social={data.refferal}
                />
              </View>
            ))}
            {customData.map((data, index) => (
              <View key={`custom-${index}`} style={styles.cardWrapper}>
                <CustomCard sessions={data.sessions} cpc={data.cpc} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  contentContainer: {
    top: 10,
    maxWidth: maxWidth,
    alignSelf: "center",
    width: "100%",
    padding: containerPadding,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginBottom: -10,
  },
  cardWrapper: {
    width: Math.min(280, (maxWidth - containerPadding * 2 - 48) / 4),
    minWidth: 250,
  },
});

export default Dashboard;
