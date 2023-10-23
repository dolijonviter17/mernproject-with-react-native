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
import { TEXT_STYLES } from "../../assets/fonts";

interface TextInputProps {
  value: string | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  borderColor?: string;
  keyboardType?: KeyboardTypeOptions;
  style?: ViewStyle;
}
const PasswordInputText = ({
  value,
  onChangeText,
  borderColor = "#2B8FEB",
  keyboardType = "default",
  style,
}: TextInputProps) => {
  const { colors } = useTheme();

  const [secureTextEntry, setSecureTextEntry] = useState(true);

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
        }}
      >
        <MaterialCommunityIcons size={25} name="lock-outline" color="#818896" />
        <TextInput
          keyboardType={keyboardType}
          placeholder="Password"
          value={value}
          onChangeText={onChangeText}
          style={[
            TEXT_STYLES.text500,
            { flex: 1, color: "black", paddingLeft: 20 },
          ]}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <MaterialCommunityIcons
            size={25}
            name={secureTextEntry ? "eye-off" : "eye"}
            color="#2B8FEB"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInputText;
