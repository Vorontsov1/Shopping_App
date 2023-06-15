import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { View } from "react-native";
import Icons from '@expo/vector-icons/MaterialIcons';




export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
}

const TabStack = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name="home"
              color={focused ? "royalblue" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Cart"
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name="shopping-cart"
              color={focused ? "royalblue" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Payment"
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name="account-balance-wallet"
              color={focused ? "royalblue" : "grey"}
              size={size}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={Example}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name="person"
              color={focused ? "royalblue" : "grey"}
              size={size}
            />
          ),
        }}
      />
    </TabStack.Navigator>
  );
}
export default TabsNavigator;


const Example = () => { 
    return <View />
}