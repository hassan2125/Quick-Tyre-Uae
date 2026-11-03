import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { SectionHead } from './Common.jsx'
import { tyreBrands, carBrands } from '../data/site.js'
const Row = ({ items, rev }) => (
  <div className="pill-marquee"><div className={`pm-track ${rev ? 'rev' : ''}`}>{[...items, ...items].map((b, i) => <span key={i}><i />{b}</span>)}</div></div>)
export default function BrandShowcase() {
  return (<>
    <SectionHead eyebrow="Brands" title="Trusted tyre brands, for every kind of car" sub="We work with 12 leading tyre brands and support 18 car makes, from everyday family cars to supercars." />
    <div className="brand-stats"><div><b>12</b><span>Tyre brands</span></div><div><b>18</b><span>Car makes supported</span></div><div><b>1</b><span>Call to check availability</span></div></div>
    <div className="brand-cards">{tyreBrands.map((b, i) => (
      <Reveal key={b} delay={(i % 6) * 60} className="bcard"><span className="mono">{b[0]}</span><b>{b}</b><small>Tyre brand</small></Reveal>))}</div>
    <div className="pm-wrap"><Row items={carBrands.slice(0, 9)} /><Row items={carBrands.slice(9)} rev /></div>
    <div className="center-block" style={{ marginTop: 40 }}><Link to="/brands" className="btn primary">Explore all brands →</Link></div>
  </>)
}
