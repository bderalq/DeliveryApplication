import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./src/context/UserContext";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { getToken } from "./src/api/storage";


export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const queryClient = new QueryClient();

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
          {isAuth ? <MainNavigator /> : <AuthNavigator />}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    paddingTop: 90,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
});
