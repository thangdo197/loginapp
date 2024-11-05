import React from "react";
import { View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const SessionsCard = ({ data }) => {
  return (
    <View style={{ padding: 16, backgroundColor: "#222" }}>
      <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
        Sessions
      </Text>
      <Text style={{ color: "white" }}>26.9k</Text>
      <Text style={{ color: "white" }}>past 7 days</Text>

      <LineChart
        data={{
          labels: ["14 Nov", "21 Nov", "28 Nov", "5 Dec"],
          datasets: [
            {
              data: data.sessions,
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Màu xanh dương
            },
            {
              data: data.previousSessions,
              strokeWidth: 2,
              color: (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // Màu vàng
            },
          ],
        }}
        width={300}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        chartConfig={{
          backgroundColor: "#222",
          backgroundGradientFrom: "#222",
          backgroundGradientTo: "#222",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

export default SessionsCard;
