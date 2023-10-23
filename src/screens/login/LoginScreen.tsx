import { useTheme } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  EmailInputText,
  LoginHeader,
  PasswordInputText,
} from "../../components/login";
import { AppContext } from "../../context/AppContext";
import { LoginProps, createAccount } from "../../model/QuisModel";
import { LoginStackParams } from "../../stack/LoginStackScreen";
import { ButtonComponent } from "../../components/global";
import { TEXT_STYLES } from "../../assets/fonts";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const h = Dimensions.get("window").height;

type Props = NativeStackScreenProps<LoginStackParams, "Login">;
const LoginScreen: React.FC<Props> = ({ route, navigation }) => {
  const { colors } = useTheme();
  const { loginStatus, setLoginStatus } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleLoginUser = async (data: any) => {
    // console.log(data);
    setLoading(true);
    try {
      await axios
        .post("https://reqres.in/api/login", data)
        .then(async (response) => {
          // console.log("response", response.data.token);
          await AsyncStorage.setItem("@token", response.data.token);
          setLoginStatus(true);
        });
    } catch (error) {
      Alert.alert("Email or Password wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }

    // await createAccount(userLogin);
    // setLoginStatus(true);
  };
  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
      }}
    >
      <LoginHeader />

      <View
        style={{
          marginTop: 10,
          paddingVertical: 15,
          paddingHorizontal: 20,
        }}
      >
        <EmailInputText
          style={{
            marginBottom: 20,
          }}
          value={userLogin.email}
          borderColor={colors.border}
          onChangeText={(e) =>
            setUserLogin({
              ...userLogin,
              email: e,
            })
          }
        />
        <PasswordInputText
          style={{
            marginBottom: 40,
          }}
          value={userLogin.password}
          borderColor={colors.border}
          onChangeText={(e) =>
            setUserLogin({
              ...userLogin,
              password: e,
            })
          }
        />

        <TouchableOpacity onPress={() => handleLoginUser(userLogin)}>
          <View
            style={{
              height: 60,
              width: "100%",
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: "#2B8FEB",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={TEXT_STYLES.text500}>{"Login"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
