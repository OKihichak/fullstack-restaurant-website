import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";
import styles from './MainLocation.module.css';

import "leaflet/dist/leaflet.css";
import { restaurantIcon } from "../../constants";

const MainLocation = () => {
  return (
    

    <MapContainer
                        center={[52.5200, 13.4050]}
                        zoom={14}
                        scrollWheelZoom={false}
                        className={styles.map}
                    >
    
                        <TileLayer
                            attribution='&copy; OpenStreetMap'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
    
                        <Marker
                            position={[52.5200, 13.4050]}
                            icon={restaurantIcon}
                        >
    
                            <Popup
                                className={styles.popup}
                            >
    
                                <div className={styles.popupContent}>
    
                                    <h3>
                                        Pier Restaurant
                                    </h3>
    
                                    <p>
                                        Friedrichstraße 21
                                        <br />
                                        10117 Berlin
                                    </p>
    
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                    >
                                        Route via Google Maps
                                    </a>
    
                                </div>
    
                            </Popup>
    
                        </Marker>
    
                    </MapContainer>

  )
}

export default MainLocation