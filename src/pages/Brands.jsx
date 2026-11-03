import Sidewall from '../components/Sidewall.jsx'
import { BookingForm, PageHero, SectionHead, Marquee, CallButtons } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import { tyreBrands, carBrands } from '../data/site.js'
export default function Brands() {
  return (<>
    <PageHero eyebrow="Brands" title="Tyre brands we deal with" sub="Send your car model and tyre size — we’ll check availability for you." />
    <section className="section"><div className="wrap">
      <div className="grid4">{tyreBrands.map((b, i) => <Reveal key={b} delay={(i % 4) * 60} className="brand-tile">{b}</Reveal>)}</div>
    </div></section>
    <section className="section dark"><div className="wrap"><SectionHead eyebrow="Vehicles We Support" title="Luxury & everyday car brands" /></div>
      <Marquee items={carBrands} /><div className="wrap" style={{ marginTop: 40 }}><div className="chips">{carBrands.map(b => <span key={b}>{b}</span>)}</div></div></section>
    <section className="section"><div className="wrap split"><div><span className="eyebrow">Tyre Size Guide</span><h2>Read your tyre like a pro</h2><p className="muted">That code on your tyre’s sidewall tells us exactly what fits. Here’s 225/45 R17 94W decoded.</p><Sidewall /></div><BookingForm /></div></section>
    <section className="section dark"><div className="wrap center-block"><h2>Not sure which tyre fits?</h2><p className="muted">Share your car model and size on WhatsApp and we’ll help check suitable options.</p><CallButtons msg="Hi, please check tyre availability for my car." /></div></section>
  </>)
}
