import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/home";
import planetScreen from "./screen/planetScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Planetas"
          component={planetScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Galáxias" component = {  } />
        <Stack.Screen name="Buraco Negro" component = { TelaBuracoNegro } /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
};