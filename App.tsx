/**
 * Doli Jonviter Simbolon
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useMemo, useState } from "react";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import LoginStackScreen from "./src/stack/LoginStackScreen";
import RootStackScreen from "./src/stack/RootStackScreen";
import { store } from "./src/state";
// import { AppContext } from "./src/context/AppContext";
import { AppContext, ThemeContextType } from "./src/context/AppContext";
import DarkTheme from "./src/theme/DarkTheme";
import DefaultTheme from "./src/theme/DefaultTheme";
import { checkAccoutStorage, checkTokenLogin } from "./src/model/QuisModel";
// import ThemeContext from "./src/context/ThemeContext";

const RouterNavigation = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const appContext = useMemo<ThemeContextType>(() => {
    return {
      loginStatus,
      isDarkTheme,
      setLoginStatus,
      setIsDarkTheme,
    };
  }, [isDarkTheme, setIsDarkTheme, loginStatus, setLoginStatus]);

  const checkLoginStatus = async () => {
    const checkLogin = await checkTokenLogin();
    console.log("checkLogin", checkLogin);

    if (checkLogin !== null) {
      setLoginStatus(true);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <AppContext.Provider value={appContext}>
        {loginStatus ? <RootStackScreen /> : <LoginStackScreen />}
      </AppContext.Provider>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <RouterNavigation />
    </Provider>
  );
};

export default App;
