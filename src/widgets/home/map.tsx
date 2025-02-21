"use client"
import { MapContainer, TileLayer } from "react-leaflet"
import { LatLngExpression } from 'leaflet'

interface MapProps {
  center: LatLngExpression; 
  zoom: number;
  style: React.CSSProperties;
}

export const Map: React.FC<MapProps> = ({ center, zoom, style }) => {
  return (
    <MapContainer center={center} zoom={zoom} style={style}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
    </MapContainer>
  )
}
