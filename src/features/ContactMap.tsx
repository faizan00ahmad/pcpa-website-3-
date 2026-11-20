"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type Place = { id: string; name: string; address: string; lat: number; lon: number };

/** Interactive map (OpenStreetMap, no key needed) with one tab per office. Drag to pan, scroll or use +/- to zoom. */
export function ContactMap({ places }: { places: Place[] }) {
  const [id, setId] = useState(places[0].id);
  const p = places.find((x) => x.id === id) ?? places[0];
  const d = 0.012;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${p.lon - d},${p.lat - d / 2},${p.lon + d},${p.lat + d / 2}&layer=mapnik&marker=${p.lat},${p.lon}`;
  const coords = `${p.lat.toFixed(6)}, ${p.lon.toFixed(6)}`;
  return (
    <section className="pc-map" aria-label="Office locations map">
      <div className="pc-gal-tabs" role="group" aria-label="Choose an office">
        {places.map((x) => (
          <button key={x.id} type="button" className={`pc-tab${x.id === p.id ? " active" : ""}`} aria-pressed={x.id === p.id} onClick={() => setId(x.id)}>
            {x.name}
          </button>
        ))}
      </div>
      <div className="pc-map-frame">
        <iframe key={p.id} title={`Map: ${p.name}`} src={src} loading="lazy" referrerPolicy="no-referrer" />
      </div>
      <div className="pc-map-info">
        <p>
          <Icon name="pin" size={18} /> <span>{p.address}</span>
        </p>
        <p className="pc-mono">
          GPS: <strong>{coords}</strong>
        </p>
        <p className="pc-actions">
          <a className="pc-btn pc-btn-primary pc-btn-sm" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lon}`}>
            Get directions <Icon name="external" size={14} />
          </a>
          <a className="pc-btn pc-btn-outline pc-btn-sm" target="_blank" rel="noopener noreferrer" href={`https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lon}#map=17/${p.lat}/${p.lon}`}>
            Open larger map <Icon name="external" size={14} />
          </a>
        </p>
      </div>
    </section>
  );
}
