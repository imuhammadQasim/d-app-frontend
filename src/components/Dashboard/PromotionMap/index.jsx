import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { StyledPromotion } from "./Promotion.styles";
import mapGif from "@/assets/images/map-gif.gif";
import Image from "next/image";

const PromotionsMap = () => {
  const createIcon = (imageUrl) => {
    return L.icon({
      iconUrl: imageUrl,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
  };

  const markers = [
    {
      position: [31.5204, 74.3587],
      imageUrl:
        "https://res.cloudinary.com/dbamrlmjd/image/upload/v1737633743/binance-icon_yd2trw.svg",
    },
    {
      position: [31.5209, 74.3599],
      imageUrl:
        "https://res.cloudinary.com/dbamrlmjd/image/upload/v1737634329/dollar-icon_qa1nrz.svg",
    },
  ];

  return (
    <StyledPromotion>
      <div className="head">
        <Image src={mapGif} alt="mapGif" />
        <span className="heading">Promotions Map</span>
      </div>
      <MapContainer
        center={[31.5204, 74.3587]}
        zoom={16}
        scrollWheelZoom={false}
        className="map-container">
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.carto.com/">CartoDB</a>'
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={createIcon(marker.imageUrl)}
          />
        ))}
      </MapContainer>
    </StyledPromotion>
  );
};

export default PromotionsMap;
