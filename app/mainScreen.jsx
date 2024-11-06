import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import CustomCard from "../components/CustomCard";

const MainScreen = () => {
  const cardData = [
    {
      type: "custom",
      data: [
        { sessions: "1,234", cpc: "25" },
        { sessions: "5,678", cpc: "42" },
      ],
    },
    {
      type: "stat",
      data: [
        { value: "789", label: "Users" },
        { value: "456", label: "Active Users" },
      ],
    },
    {
      type: "analytics",
      data: [
        { views: 1000, growth: "+15%" },
        { views: 2000, growth: "+25%" },
      ],
    },
    {
      type: "metrics",
      data: [
        { total: "10K", rate: "89%" },
        { total: "15K", rate: "92%" },
      ],
    },
  ];

  const renderCard = (type, data) => {
    switch (type) {
      case "custom":
        return <CustomCard sessions={data.sessions} cpc={data.cpc} />;
      case "stat":
        return <StatCard value={data.value} label={data.label} />;
      case "analytics":
        return <AnalyticsCard data={data} />;
      case "metrics":
        return <MetricsCard metrics={data} />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {cardData.map((group, groupIndex) => (
        <View key={groupIndex} style={styles.cardGroup}>
          {group.data.map((item, index) => (
            <React.Fragment key={index}>
              {renderCard(group.type, item)}
              {index < group.data.length - 1 && <View style={styles.cardGap} />}
            </React.Fragment>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardGroup: {
    marginBottom: 24,
  },
  cardGap: {
    height: 16,
  },
});

export default MainScreen;
