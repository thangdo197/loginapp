import { Pressable, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from "../constants/theme";
import Icon from "../assets/icons";
import { StatusBar } from "expo-status-bar";
import BackButton from "../components/backButton";
import { useRouter } from "expo-router";
import { wp, hp } from "../helpers/common";
import Button from "../components/Button";
import SweetAlert from "react-native-sweet-alert";

const SignUp = () => {
  const router = useRouter();
  const emailRef = useRef("");
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);
  const onSubmit = async () => {
    if (!emailRef || !passwordRef) {
      SweetAlert.alert("Sign up", "please fill all the fields");
      return;
    }
  };
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router}></BackButton>
        <View>
          <Text style={[styles.welcomeText, { color: "blue" }]}>Let's</Text>
          <Text style={styles.welcomeText}>Started</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(2), color: theme.colors.text }}>
            Please fill the details to create an account!
          </Text>
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your username"
            onChangeText={(value) => (nameRef.current = value)}
          />
          <Input
            icon={<Icon name="email" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={(value) => (passwordRef.current = value)}
          />

          <Text style={styles.forgotPwd}>Forgot password?</Text>
          <Button title={"Sign up"} loading={loading} onPress={onSubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account? Please press the login button
          </Text>
          <Pressable onPress={() => router.push("login")}>
            <Text
              style={[
                styles.footerText,
                {
                  color: theme.colors.roseLight,
                  fontWeight: theme.fonts.semibold,
                },
              ]}
            >
              Log in
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },

  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },

  form: {
    gap: 25,
  },

  forgotPwd: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  footerText: {
    textAlign: "center",
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
});
