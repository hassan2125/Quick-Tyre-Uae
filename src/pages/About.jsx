import { PageHero, SectionHead, CallButtons } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import Team from '../components/Team.jsx'
import BrandShowcase from '../components/BrandShowcase.jsx'
import { stats, team, gallery } from '../data/site.js'
export default function About() {
  return (<>
    <PageHero eyebrow="About Us" title="Your trusted partner for tyre care" />
    <section className="section"><div className="wrap split">
      <Reveal><h2>Mobile tyre help, without the workshop trip</h2>
        <p className="muted">At Quick Tyre UAE, we make car tyre changes more convenient with a mobile service designed around your location. Whether you need a replacement, have a flat, or want professional fitting, our team helps you get the service your vehicle needs without an unnecessary trip to a garage.</p>
        <p className="muted">Tell us your location, vehicle details and tyre requirements, and we’ll arrange the appropriate service — at home, at work or on the roadside.</p>
        <ul className="ticks"><li>Up to 20% off offers</li><li>Pay online option</li><li>On-site tyre service</li><li>Rated 4.7★ on Google</li></ul><CallButtons /></Reveal>
      <div className="hero-art small"><img className="about-service-image" src={gallery[2].image} alt={gallery[2].alt} loading="lazy" decoding="async" /></div>
    </div></section>
    <section className="section dark"><div className="wrap"><div className="stats-row">{stats.map(s => <Reveal key={s.l}><b>{s.v}</b><span>{s.l}</span></Reveal>)}</div></div></section>
    <section className="section"><div className="wrap"><SectionHead eyebrow="Our Promise" title="Tyre care that fits your day" />
      <div className="grid3">{[['⚡','Fast','Quick response and an average arrival of 10–15 minutes.'],['🧾','Transparent','Service, availability and price are agreed before we start.'],['📍','Convenient','At home, at work or on the roadside — we come to you.']].map(([i, t, d], k) => <Reveal key={t} delay={k * 90} className="card"><span className="icon">{i}</span><h3>{t}</h3><p className="muted">{d}</p></Reveal>)}</div></div></section>
    <section className="section alt brands-sec"><div className="wrap"><BrandShowcase /></div></section>
    <section className="section dark"><div className="wrap"><Team /></div></section>
  </>)
}
