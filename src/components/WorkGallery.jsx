import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { gallery } from '../data/site.js'

const serviceScenes = {
  'mobile-tyre-change': 0,
  'emergency-tyre-change': 2,
  'mobile-tyre-puncture-repair': 1,
  'mobile-flat-tyre-repair': 1,
  'emergency-tyre-puncture-repair': 0,
  'mobile-tyre-change-replacement': 0,
}

export const getServicePhoto = slug => gallery[serviceScenes[slug] ?? 0]

export function ServiceIllustration({ slug, title }) {
  const image = getServicePhoto(slug)
  return <img src={image.image} alt={image.alt || title} loading="lazy" decoding="async" />
}

export default function WorkGallery({ offset = 0 }) {
  const [lb, setLb] = useState(null)
  const list = gallery.map((_, i) => gallery[(i + offset) % gallery.length])
  return (<>
    <div className="work-grid">{list.map((item, i) => (
      <Reveal key={item.t} delay={i * 70}><button className="work-card" onClick={() => setLb(item)} aria-label={item.t}>
        <img src={item.image} alt={item.alt} loading="lazy" decoding="async" /><span className="cap"><small>{item.c}</small>{item.t}</span></button></Reveal>))}</div>
    <p className="work-note">Representative stock photos, not photos of Rapid Tyre Repair Dubai customer jobs.</p>
    {lb && <div className="lightbox" onClick={() => setLb(null)}><div className="lb-card"><img src={lb.image} alt={lb.alt} /><h3>{lb.t}</h3><p>Tap anywhere to close</p></div></div>}
  </>)
}
