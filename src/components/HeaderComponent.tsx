import { useTheme } from "@react-navigation/native";
import React from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TEXT_STYLES } from "../assets/fonts";

interface Props {
  onPress?: () => void;
  title: string;
}

const HeaderComponent = ({ title, onPress }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Platform.OS == "android" ? 10 : 70,
        paddingHorizontal: 15,
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onPress}>
          <AntDesign size={30} color={colors.text} name="arrowleft" />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 16,
            color: colors.text,
            fontFamily: "Montserrat-Bold",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
