import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyHabitScreen, TheoryScreen, EditHabitScreen } from "./screens/index";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="My Habit" component={MyHabitScreen} />
        <Tab.Screen name="Edit Habit" component={EditHabitScreen} />
        <Tab.Screen name="Theory" component={TheoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
