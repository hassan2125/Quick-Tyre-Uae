import { useState } from 'react'
import { site } from '../data/site.js'
import Icon from './Icon.jsx'
export default function MapEmbed() {
  const [live, setLive] = useState(false)
  const q = encodeURIComponent(site.address)
  return (
    <div className="mapbox">
      {live ? <iframe title="Rapid Tyre Repair Dubai location on Google Maps" src={`https://www.google.com/maps?q=${q}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
        : <div className="fakemap"><i className="r1" /><i className="r2" /><i className="r3" /><div className="pinbig"><span /><b><Icon name="location" size={28} /></b></div>
            <button className="btn primary" onClick={() => setLive(true)}>Load interactive Google Map</button></div>}
      <div className="map-info"><small>Our garage</small><b>{site.address}</b><p>{site.hours}</p>
        <a className="btn ghost" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Open in Google Maps →</a>
        <a className="btn ghost" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}>Get directions</a></div>
    </div>)
}
