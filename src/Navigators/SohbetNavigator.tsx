import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SohbetScreen from "../screens/SohbetScreen";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

function SohbetNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={SohbetScreen}
        options={{
          headerStyle: { backgroundColor: "#F1F1F1" },
          headerTitle: () => (
            <Text style={{ fontSize: 16 }}>Sohbet - Hepsi</Text>
          ),
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center", marginRight: 18 }}>
              <MaterialIcons style={{ marginRight: "5%" }}
                name="settings-input-component"
                size={24}
                color="gray" />

              <Entypo name="dots-three-horizontal" size={24} color="#969696" />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default SohbetNavigator;