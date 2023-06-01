import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Tira o header padrão
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <MaterialIcons name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}