import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  title: string;
};
const ButtonComponent: React.FC<ContainerProps> = ({
  style,
  onPress,
  title,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style,
        {
          height: 50,
          width: "90%",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 10,
          //   backgroundColor: colors.border,
          backgroundColor: colors.primary,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 16,
          marginTop: 10,
          color: colors.text,
          textAlign: "center",
          fontFamily: "Montserrat-Bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
