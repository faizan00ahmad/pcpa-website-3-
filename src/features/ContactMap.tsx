"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type Place = { id: string; name: string; address: string; lat: number; lon: number };

/** Interactive map (OpenStreetMap, no key needed) with one tab per office. Drag to pan, scroll or use +/- to zoom. */
export function ContactMap({ places }: { places: Place[] }) {
  const [id, setId] = useState(places[0].id);
  const p = places.find((x) => x.id === id) ?? places[0];
  const [sat, setSat] = useState(false);
  /** Google Maps embed by coordinates: needs no API key. `t=k` is the satellite view. */
  const src = `https://www.google.com/maps?q=${p.lat},${p.lon}&z=17&hl=en&output=embed${sat ? "&t=k" : ""}`;
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
      <div className="pc-gal-tabs" role="group" aria-label="Map view">
        <button type="button" className={`pc-tab${!sat ? " active" : ""}`} aria-pressed={!sat} onClick={() => setSat(false)}>
          Map
        </button>
        <button type="button" className={`pc-tab${sat ? " active" : ""}`} aria-pressed={sat} onClick={() => setSat(true)}>
          Satellite
        </button>
      </div>
      <div className="pc-map-frame">
        <iframe key={`${p.id}-${sat}`} title={`Map: ${p.name}`} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
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
          <a className="pc-btn pc-btn-outline pc-btn-sm" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`}>
            Open in Google Maps <Icon name="external" size={14} />
          </a>
        </p>
      </div>
    </section>
  );
}
