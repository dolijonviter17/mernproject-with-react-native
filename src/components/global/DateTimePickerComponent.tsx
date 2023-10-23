import React, { useState } from "react";
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import DatePicker from "react-native-date-picker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { getDateTime } from "../../utils/Utilities";

interface DateProps {
  style?: StyleProp<ViewStyle>;
  selectedDate: (date: string) => void;
  borderColor?: string;
  label?: string | undefined;
}
const DateTimePickerComponent = ({
  style,
  selectedDate,
  borderColor = "#D8D8D8",
  label,
}: DateProps) => {
  const { colors } = useTheme();

  const [dateActivity, setDateActivity] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);
  const [value, setValue] = useState<string>("Select Date Activity");

  const handleSelectDate = (state: Date) => {
    setDateOpen(false);
    setDateActivity(state);
    var reconvert = getDateTime(state);
    setValue(reconvert);
    selectedDate(reconvert);
  };

  return (
    <>
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Montserrat-Medium",
            color: colors.text,
            marginBottom: 7,
          }}
        >
          {label}:{" "}
        </Text>
        <TouchableOpacity onPress={() => setDateOpen(true)}>
          <View
            style={[
              style,
              {
                height: 60,
                borderRadius: 5,
                paddingHorizontal: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderWidth: 1,
                borderColor: borderColor,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat-Medium",
                color: colors.text,
                marginLeft: 10,
              }}
            >
              {value}
            </Text>
            <FontAwesome size={15} name="calendar" color={colors.border} />
          </View>
        </TouchableOpacity>
        <DatePicker
          modal
          open={dateOpen}
          date={dateActivity}
          onConfirm={(date) => handleSelectDate(date)}
          onCancel={() => {
            setDateOpen(false);
          }}
        />
      </View>
    </>
  );
};

export default DateTimePickerComponent;
