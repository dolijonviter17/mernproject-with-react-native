import { useTheme } from "@react-navigation/native";
import React from "react";
import { Dimensions, Text, TextInput, View } from "react-native";

const { height, width } = Dimensions.get("window");

interface TextAreaProps {
  borderColor?: string;
  onChangeText?: ((text: string) => void) | undefined;
  value: string | undefined;
  placeholder?: string | undefined;
}
const TextAreaComponent: React.FC<TextAreaProps> = ({
  value,
  onChangeText,
  borderColor = "#D8D8D8",
  placeholder = "write a summary",
}) => {
  const { colors } = useTheme();

  return (
    <View>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Montserrat-Medium",
          color: colors.text,
          marginBottom: 7,
        }}
      >
        Summary :{" "}
      </Text>
      <View
        style={{
          height: 200,
          width: "100%",
          borderRadius: 5,
          paddingHorizontal: 10,
          flexDirection: "row",
          // alignItems: "center",
          borderWidth: 1,
          borderColor: borderColor,
        }}
      >
        <TextInput
          editable
          multiline
          numberOfLines={40}
          maxLength={1000}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={{ flex: 1, padding: 10, color: colors.text }}
        />
      </View>
    </View>
  );
};

export default TextAreaComponent;
