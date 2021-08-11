import './App.css'

import Map from './Map'

function App() {

  const location = {
    address: 'Aleja Niepodległości 685, 81-854 Sopot, Poland',
    lat: 54.4317475,
    lng: 18.5619445,
  }

  return (
    <div className="App">
      mappapp
      <Map location={location} zoomLevel={17} />
    </div>
  );
}

export default App;
