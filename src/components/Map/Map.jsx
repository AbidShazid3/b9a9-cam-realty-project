import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {

    return (
        <div>
            <MapContainer center={[37.0902, -95.7129]} zoom={5} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[38.9072, -77.0369]}>
                    <Popup>
                        Washington, D.C.
                    </Popup>
                </Marker>
                <Marker position={[34.0522, -118.2437]}>
                    <Popup>
                        Los Angeles, CA
                    </Popup>
                </Marker>
                <Marker position={[40.7128, -74.0060]}>
                    <Popup>
                        New York City, NY
                    </Popup>
                </Marker>
                <Marker position={[41.8781, -87.6298]}>
                    <Popup>
                        Chicago, IL
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;