import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "./home";
import Email from "./email";
import Lock from "./lock";
import ArrowLeft from "./arrow";
import { theme } from "../../constants/theme";

const icons = { home: Home, arrowLeft: ArrowLeft, email: Email, lock: Lock };
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
