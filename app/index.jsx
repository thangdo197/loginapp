import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";
import Button from "../components/Button";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Icon from "../assets/icons";

const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Image
          style={styles.welcomeImage}
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Hello</Text>
          <Text style={styles.punchline}>MTG</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => router.push("chart")} style={styles.icon}>
            <Icon name="chart" size={70} strokeWidth={1.6} />
          </Pressable>
          <Pressable onPress={() => router.push("chart")} style={styles.icon}>
            <Icon name="logout" size={70} strokeWidth={1.6} />
          </Pressable>
          <Pressable
            onPress={() => router.push("database")}
            style={styles.icon}
          >
            <Icon name="database" size={70} strokeWidth={1.6} />
          </Pressable>
          <Pressable
            onPress={() => router.push("contactUs")}
            style={styles.icon}
          >
            <Icon name="contact" size={70} strokeWidth={1.6} />
          </Pressable>
        </View>

        <View style={styles.footer}>
          <Button
            title="Getting Started"
            buttonStyle={{ marginHorizontal: wp(3) }}
            onPress={() => router.push("signUp")}
          ></Button>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.loginText}>Already have an account!</Text>
            <Pressable onPress={() => router.push("login")}>
              <Text
                style={[
                  styles.loginText,
                  {
                    color: theme.colors.primaryDark,
                    fontWeight: theme.fonts.semibold,
                  },
                ]}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: wp(10),
  },

  welcomeImage: {
    height: hp(30),
    width: wp(100),
    alignSelf: "center",
  },

  title: {
    color: theme.colors.dark,
    fontSize: hp(4),
    textAlign: "center",
    fontWeight: theme.fonts.extrabold,
  },

  punchline: {
    textAlign: "center",
    paddingHorizontal: wp(10),
    fontSize: hp(2),
    color: theme.colors.rose,
  },

  footer: {
    gap: 30,
    width: "100%",
  },

  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 5,
  },

  loginText: {
    textAlign: "center",
    alignItems: "center",
    color: theme.colors.text,
    fontStyle: hp(1.6),
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginHorizontal: 25,
  },
});
