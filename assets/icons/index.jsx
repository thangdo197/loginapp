import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./home";
import User from "./user";
import Email from "./email";
import Lock from "./lock";
import Contact from "./contact";
import Chart from "./chart";
import Database from "./database";
import ArrowLeft from "./arrow";
import Message from "./message";
import { theme } from "../../constants/theme";
import Logout from "./logout";

const icons = {
  message: Message,
  home: Home,
  arrowLeft: ArrowLeft,
  email: Email,
  lock: Lock,
  user: User,
  database: Database,
  chart: Chart,
  contact: Contact,
  logout: Logout,
};
const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent
      height={props.size || 24}
      width={props.size || 24}
      strokeWidth={props.strokeWidth || 1.9}
      color={theme.colors.textLight}
      {...props}
    />
  );
};

export default Icon;
