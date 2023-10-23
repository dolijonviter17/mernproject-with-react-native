import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { TEXT_STYLES } from "../assets/fonts";
import { IMAGES_ASSETS } from "../assets/images";
const { height, width } = Dimensions.get("window");

export interface Props {
  onPressLogout?: () => void;
}
const DashboardHeader = ({ onPressLogout }: Props) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        paddingTop: Platform.OS == "android" ? 20 : 70,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        paddingBottom: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text
          style={[
            TEXT_STYLES.text500,
            {
              color: "#06122B",
            },
          ]}
        >
          Goods
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              marginRight: 15,
            }}
            source={IMAGES_ASSETS.userprofile}
          />
          <View>
            <Text
              style={[
                TEXT_STYLES.text500Bold,
                {
                  color: "#06122B",
                  fontSize: 14,
                  paddingBottom: 5,
                  fontWeight: "700",
                },
              ]}
            >
              Jonviter Simbolon
            </Text>
            <Text
              style={[
                TEXT_STYLES.text500,
                {
                  fontSize: 12,
                  color: "#06122B",
                },
              ]}
            >
              dolijonviter17@gmail.com
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={onPressLogout}>
          <LinearGradient
            colors={["#7DC1FF", "#278CEA"]}
            //   start={{ x: 0, y: 1 }}
            start={{ x: 0.7, y: 0 }}
            //   end={{ x: 1, y: 0 }}
            style={{
              height: 45,
              width: 100,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                TEXT_STYLES.text500,
                {
                  fontSize: 14,
                },
              ]}
            >
              Logout
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;
