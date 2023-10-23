import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { TEXT_STYLES } from "../../assets/fonts";

interface ContainerProps {
  onPress?: () => void;
  title: string;
}
const ButtonComponent = ({ onPress, title }: ContainerProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          height: 60,
          width: "90%",
          alignSelf: "center",
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: "#2B8FEB",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={TEXT_STYLES.text500}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
