import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Second } from "./screens/Second";
import { Hello } from "./screens/Hello";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Second" component={Second} />
        <Drawer.Screen name="hello" component={Hello} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
