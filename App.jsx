import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
// import {
//   useFonts,
//   Inter_100Thin,
//   Inter_200ExtraLight,
//   Inter_300Light,
//   Inter_400Regular,
//   Inter_500Medium,
//   Inter_600SemiBold,
//   Inter_700Bold,
//   Inter_800ExtraBold,
//   Inter_900Black,
// } from "@expo-google-fonts/inter";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Home from "./pages/home";
import Stores from "./pages/stores";
import theme from "./theme";
import Store from "./components/store";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

const StoresPage = (data) => (props) => <Stores data={data} {...props} />;
const TheCommonsPage = (data) => (props) => <Store storeName="The Commons" address="390 S 8th St" people={data.count} status={data.level} {...props} />;
const FoodPantryPage = (data) => (props) => <Store storeName="Food Pantry" address="211 S 9th St" people={data.count} status={data.level} {...props} />;

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   Inter_100Thin,
  //   Inter_200ExtraLight,
  //   Inter_300Light,
  //   Inter_400Regular,
  //   Inter_500Medium,
  //   Inter_600SemiBold,
  //   Inter_700Bold,
  //   Inter_800ExtraBold,
  //   Inter_900Black,
  // });

  const [data, setData] = useState(null);

  const onLayoutRootView = useCallback(async () => {
    if (data) await SplashScreen.hideAsync();
  }, [data]);

  useEffect(() => {
    fetch("http://localhost:8000/api/data/mobile")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  });

  const commons = useMemo(() => data && data?.find((store) => store.location === "DINING_HALL"), [data]);
  const pantry = useMemo(() => data && data?.find((store) => store.location === "FOOD_PANTRY"), [data]);

  const pages = useMemo(() => ({
    Home,
    Stores: StoresPage({ commons, pantry }),
    TheCommons: TheCommonsPage(commons),
    FoodPantry: FoodPantryPage(pantry),
  }), [data]);

  const options = { headerShown: false };

  if (!data) return null;

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {Object.entries(pages).map(([name, component]) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={options}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </View>
  );
}
