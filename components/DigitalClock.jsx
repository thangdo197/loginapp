import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = "pm";

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (hour > 12) {
      hour = hour - 12;
    }

    if (hour == 0) {
      hour = 12;
    }

    if (new Date().getHours() < 12) {
      am_pm = "am";
    }

    setCurrentTime(hour + ":" + minutes + ":" + seconds + " " + am_pm);
  };

  useEffect(() => {
    getCurrentTime();

    const timer = setInterval(getCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.timeText}>{currentTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: theme.fonts.bold,
    textAlign: "center",
    margin: 10,
    color: "black",
    fontFamily: "BebasNeue-Regular",
  },
  timeText: {
    color: "#e1e0e6",
    fontSize: hp(4.8),
    textAlign: "center",
    fontWeight: theme.fonts.extrabold,
  },
});

export default DigitalClock;
