// components/LocationMap.tsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { RiShareBoxFill } from "react-icons/ri";
import { IoNavigateOutline } from "react-icons/io5";

// Fix icon marker default Leaflet di bundler
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })
  ._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface LocationMapProps {
  lat?: number;
  lng?: number;
  name?: string;
}

export default function LocationMap({
  lat = -7.1502,
  lng = 111.8817,
  name = "Lokasi Kami",
}: LocationMapProps) {
  const position: [number, number] = [lat, lng];

  // Buka titik lokasi di Google Maps
  const viewUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  // Langsung masuk mode navigasi ke titik lokasi (asal = posisi pengguna saat ini)
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

  return (
    <div className="w-full rounded-2xl shadow-2xl">
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="h-[200px] w-full rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{name}</Popup>
        </Marker>
      </MapContainer>

      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl">Titik Koordinat Utama</h1>
          <p className="text-md text-gray-500">
            {lat}, {lng}
          </p>
        </div>
        <div className="w-full flex justify-center gap-4 items-center">
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex gap-2 items-center justify-center p-3 bg-blue-100 rounded-xl text-center"
          >
            <RiShareBoxFill />
            Google Maps
          </a>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex gap-2 items-center justify-center p-3 bg-[#F4BF46] rounded-xl text-center"
          >
            <IoNavigateOutline />
            Petunjuk Arah
          </a>
        </div>
      </div>
    </div>
  );
}
