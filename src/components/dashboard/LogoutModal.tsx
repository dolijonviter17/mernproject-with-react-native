import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TEXT_STYLES } from "../../assets/fonts";
const { height, width } = Dimensions.get("window");
const { colors } = useTheme();

export interface LogoutProps {
  isVisible: boolean;
  onBackdropPress: () => void | undefined;
  handleLogout: () => void;
  cancle: () => void;
}
const LogoutModal = ({
  isVisible,
  onBackdropPress,
  handleLogout,
  cancle,
}: LogoutProps) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View
        style={{
          width: "100%",
          minHeight: 170,
          backgroundColor: colors.background,
          borderRadius: 5,
          alignItems: "center",
          paddingHorizontal: 10,
          paddingTop: 15,
        }}
      >
        <Text
          style={[
            TEXT_STYLES.text600,
            {
              color: "#06122B",
              paddingBottom: 10,
            },
          ]}
        >
          Logout
        </Text>
        <Text style={TEXT_STYLES.text500}>
          {`When you want to use this app, \n you have to relogin, are you sure?`}
        </Text>
        {/* <FontAwesome5 size={30} name={category.icon} color={colors.text} /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            position: "absolute",
            bottom: 10,
          }}
        >
          <TouchableOpacity
            onPress={cancle}
            style={{
              width: 140,
              height: 40,
              backgroundColor: "#fff",
              borderRadius: 5,
              borderWidth: 1,

              borderColor: "#FF6169",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                TEXT_STYLES.text500,
                {
                  color: "#FF6169",
                },
              ]}
            >
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogout}
            style={{
              marginLeft: 10,
              right: 0,
              width: 140,
              height: 40,
              backgroundColor: colors.primary,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: colors.border,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                TEXT_STYLES.text500,
                {
                  color: "#fff",
                },
              ]}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  textLable: {
    fontSize: 12,
    fontFamily: "Montserrat-Medium",
    paddingBottom: 10,
    color: colors.text,
  },
  textValue: {
    fontSize: 12,
    fontFamily: "Montserrat-Bold",
    paddingBottom: 10,
    color: colors.text,
  },
});
