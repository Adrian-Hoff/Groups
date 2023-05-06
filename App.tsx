// react
import { StatusBar } from "react-native";

//routes
import Routes from "@routes/index";

//themes
import themes from "@themes/index";

//styled
import { ThemeProvider } from "styled-components";

//expo-font
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//components
import LoadingComponent from "@components/LoadingComponent";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={themes}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={"transparent"}
        translucent
      />
      {fontsLoaded ? <Routes /> : <LoadingComponent />}
    </ThemeProvider>
  );
}
