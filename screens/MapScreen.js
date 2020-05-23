import React, { useEffect} from 'react'
import { 
   StyleSheet,
   View,
   Text,
   Dimensions
} from 'react-native'
import MapView from 'react-native-maps'

const MapScreen = (props) => {
   return (
      <View styles={styles.screen}>
         <MapView
            style={styles.map} 
            showsUserLocation={true}
            followsUserLocation={true}
         />
         
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow'
   },
   map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
   }
})

export default MapScreen
