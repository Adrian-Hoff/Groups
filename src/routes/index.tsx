// react
import { View } from "react-native";

//react-naviation
import { NavigationContainer } from "@react-navigation/native";

//routes
import AppRoutes from "./app.routes";
import themes from "@themes/index";

export default function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: themes.COLORS.GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
