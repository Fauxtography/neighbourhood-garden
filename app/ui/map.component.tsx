"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple, icon } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useState } from "react";
import { AddMarkerButton } from "./add-marker.component";
import { LatLngLiteral } from "leaflet";

interface MapProps {
    posix: LatLngExpression | LatLngTuple,
    zoom?: number,
}

const defaults = {
    zoom: 19,
}

var appleIcon = icon({
	iconUrl: '/apple-icon.png',
	iconSize: [32, 32],
});

const Map = (Map: MapProps) => {
    const { zoom = defaults.zoom, posix } = Map

    const [ markers, setMarkers ] = useState<LatLngLiteral[]>([])

    const addMarker = (latitude:number, longitude:number) => {
        const newMarker:LatLngLiteral = { lat:latitude, lng:longitude };
        setMarkers([...markers, newMarker]);
    };

    return (
        <>
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={appleIcon} position={posix} draggable={false}>
                <Popup>Hey ! I study here</Popup>
            </Marker>
            {markers?.map((marker) => (
                <Marker position={marker} draggable={false} />
            ))}
        </MapContainer>
        <AddMarkerButton onClick={addMarker}/>
        </>
    )
}

export default Map