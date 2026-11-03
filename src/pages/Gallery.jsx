import { useState } from 'react'
import { PageHero } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import Tyre from '../components/Tyre.jsx'
import { gallery } from '../data/site.js'
const cats = ['All', ...new Set(gallery.map(g => g.c))]
export default function Gallery() {
  const [c, setC] = useState('All'); const [lb, setLb] = useState(null)
  const list = gallery.filter(g => c === 'All' || g.c === c)
  return (<>
    <PageHero eyebrow="Gallery" title="Our work, on the road" sub="Swap these placeholder tiles for real job photos from the Quick Tyres team (see src/data/site.js)." />
    <section className="section"><div className="wrap">
      <div className="filters">{cats.map(x => <button key={x} className={x === c ? 'on' : ''} onClick={() => setC(x)}>{x}</button>)}</div>
      <div className="masonry">{list.map((g, i) => (
        <Reveal key={g.t} delay={i * 50}><button className="tile" style={{ '--h': g.h }} onClick={() => setLb(g)}>
          <Tyre size={150} spin={false} /><span className="cap"><small>{g.c}</small>{g.t}</span></button></Reveal>))}</div>
    </div></section>
    {lb && <div className="lightbox" onClick={() => setLb(null)}><div><Tyre size={320} /><h3>{lb.t}</h3><p>{lb.c} · tap to close</p></div></div>}
  </>)
}
