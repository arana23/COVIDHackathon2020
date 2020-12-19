import React from 'react'
import { 
   StyleSheet,
   Views,
   Text
} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import MapScreen from '../screens/MapScreen'
import PolygonCreator from '../screens/PolygonCreator'

   const MainNavigator = createStackNavigator(
      {
         MapScreen: {
            screen: MapScreen
         }
         
      }
   )

export default createAppContainer(MainNavigator)
