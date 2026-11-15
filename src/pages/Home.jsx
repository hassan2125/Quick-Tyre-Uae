import { Link } from 'react-router-dom'
import Tracker from '../components/Tracker.jsx'
import Team from '../components/Team.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Reveal from '../components/Reveal.jsx'
import { SectionHead, CallButtons, ServiceCard, Marquee, FAQ, BookingForm, ReviewCarousel } from '../components/Common.jsx'
import { gallery, whyUs, signs, stats, services, steps, tyreBrands, areas, reviews, homeFaqs } from '../data/site.js'

export default function Home() {
  return (<>
    <section className="hero"><div className="wrap hero-grid">
      <div>
        <span className="pill"><i /> 24/7 Roadside Tyre Assistance · ★ 4.7 on Google</span>
        <h1>Mobile Tyre Change <em>& Replacement</em> in Dubai</h1>
        <p className="lead">Flat tyre? Worn tyres? We come to you — home, work or roadside — with mobile tyre fitting at your location.</p>
        <CallButtons />
        <div className="hero-stats">{stats.map(s => <div key={s.l}><b>{s.v}</b><span>{s.l}</span></div>)}</div>
      </div>
      <Tracker />
    </div></section>

    <Marquee items={tyreBrands} to="/brands" />

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Our Services" title="Mobile tyre services, right where you are" />
      <div className="grid3">{services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div>
      <div className="center-block" style={{ marginTop: 40 }}><Link to="/services" className="btn ghost">View all services →</Link></div>
    </div></section>

    <WhyChoose />

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Our Work" title="Out on the road, every day" />
      <div className="grid3">{gallery.slice(0, 3).map((g, i) => <Reveal key={g.t} delay={i * 80}><Link to="/gallery" className="tile" style={{ '--h': 120 }}><img src={g.image} alt={g.alt} loading="lazy" decoding="async" /><span className="cap"><small>{g.c}</small>{g.t}</span></Link></Reveal>)}</div>
      <div className="center-block" style={{ marginTop: 40 }}><Link to="/gallery" className="btn ghost">Open the gallery →</Link></div>
    </div></section>

    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="We Come To You" title="We fix your tyres in 3 steps" center />
      <div className="steps">{steps.map((s, i) => <Reveal key={s.t} delay={i * 120} className="step"><span>{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="wrap split">
      <Reveal><span className="eyebrow">Garage Support</span><h2>Free pick & drop for garage tyre service</h2>
        <p className="muted">We provide tyre support on the roadside and at our garage. If your vehicle needs garage service, enjoy free pick and drop.</p>
        <ul className="ticks"><li>Roadside tyre assistance at your location</li><li>Garage service with free pick & drop</li><li>Easy booking by phone or WhatsApp</li></ul>
        <CallButtons msg="Hi, I need free pick and drop for garage tyre service." /></Reveal>
      <Reveal delay={150}><BookingForm /></Reveal>
    </div></section>

    <section className="section"><div className="wrap split">
      <div><SectionHead eyebrow="Tyre Health" title="Signs it’s time for a tyre check" sub="Spot any of these? Don’t wait for a breakdown — book an inspection and we’ll tell you honestly whether to repair or replace." /><CallButtons msg="Hi, I'd like a tyre inspection." /></div>
      <div className="signs">{signs.map(([i, t], k) => <Reveal key={t} delay={k * 60} className="sign"><span>{i}</span>{t}</Reveal>)}</div>
    </div></section>

    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="Coverage" title="24/7 mobile tyre repair across Dubai" />
      <Reveal className="chips">{areas.map(a => <span key={a}>📍 {a}</span>)}</Reveal>
    </div></section>

    <section className="section"><div className="wrap"><Team link /></div></section>

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Reviews" title="Customer feedback" sub="Rated 4.7★ by 3,000+ Google reviewers." />
      <ReviewCarousel reviews={reviews} />
    </div></section>

    <section className="section dark"><div className="wrap split">
      <div><SectionHead eyebrow="Common Questions" title="Mobile tyre service FAQs" /><Link to="/services" className="btn ghost">Explore all services</Link> <Link to="/contact" className="btn primary">Book online</Link></div>
      <FAQ items={homeFaqs} />
    </div></section>
  </>)
}
