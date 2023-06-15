import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {NavigatorScreenProps} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabstackNavigator, { TabsStackParamList } from './TabsNavigator';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';



export type RootStackParamList = {
  TabStack: NavigatorScreenProps<TabsStackParamList>;
  Details: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabstackNavigator}  options={{headerShown: false}} />
          <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
