import React from 'react';
import './App.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/js';

function App() {
  return (
    <div className="App">
      <h1>FAVET</h1>
      <p>Explore the world with Google Maps</p>

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        libraries={['places']}
      >
        {({ isLoaded }) => {
          if (!isLoaded) return <div>Loading...</div>;
          return (
            <GoogleMap
              mapContainerClassName="map-container"
              zoom={12}
              center={{ lat: 37.7749, lng: -122.4194 }}
            />
          );
        }}
      </LoadScript>
    </div>
  );
}

export default App;
