import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import ChefIcon from '../assets/chef-icon.png';
import OfferIcon from '../assets/offer-icon.png';
import DevIcon from '../assets/dev-icon.png';
import { TabBarButton } from '../components/TabBarButton';
import { Typography } from '../components/Typography';
import { Offerings } from "../screens/Offerings";
import { Chefs } from '../screens/Chefs';
import { Dev } from '../screens/Dev';
import { OfferDetails } from '../screens/OfferDetails';
import type { RoutesChefStack, RoutesOfferStack } from './types';
import { ChefDetails } from '../screens/ChefDetails';

const { Navigator, Screen } = createBottomTabNavigator();
const OfferStack = createNativeStackNavigator<RoutesOfferStack>();
const ChefStack = createNativeStackNavigator<RoutesChefStack>();

export const AppRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#FDFFAB",
      tabBarInactiveTintColor: "#f1f1f1"
    }}
    initialRouteName="offerings"
  >
    <Screen
      name="chefs"
      component={ChefsNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <View  style={{ marginTop: 40, alignItems: "center" }} >
            <Image source={ChefIcon} style={{ height: 50 }} resizeMode="contain" />
            <Typography variant="tertiary" color={color} fontSize={16}>Chefs</Typography>
          </View>
          
        ),
        tabBarButton: (props) => (<TabBarButton zIndex={3} {...props} />),        
      }}
    />
    <Screen
      name="offerings"
      component={OfferNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <View  style={{ marginTop: 35, alignItems: "center" }} >
            <Image source={OfferIcon} style={{ height: 50 }} resizeMode="contain" />
            <Typography variant="tertiary" color={color} fontSize={16}>Offerings</Typography>
          </View>
        ),
        tabBarButton: (props) => (<TabBarButton zIndex={2} top={-17} {...props} isMiddle />),

      }}
    />
    <Screen
      name="dev"
      component={Dev}
      options={{
        tabBarIcon: ({ color }) => (
          <View  style={{ marginTop: 43, alignItems: "center" }} >
            <Image source={DevIcon} style={{ height: 45 }} resizeMode="contain" />
            <Typography variant="tertiary" color={color} fontSize={16}>Dev</Typography>
          </View>
          
        ),
        tabBarButton: (props) => (<TabBarButton zIndex={3} {...props} />),
      }}
    />
  </Navigator>
);

const OfferNavigator = () => (
  <OfferStack.Navigator screenOptions={{
    headerShown: false,  
  }}>
    <OfferStack.Screen
      name="offeringsHome"
      component={Offerings}
    />
    <OfferStack.Screen
      name="offerDetails"
      component={OfferDetails}
    />
  </OfferStack.Navigator>
);

const ChefsNavigator = () => (
  <ChefStack.Navigator screenOptions={{
    headerShown: false,  
  }}>
    <ChefStack.Screen
      name="chefsHome"
      component={Chefs}
    />
    <ChefStack.Screen
      name="chefDetails"
      component={ChefDetails}
    />
  </ChefStack.Navigator>
);
