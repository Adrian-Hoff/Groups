// react
import { ActivityIndicator } from "react-native";

//themes
import themes from "@themes/index";

//screens
import Groups from "./src/screens/groups";

//styled
import { ThemeProvider } from "styled-components";

//expo-font
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
