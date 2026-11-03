import { PageHero, BookingForm, CallButtons, SectionHead, FAQ, ReviewCarousel } from '../components/Common.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Reveal from '../components/Reveal.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { site, waLink, areas, whyUs, reviews, contactFaqs } from '../data/site.js'
export default function Contact() {
  const items = [['📞', 'Call us', site.phone, `tel:${site.tel}`], ['💬', 'WhatsApp', 'Chat & share location', waLink()], ['✉️', 'Email', site.email, `mailto:${site.email}`], ['🕗', 'Timing', site.hours, null]]
  return (<>
    <PageHero eyebrow="Contact" title="Book a tyre technician" sub="Share your location, car model and tyre size — we’ll confirm availability and price." />
    <section className="section"><div className="wrap split">
      <div className="contact-list">{items.map(([i, t, v, h], k) => <Reveal key={t} delay={k * 70}>{h ? <a href={h} className="card contact"><span className="icon">{i}</span><div><small>{t}</small><b>{v}</b></div></a> : <div className="card contact"><span className="icon">{i}</span><div><small>{t}</small><b>{v}</b></div></div>}</Reveal>)}
        <Reveal className="card map"><div className="pinmap"><i>📍</i><span /></div><div><small>Garage</small><b>{site.address}</b><a className="btn ghost" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}>Open in Maps →</a></div></Reveal></div>
      <BookingForm />
    </div></section>
    <section className="section dark usp-sec"><div className="wrap">
      <SectionHead eyebrow="Our USPs" title="What you get when you book with us" center />
      <div className="usp-grid">{[['🚨', '24/7', 'Emergency tyre help any time, day or night.'], ['⏱️', '10–15 min', 'Average arrival time across Dubai.'], ['🚚', 'Free', 'Pick & drop for garage tyre service.'], ['🏷️', 'Up to 20% off', 'Offers plus an easy pay-online option.']].map(([i, k, d], n) => <Reveal key={k} delay={n * 80} className="usp"><span>{i}</span><b>{k}</b><p>{d}</p></Reveal>)}</div>
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
      <div className="chips" style={{ marginTop: 28 }}>{areas.map(a => <span key={a}>📍 {a}</span>)}</div>
    </div></section>
  </>)
}
