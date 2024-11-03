import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
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

const ContactUs = () => {
  const [number, onChangeNumber] = React.useState("");
  const router = useRouter();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    // Handle your form submission logic here
    // For example, send the collected data to your server
    console.log("Name:", nameRef.current);
    console.log("Email:", emailRef.current);
    console.log("Message:", messageRef.current);
    setLoading(false);
  };

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Pressable onPress={() => router.back()}>
          <Text style={styles.backButton}>Back</Text>
        </Pressable>
        <View>
          <Text style={[styles.welcomeText, { color: "blue" }]}>
            Get in Touch
          </Text>
          <Text style={styles.welcomeText}>We'd love to hear from you!</Text>
        </View>

        <View style={styles.form}>
          <Text style={{ fontSize: hp(2), color: theme.colors.text }}>
            Please fill out the form below
          </Text>
          <Input
            icon={<Icon name="user" size={26} strokeWidth={1.6} />}
            placeholder="Enter your name"
            onChangeText={(value) => (nameRef.current = value)}
          />
          <Input
            icon={<Icon name="email" size={26} strokeWidth={1.6} />}
            placeholder="Enter your email"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            multiline
            value={number}
            placeholder=""
            keyboardType="numeric"
          />

          <Button title={"Send Message"} loading={loading} onPress={onSubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Need more help?</Text>
          <Pressable onPress={() => router.push("help")}>
            <Text
              style={[styles.footerText, { color: theme.colors.roseLight }]}
            >
              Visit our Help Center
            </Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "white",
    borderTopColor: "white",
    borderRightColor: "white",
    borderBottomColor: "white",
    height: 100, // Set fixed height for the message box
    textAlignVertical: "top", // Aligns text to the top of the input
    marginTop: 10, // Optional: Add margin for spacing
    borderWidth: 10, // Removes border
    backgroundColor: "white",
  },
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
  messageInput: {
    height: 100, // Set fixed height for the message box
    textAlignVertical: "top", // Aligns text to the top of the input
    marginTop: 10,
    borderWidth: 0,
    backgroundColor: "transparent", // Optional: Set background color if needed
  },

  footerText: {
    textAlign: "center",
    fontSize: hp(1.6),
    color: theme.colors.text,
  },
});

export default ContactUs;
