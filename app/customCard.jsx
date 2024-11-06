import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import CustomCard from "../components/CustomCard";

const MainScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <CustomCard sessions="1,234" cpc="25" />
      <View style={styles.cardGap} />
      <CustomCard sessions="5,678" cpc="42" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardGap: {
    height: 16,
  },
});

export default MainScreen;
