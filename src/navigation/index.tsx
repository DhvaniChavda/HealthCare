import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BackHandler, ToastAndroid} from 'react-native';
import {STRING} from 'src/utils';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import CustomTabBar from 'src/navigation/customTabBar';
import Splash from 'src/screens/onboarding/splash';
import Home from 'src/screens/tabs/home';
import Reports from 'src/screens/tabs/reports';
import Notification from 'src/screens/tabs/notification';
import Profile from 'src/screens/tabs/profile';
import Intro from 'src/screens/onboarding/intro';
import Welcome from 'src/screens/onboarding/welcome';
import Register from 'src/screens/onboarding/register';
import Login from 'src/screens/onboarding/login';
import TopDoctors from 'src/screens/tabs/home/topDoctors';
import Details from 'src/screens/tabs/home/topDoctors/details';
import Pharmacy from 'src/screens/tabs/home/pharmacy';
import PharmacyDetail from 'src/screens/tabs/home/pharmacy/pharmacyDetail';
import MyCart from 'src/screens/tabs/home/myCart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

let backPressed = 0;
function handleBackButton() {
  if (backPressed > 0) {
    BackHandler.exitApp();
    backPressed = 0;
  } else {
    backPressed++;
    ToastAndroid.show(STRING.press_again, ToastAndroid.SHORT);
    setTimeout(() => {
      backPressed = 0;
    }, 1000);
    return true;
  }
}
export default (): JSX.Element | null => {
  function TabComponent() {
    return (
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        backBehavior={'none'}
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name={Routes.Home}
          component={Home}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Reports}
          component={Reports}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Notification}
          component={Notification}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
        <Tab.Screen
          name={Routes.Profile}
          component={Profile}
          listeners={{
            focus: () =>
              BackHandler.addEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
            blur: () =>
              BackHandler.removeEventListener(
                'hardwareBackPress',
                handleBackButton,
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 200,
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.Intro} component={Intro} />
        <Stack.Screen name={Routes.Welcome} component={Welcome} />
        <Stack.Screen name={Routes.Register} component={Register} />
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Dashboard} component={TabComponent} />
        <Stack.Screen name={Routes.TopDoctors} component={TopDoctors} />
        <Stack.Screen name={Routes.TopDoctorsDetail} component={Details} />
        <Stack.Screen name={Routes.Pharmacy} component={Pharmacy} />
        <Stack.Screen name={Routes.PharmacyDetail} component={PharmacyDetail} />
        <Stack.Screen name={Routes.MyCart} component={MyCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
