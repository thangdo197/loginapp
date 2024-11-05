// MainDashboard.jsx
import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import SessionsCard from "../components/SessionCard";
import ScreenWrapper from "../components/ScreenWrapper";

const MainDashboard = () => {
  const screenWidth = Dimensions.get("window").width;

  // Sample data for each card
  const cardData = [
    {
      sessions: [30, 45, 28, 80],
      previousSessions: [20, 35, 25, 70],
    },
    {
      sessions: [50, 25, 65, 40],
      previousSessions: [45, 20, 55, 35],
    },
    {
      sessions: [20, 60, 45, 70],
      previousSessions: [15, 50, 40, 65],
    },
    {
      sessions: [70, 35, 90, 55],
      previousSessions: [60, 30, 80, 45],
    },
    {
      sessions: [40, 75, 30, 85],
      previousSessions: [35, 65, 25, 75],
    },
    {
      sessions: [55, 40, 70, 30],
      previousSessions: [45, 35, 60, 25],
    },
    {
      sessions: [25, 50, 75, 60],
      previousSessions: [20, 45, 65, 50],
    },
    {
      sessions: [45, 65, 35, 90],
      previousSessions: [40, 55, 30, 80],
    },
  ];

  // Split data into two rows
  const firstRow = cardData.slice(0, 4);
  const secondRow = cardData.slice(4, 8);

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          {firstRow.map((data, index) => (
            <View key={index} style={styles.cardWrapper}>
              <SessionsCard data={data} />
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {secondRow.map((data, index) => (
            <View key={index} style={styles.cardWrapper}>
              <SessionsCard data={data} />
            </View>
          ))}
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  cardWrapper: {
    width: "24%", // Slightly less than 25% to account for spacing
    marginTop: 8,
  },
});

export default MainDashboard;
