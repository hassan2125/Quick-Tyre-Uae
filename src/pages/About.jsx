import { PageHero, SectionHead, CallButtons, BookingForm, ReviewCarousel } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import Team from '../components/Team.jsx'
import BrandShowcase from '../components/BrandShowcase.jsx'
import { stats, reviews } from '../data/site.js'
import Icon from '../components/Icon.jsx'

const aboutUsps = ['Up to 20% off offers', 'Pay online option', 'On-site tyre service', 'Rated 4.7★ on Google']

export default function About() {
  return (<>
    <PageHero eyebrow="About Us" title="Your trusted partner for tyre care" />
    <section className="section about-intro-section"><div className="wrap">
      <div className="about-intro-layout">
        <Reveal className="about-intro-copy">
          <span className="eyebrow">About Rapid Tyre Repair</span>
          <h2>Mobile tyre help, without the workshop trip</h2>
          <p className="muted">Get tyre fitting, puncture repair and replacement at home, work or roadside. Share your location and vehicle details, and our team will confirm the right service.</p>
          <CallButtons />
        </Reveal>
        <Reveal className="about-intro-visual" delay={100}>
          <img src="/images/about-intro-service.webp" alt="A mobile technician changing a car tyre beside the service van in Dubai" loading="lazy" decoding="async" />
        </Reveal>
        <ul className="about-usps">{aboutUsps.map(usp => <li key={usp}><span aria-hidden="true">✓</span>{usp}</li>)}</ul>
      </div>
    </div></section>
    <section className="section dark"><div className="wrap"><div className="stats-row">{stats.map(s => <Reveal key={s.l}><b>{s.v}</b><span>{s.l}</span></Reveal>)}</div></div></section>
    <section className="section about-promises-section"><div className="wrap"><SectionHead eyebrow="Our Promise" title="Tyre care that fits your day" />
      <div className="grid3">{[['bolt','Fast','Quick response and an average arrival of 10–15 minutes.'],['card','Transparent','Service, availability and price are agreed before we start.'],['location','Convenient','At home, at work or on the roadside — we come to you.']].map(([i, t, d], k) => <Reveal key={t} delay={k * 90} className="card"><span className="icon"><Icon name={i} size={26} /></span><h3>{t}</h3><p className="muted">{d}</p></Reveal>)}</div></div></section>
    <section className="section alt brands-sec"><div className="wrap"><BrandShowcase /></div></section>
    <section className="section about-reviews-section"><div className="wrap">
      <SectionHead eyebrow="Testimonials" title="What our customers say" sub="Rated 4.7★ by 3,000+ Google reviewers." />
      <ReviewCarousel reviews={reviews} />
    </div></section>
    <section className="section dark"><div className="wrap"><Team /></div></section>
    <section className="section about-contact-section"><div className="wrap split">
      <div><SectionHead eyebrow="Get in touch" title="Need tyre assistance?" sub="Share your location and vehicle details. We’ll confirm availability and price before work begins." /><CallButtons /></div>
      <Reveal delay={150}><BookingForm /></Reveal>
    </div></section>
  </>)
}
