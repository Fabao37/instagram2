import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import Feed from '../screens/Feed'
import AddPhoto from '../screens/AddPhoto';
import Mensages from '../screens/Mensages'
import Profile from '../screens/Profile'
import Login from '../screens/Login';
import Register from '../screens/Register';

export default function Navigation() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  const Screens = () => {

  return (
   
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false,
          headerShown:false}}>
        
        <Tab.Screen
          name='Feed'
          component={Feed}
          options={{
            tabBarIcon: () => (
              <SimpleLineIcons name='home' size={24} color='gray' />
            ),
          }}
        />

        <Tab.Screen
          name='AddPhoto '
          component={AddPhoto }
          options={{
            tabBarIcon: () => (
                <AntDesign name="camerao" size={24} color="gray" />
            ),
          }}
          />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: () => (
                <AntDesign name="user" size={24} color="gray" />
            ),
          }}
          />
      </Tab.Navigator>
 
  )

}

return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
    
        <Stack.Screen name='Bottom' component={Screens} />
         
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
       
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
)


}




