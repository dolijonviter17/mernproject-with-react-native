import React, { FC } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import Profile from "../../assets/images/jonvier.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";

// const Container = (Component: FC<any>) => (props: any) => {
//   return <Component {...props} />;
// };
// export default Container;

type ContainerProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
};
const Container: React.FC<ContainerProps> = ({ style, children, onPress }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        style,
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingTop: Platform.OS == "android" ? 20 : 70,
        },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: colors.text,
            fontFamily: "Montserrat-Bold",
          }}
        >
          {"Quiz App"}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Ionicons size={40} color={colors.text} name="person-circle" />

          {/* <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={Profile}
          /> */}
        </TouchableOpacity>
      </View>

      {children}
    </View>
  );
};

export default Container;
