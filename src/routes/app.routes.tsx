//react
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Sreens
import GroupsScreen from "@screens/GroupsScreen";
import NewGroupScreen from "@screens/NewGroupScreen";
import PlayersScreen from "@screens/PlayersScreen";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="groupsScreen" component={GroupsScreen} />
      <Stack.Screen name="newGroupScreen" component={NewGroupScreen} />
      <Stack.Screen name="playersScreen" component={PlayersScreen} />
    </Stack.Navigator>
  );
}
