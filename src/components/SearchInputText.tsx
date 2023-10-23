import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TEXT_STYLES } from "../assets/fonts";

interface TextInputProps {
  value: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  borderColor?: string;
  keyboardType?: KeyboardTypeOptions;
  style?: ViewStyle;
  handleSearch?: () => void;
}
const SearchInputText = ({
  value,
  onChangeText,
  borderColor = "#2B8FEB",
  keyboardType = "default",
  style,
  handleSearch,
}: TextInputProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: 10, ...style }}>
      <View
        style={{
          height: 60,
          borderRadius: 10,
          paddingLeft: 20,
          paddingRight: 15,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#2B8FEB",
          backgroundColor: "#ECF3FA",
        }}
      >
        <TextInput
          keyboardType={keyboardType}
          placeholder="Search"
          value={value}
          onChangeText={onChangeText}
          style={[
            TEXT_STYLES.text500,
            { flex: 1, color: "black", paddingLeft: 20 },
          ]}
        />
        <TouchableOpacity onPress={handleSearch}>
          <FontAwesome size={25} name={"search"} color="#2B8FEB" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInputText;
