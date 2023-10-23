import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { LoginStackParams } from "../../stack/LoginStackScreen";


type Props = NativeStackScreenProps<LoginStackParams, "Register">
const RegisterScreen = ({route, navigation} : Props) => {
    return (
        <View>
            <Text>
            RegisterScreen
            </Text>
        </View>
    )
}

export default RegisterScreen