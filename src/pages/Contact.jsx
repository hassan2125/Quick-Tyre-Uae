import { PageHero, BookingForm, CallButtons, SectionHead, FAQ, ReviewCarousel } from '../components/Common.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Reveal from '../components/Reveal.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { site, waLink, areas, whyUs, reviews, contactFaqs } from '../data/site.js'
import Icon from '../components/Icon.jsx'
export default function Contact() {
  const items = [['phone', 'Call us', site.phone, `tel:${site.tel}`], ['whatsapp', 'WhatsApp', 'Chat & share location', waLink()], ['mail', 'Email', site.email, `mailto:${site.email}`], ['clock', 'Timing', site.hours, null]]
  return (<>
    <PageHero eyebrow="Contact" title="Book a tyre technician" sub="Share your location, car model and tyre size — we’ll confirm availability and price." />
    <section className="section"><div className="wrap split">
      <div className="contact-list">{items.map(([i, t, v, h], k) => <Reveal key={t} delay={k * 70}>{h ? <a href={h} className="card contact"><span className="icon"><Icon name={i} size={26} /></span><div><small>{t}</small><b>{v}</b></div></a> : <div className="card contact"><span className="icon"><Icon name={i} size={26} /></span><div><small>{t}</small><b>{v}</b></div></div>}</Reveal>)}
        <Reveal className="card map"><div className="pinmap"><i><Icon name="location" size={23} /></i><span /></div><div><small>Garage</small><b>{site.address}</b><a className="btn ghost" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}>Open in Maps →</a></div></Reveal></div>
      <BookingForm />
    </div></section>
    <section className="section dark usp-sec"><div className="wrap">
      <SectionHead eyebrow="Our USPs" title="What you get when you book with us" center />
      <div className="usp-grid">{[['alert', '24/7', 'Emergency tyre help any time, day or night.'], ['clock', '10–15 min', 'Average arrival time across Dubai.'], ['truck', 'Free', 'Pick & drop for garage tyre service.'], ['tag', 'Up to 20% off', 'Offers plus an easy pay-online option.']].map(([i, k, d], n) => <Reveal key={k} delay={n * 80} className="usp"><span><Icon name={i} size={26} /></span><b>{k}</b><p>{d}</p></Reveal>)}</div>
    </div></section>

    <WhyChoose />

    <section className="section alt"><div className="wrap">
      <SectionHead eyebrow="Testimonials" title="What customers say" sub="Rated 4.7★ by 3,000+ Google reviewers." />
      <ReviewCarousel reviews={reviews} />
    </div></section>

    <section className="section dark"><div className="wrap split">
      <div><SectionHead eyebrow="FAQs" title="Questions before you book?" /><CallButtons /></div>
      <FAQ items={contactFaqs} />
    </div></section>

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Find Us" title="Visit our garage or book a call-out" />
      <MapEmbed />
      <div className="chips" style={{ marginTop: 28 }}>{areas.map(a => <span key={a}><Icon name="location" size={15} /> {a}</span>)}</div>
    </div></section>
  </>)
}
