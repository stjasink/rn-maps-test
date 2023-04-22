import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

function App() {
  return <MyMap useCustomMarkers={true} />;
}

function MyMap({useCustomMarkers}) {
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
        <MyMapMarkers useCustomMarkers={useCustomMarkers} />
      </MapView>
    </View>
  );
}

function MyMapMarkers({useCustomMarkers}) {
  return markerLocations.map((location, markerNum) =>
    useCustomMarkers ? <Marker
        key={'marker' + markerNum}
        coordinate={{latitude: location.lat, longitude: location.lng}}
        zIndex={markerNum}
        trackViewChanges={false}>
        <View style={styles.markerContainer}>
          <View style={styles.marker}>
            <Text style={styles.markerText}>{markerNum}</Text>
          </View>
          <View style={styles.markerPin} />
        </View>
      </Marker> :
      <Marker
        key={'marker' + markerNum}
        coordinate={{latitude: location.lat, longitude: location.lng}}
        zIndex={markerNum}
        pinColor={'green'}
        trackViewChanges={false}
      />
  );
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
  markerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  marker: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    borderWidth: 3,
    borderColor: 'green',
  },
  markerPin: {
    width: 3,
    height: 5,
    backgroundColor: 'green',
  },
  markerText: {
    fontWeight: 'bold',
    color: 'black',
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
  {
    lat: 51.584366,
    lng: -0.14934,
  },
  {
    lat: 51.584112,
    lng: -0.14893,
  },
  {
    lat: 51.583913,
    lng: -0.148976,
  },
  {
    lat: 51.582766,
    lng: -0.148754,
  },
  {
    lat: 51.581715,
    lng: -0.149121,
  },
  {
    lat: 51.58113,
    lng: -0.148623,
  },
  {
    lat: 51.579808,
    lng: -0.149114,
  },
  {
    lat: 51.585623,
    lng: -0.150089,
  },
  {
    lat: 51.585319,
    lng: -0.149529,
  },
  {
    lat: 51.584418,
    lng: -0.14897,
  },
  {
    lat: 51.584068,
    lng: -0.148902,
  },
  {
    lat: 51.583705,
    lng: -0.148558,
  },
  {
    lat: 51.582616,
    lng: -0.148923,
  },
  {
    lat: 51.581435,
    lng: -0.149005,
  },
  {
    lat: 51.580887,
    lng: -0.148784,
  },
  {
    lat: 51.579779,
    lng: -0.149297,
  },
];

export default App;
