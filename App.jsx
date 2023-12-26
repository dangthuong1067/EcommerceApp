import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Tab from './src/components/tab/tab.component';
import Home from './src/screens/home/home.component';
import Cart from './src/screens/cart/cart.component';
import FavoriteProduct from './src/screens/favorite-product/favorite-product.component';
import Profile from './src/screens/profile/profile.component';
import Category from './src/screens/category/category.component';
import Chat from './src/screens/chat/chat.component';
import Login from './src/screens/login/login.component';
import Register from './src/screens/register/register.component';
import ForgotPassword from './src/screens/forgot-password/forgot-password.component';
import store from './src/redux/store';
import { getTokenThunk } from './src/redux/auth/auth.slice';

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

function AppDrawerStack() {
  return (
    <DrawerStack.Navigator
      screenOptions={{ headerShown: false, swipeEnabled: false }}

      drawerContent={props => <DrawerView {...props} />}>
      <DrawerStack.Screen name='AppBottomStack' component={AppBottomStack} />
    </DrawerStack.Navigator>
  )
}

function DrawerView() {
  return (
    <View>
      <Text> Drawer View </Text>
    </View>
  )
}

function AppBottomStack() {
  return (
    <BottomTab.Navigator
      tabBar={props => <Tab {...props} />}
      screenOptions={{ headerShown: false, }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{ icon: 'home-outline', tabBarLabel: 'Trang chủ' }}
      />
      <BottomTab.Screen
        name='Category'
        component={Category}
        options={{ icon: 'copy-outline', tabBarLabel: 'Danh mục' }}
      />

      <BottomTab.Screen
        name='Cart'
        component={Cart}
        options={{ icon: 'cart-outline', tabBarLabel: 'Giỏ hàng' }}
      />
      <BottomTab.Screen
        name='Fovorite'
        component={FavoriteProduct}
        options={{ icon: 'heart-outline', tabBarLabel: 'Yêu thích' }}
      />
      <BottomTab.Screen
        name='Chat'
        component={Chat}
        options={{ icon: 'chatbox-outline' }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{ icon: 'person-outline' }}
      />
    </BottomTab.Navigator>
  )
}

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
  </Stack.Navigator>
)

const ProtectedStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
  </Stack.Navigator>
)

const Navigation = () => {
  const dispatch = useDispatch();
  const { token, loading } = useSelector(state => state.auth);
  let rendering = null;

  useEffect(() => {
    dispatch(getTokenThunk());
  }, [])

  if (loading) {
    rendering = <ActivityIndicator />;
  } else if (token === null) {
    rendering = <AuthStack />;
  }
  else {
    rendering = <ProtectedStack />;
  }
  return (
    <NavigationContainer>
      {rendering}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
