import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AdsCard from "../components/AdsCard";

const Dashboard = () => {
  const adsData = [
    {
      title: "Google Ads",
      budget: "2.6k",
      progress: 52,
      conversions: 49,
      costPerConversion: 53.3,
      backgroundColor: "#222",
    },
    {
      title: "Facebook Ads",
      budget: "1.8k",
      progress: 35,
      conversions: 30,
      costPerConversion: 60.0,
      backgroundColor: "#223",
    },
    {
      title: "TikTok Ads",
      budget: "3.2k",
      progress: 75,
      conversions: 85,
      costPerConversion: 37.6,
      backgroundColor: "#232",
    },
    // Thêm nhiều card khác nếu cần
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardGrid}>
        {adsData.map((data, index) => (
          <View key={index} style={styles.cardWrapper}>
            <AdsCard
              title={data.title}
              budget={data.budget}
              progress={data.progress}
              conversions={data.conversions}
              costPerConversion={data.costPerConversion}
              backgroundColor={data.backgroundColor}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  cardWrapper: {
    width: "25%", // 4 cards per row
    padding: 4,
  },
});

export default Dashboard;
