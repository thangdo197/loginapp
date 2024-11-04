import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    // Gọi getCurrentTime ngay lập tức khi component mount
    getCurrentTime();

    // Tạo interval để cập nhật thời gian mỗi giây
    const timer = setInterval(getCurrentTime, 1000);

    // Cleanup function khi component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

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
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "black",
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 50,
    color: "#1e81b0",
  },
});

export default DigitalClock;
