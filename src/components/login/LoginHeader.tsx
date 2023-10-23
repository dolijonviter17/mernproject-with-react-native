import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { TEXT_STYLES } from "../../assets/fonts";
import { IMAGES_ASSETS } from "../../assets/images";
const h = Dimensions.get("window").height;

const LoginHeader = () => {
  const { colors } = useTheme();

  return (
    <ImageBackground
      style={{
        height: 0.5 * h,
        overflow: "hidden",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingTop: 70,
      }}
      source={IMAGES_ASSETS.loginlogo}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text
          style={[
            TEXT_STYLES.text700,
            {
              paddingVertical: 10,
              color: "#fff",
            },
          ]}
        >
          Login Reqres Api
        </Text>
        <Text
          style={[
            TEXT_STYLES.text500,
            {
              color: "#fff",
              textAlign: "center",
            },
          ]}
        >
          {`You’ve been missed, \n Please login`}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginHeader;
