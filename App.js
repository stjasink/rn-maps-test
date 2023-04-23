import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home Screen'}}
        />
        <Stack.Screen
          name="MyMap"
          component={MyMap}
          options={{title: 'My Map'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}) {
  return (
    <View>
      <Text>Welcome to the home screen</Text>
      <Pressable onPress={() => navigation.navigate('MyMap')}>
        <Text>Press here for the map</Text>
      </Pressable>
    </View>
  );
}

function MyMap() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={mapRegion}
        showsBuildings={false}
        loadingEnabled={true}
        showsUserLocation={true}
        userLocationPriority={'high'}
        showsMyLocationButton={false}
        minZoomLevel={16}
        maxZoomLevel={22}>
        <MyMapMarkers />
      </MapView>
    </View>
  );
}

function MyMapMarkers() {
  return markerLocations.map((location, markerNum) => (
    <Marker
      key={'marker' + markerNum}
      coordinate={{latitude: location.lat, longitude: location.lng}}
      zIndex={markerNum}
      pinColor={'green'}
      trackViewChanges={false}
    />
  ));
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapRegion = {
  latitude: 51.5827395,
  latitudeDelta: 0.0066319,
  longitude: -0.149409,
  longitudeDelta: 0.0019558,
};

const markerLocations = [
  {
    lat: 51.585737,
    lng: -0.150214,
  },
  {
    lat: 51.585365,
    lng: -0.150182,
  },
];

export default App;
