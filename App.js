import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screen/Home.jsx";
import PlanetScreen from "./screen/PlanetScreen.jsx";
import PlanetScreen from "./screen/Galaxy.jsx";
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
          component={PlanetScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Galáxias" 
        component = { GalaxyScreen } 
        options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Buraco Negro" component = { TelaBuracoNegro } /> */} 
      </Stack.Navigator>
    </NavigationContainer>
  )
};