import { useTheme } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
enum StatusType {
  succes = "success",
  error = "error",
}

interface MessageProps {
  message: string;
  status: StatusType.succes | StatusType.error | string;
  visible: boolean;
}

const MessageComponent: React.FC<MessageProps> = ({
  message,
  status = "success",
  visible,
}) => {
  useEffect(() => {
    if (visible) {
      onSubmit();
    }
  }, [visible]);

  const onBgMsg = (): string => {
    var color: string = "#007AFF";
    if (status === "error") {
      color = "#FF3B30";
    }
    return color;
  };

  const onIcons = (): string => {
    var icons: string = "checkcircle";
    if (status === "error") {
      icons = "closecircle";
    }
    return icons;
  };

  const { colors } = useTheme();
  const scale = useSharedValue(0);

  const popupStyles = useAnimatedStyle(() => ({
    transform: [{ scale: Math.max(scale.value, 0) }],
  }));

  const onSubmit = useCallback(() => {
    visible = false;
    scale.value = 0;
    scale.value = withSpring(1, undefined, (isFinish) => {
      if (isFinish) {
        scale.value = withDelay(600, withSpring(0));
        console.log(isFinish);
      }
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.message,
        {
          backgroundColor: onBgMsg(),
        },
        popupStyles,
      ]}
    >
      <Text>{message}</Text>
      <AntDesign size={25} name={onIcons()} color={colors.background} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  message: {
    height: 45,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderRadius: 5,
    zIndex: 1,
  },
});

export default MessageComponent;
