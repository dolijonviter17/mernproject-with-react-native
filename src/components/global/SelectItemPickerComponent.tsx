import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const TypeQuiz: string[] = ["easy", "medium", "hard"];

interface PickerProps {
  onPress?: () => void;
  onSelect: (selectedItem: any, index: number) => void;
  backgroundColor?: string;
  label?: string;
  defaultButtonText?: string;
}
const SelectItemPickerComponent: React.FC<PickerProps> = ({
  onSelect,
  backgroundColor = "#D8D8D8",
  label,
  defaultButtonText = "Select Difficulty",
}) => {
  const { colors } = useTheme();
  const [countries, setCountries] = useState<string[]>(TypeQuiz);

  return (
    <View
      style={{
        marginBottom: 10,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          marginBottom: 7,
          fontFamily: "Montserrat-Medium",
          color: colors.text,
        }}
      >
        {label} :{" "}
      </Text>
      <SelectDropdown
        defaultButtonText={defaultButtonText}
        data={countries}
        buttonStyle={{
          width: "98%",
          backgroundColor: backgroundColor,
          borderRadius: 10,
          height: 50,
        }}
        buttonTextStyle={{
          fontSize: 14,
          textAlign: "left",
          color: colors.text,
        }}
        rowTextStyle={{
          fontSize: 14,
          textAlign: "left",
          marginLeft: 10,
          color: colors.text,
        }}
        // rowStyle={{alignItems : ''}}
        dropdownStyle={{
          backgroundColor: colors.border,
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,

          // height: 50,
        }}
        onSelect={onSelect}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={colors.background}
              size={18}
            />
          );
        }}
        dropdownIconPosition="right"
        buttonTextAfterSelection={(selectedItem, index) => {
          // console.log("selectedItemselectedItem", selectedItem);
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default SelectItemPickerComponent;
