import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  KeyboardTypeOptions,
  Text,
  TextInput,
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
const EmailInputText = ({
  value,
  onChangeText,
  borderColor = "#2B8FEB",
  keyboardType = "default",
  style,
}: TextInputProps) => {
  const { colors } = useTheme();

  return (
    <View style={{ marginBottom: 10, ...style }}>
      <View
        style={{
          height: 60,
          borderRadius: 10,
          paddingLeft: 20,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#2B8FEB",
        }}
      >
        <MaterialCommunityIcons
          size={25}
          name="email-outline"
          color="#818896"
        />
        <TextInput
          keyboardType={keyboardType}
          placeholder="Email"
          value={value}
          onChangeText={onChangeText}
          style={[
            TEXT_STYLES.text500,
            { flex: 1, color: "#818896", paddingLeft: 20 },
          ]}
        />
      </View>
    </View>
  );
};

export default EmailInputText;
