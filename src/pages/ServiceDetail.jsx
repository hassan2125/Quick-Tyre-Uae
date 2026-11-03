import { useParams } from 'react-router-dom'
import { FAQ, PageHero, CallButtons, BookingForm, SectionHead, ServiceCard, ReviewCarousel } from '../components/Common.jsx'
import WhyChoose from '../components/WhyChoose.jsx'
import Reveal from '../components/Reveal.jsx'
import WorkGallery from '../components/WorkGallery.jsx'
import { services, steps, serviceFaqs, whyUs, areas, reviews } from '../data/site.js'
import NotFound from './NotFound.jsx'
const common = ['Visit from a trained technician', 'Inspection of tyre & visible damage', 'Repair or replacement based on condition', 'Price confirmed before work starts']
export default function ServiceDetail() {
  const idx = services.findIndex(x => x.slug === useParams().slug)
  if (idx < 0) return <NotFound />
  const s = services[idx]
  const related = services.filter(x => x.slug !== s.slug).slice(0, 3)
  return (<>
    <PageHero eyebrow={`${s.icon} Service`} title={s.title} sub={s.short} />

    <section className="section"><div className="wrap split">
      <Reveal><span className="eyebrow">Service Overview</span><h2>About {s.title.toLowerCase()}</h2>
        <p className="muted">{s.long}</p>
        <p className="muted">Call or WhatsApp us with your location, car model and tyre size. We confirm availability and price, then come to you — at home, at work or on the roadside.</p>
        <CallButtons msg={`Hi, I need ${s.title}.`} /></Reveal>
      <Reveal delay={120} className="card svc-side"><span className="icon big">{s.icon}</span>
        <p className="price">From <b>AED 150</b><small>Final price confirmed after details & availability are agreed.</small></p>
        <ul className="ticks"><li>10–15 min average arrival</li><li>24/7 roadside assistance</li><li>Free pick & drop for garage visits</li></ul></Reveal>
    </div></section>

    <section className="section alt"><div className="wrap">
      <SectionHead eyebrow="What’s Included" title="Every visit covers the essentials" />
      <div className="grid4">{[...s.points, ...common].map((p, i) => <Reveal key={p} delay={(i % 4) * 70} className="card inc"><span>✓</span><p>{p}</p></Reveal>)}</div>
    </div></section>

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Work Gallery" title={`${s.title} in action`} />
      <WorkGallery offset={idx} />
    </div></section>

    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="How It Works" title="Back on the road in 3 steps" center />
      <div className="steps">{steps.map((x, i) => <Reveal key={x.t} delay={i * 120} className="step"><span>{i + 1}</span><h3>{x.t}</h3><p>{x.d}</p></Reveal>)}</div>
    </div></section>

    <WhyChoose />

    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="Coverage" title="We serve these areas across Dubai" />
      <Reveal className="chips">{areas.map(a => <span key={a}>📍 {a}</span>)}</Reveal>
    </div></section>

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="More Services" title="You may also need" sub="Explore other mobile tyre services from our team." />
      <div className="grid3">{related.map((r, i) => <ServiceCard key={r.slug} s={r} i={i} />)}</div>
    </div></section>

    <section className="section"><div className="wrap">
      <SectionHead eyebrow="Testimonials" title="What customers say" sub="Rated 4.7★ by 3,000+ Google reviewers." />
      <ReviewCarousel reviews={reviews} />
    </div></section>

    <section className="section dark"><div className="wrap split">
      <div><SectionHead eyebrow="FAQs" title={`Questions about ${s.title.toLowerCase()}`} /></div>
      <FAQ items={serviceFaqs[s.slug]} />
    </div></section>

    <section className="section"><div className="wrap split">
      <Reveal><span className="eyebrow">Get in Touch</span><h2>Book {s.title.toLowerCase()} today</h2>
        <p className="muted">Tell us what you need and we’ll reply on WhatsApp — or call us directly.</p><CallButtons msg={`Hi, I need ${s.title}.`} /></Reveal>
      <BookingForm />
    </div></section>
  </>)
}
