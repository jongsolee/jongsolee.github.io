"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export type StayLocation = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
};

export default function StayMap({ locations, label = "다낭 숙소 후보 위치 지도" }: { locations: readonly StayLocation[]; label?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: LeafletMap | undefined;
    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: "bottomright" }).addTo(map);

      locations.forEach((location, index) => {
        const icon = L.divIcon({
          className: "stay-map-pin-wrap",
          html: `<span class="stay-map-pin stay-map-pin-${index + 1}">${location.id}</span>`,
          iconAnchor: [19, 40],
          iconSize: [38, 40],
        });

        L.marker([location.latitude, location.longitude], { icon })
          .addTo(map!)
          .bindTooltip(location.name, { direction: "top", offset: [0, -32] });
      });

      const bounds = L.latLngBounds(locations.map((location) => [location.latitude, location.longitude]));
      map.fitBounds(bounds, { padding: [42, 42], maxZoom: 12 });
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [locations]);

  return (
    <div
      ref={containerRef}
      className="stay-map-canvas"
      role="region"
      aria-label={label}
    />
  );
}
