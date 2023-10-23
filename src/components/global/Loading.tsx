import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";

const Loading = () => {
  const { colors } = useTheme();
  return (
    <ActivityIndicator
      color={colors.text}
      style={{ alignSelf: "center" }}
      size={"large"}
    />
  );
};
export default Loading;
