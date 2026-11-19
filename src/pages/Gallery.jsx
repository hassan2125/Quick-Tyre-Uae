import { useState } from 'react'
import { PageHero } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import { gallery } from '../data/site.js'
const cats = ['All', ...new Set(gallery.map(g => g.c))]
export default function Gallery() {
  const [c, setC] = useState('All'); const [lb, setLb] = useState(null)
  const list = gallery.filter(g => c === 'All' || g.c === c)
  return (<>
    <PageHero eyebrow="Gallery" title="Tyre service gallery" sub="Representative stock photos of wheel fitting and tyre service. These are not photos of Rapid Tyre Repair Dubai customer jobs." image={gallery[0].image} imageAlt={gallery[0].alt} />
    <section className="section"><div className="wrap">
      <div className="filters">{cats.map(x => <button key={x} className={x === c ? 'on' : ''} onClick={() => setC(x)}>{x}</button>)}</div>
      <div className="masonry">{list.map((g, i) => (
        <Reveal key={g.t} delay={i * 50}><button className="tile" style={{ '--h': g.h }} onClick={() => setLb(g)}>
          <img src={g.image} alt={g.alt} loading="lazy" decoding="async" /><span className="cap"><small>{g.c}</small>{g.t}</span></button></Reveal>))}</div>
    </div></section>
    {lb && <div className="lightbox" onClick={() => setLb(null)}><div className="lb-card"><img src={lb.image} alt={lb.alt} /><h3>{lb.t}</h3><p>{lb.c} · tap to close</p></div></div>}
  </>)
}
