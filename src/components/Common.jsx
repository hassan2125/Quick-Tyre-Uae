import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { site, waLink, services, areas } from '../data/site.js'
import Reveal from './Reveal.jsx'
import { ServiceIllustration } from './WorkGallery.jsx'

export const SectionHead = ({ eyebrow, title, sub, center }) => (
  <Reveal className={`sec-head ${center ? 'center' : ''}`}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{sub && <p>{sub}</p>}
  </Reveal>)

export const CallButtons = ({ msg }) => (
  <div className="btn-row">
    <a className="btn primary" href={waLink(msg)} target="_blank" rel="noreferrer">Book a Service</a>
    <a className="btn ghost" href={`tel:${site.tel}`}>📞 {site.phone}</a>
  </div>)

export const PageHero = ({ eyebrow, title, sub, image, imageAlt }) => (
  <section className={`page-hero ${image ? 'has-photo' : ''}`}>
    {image && <img className="page-hero-photo" src={image} alt={imageAlt || ''} fetchpriority="high" />}
    <div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{sub && <p>{sub}</p>}</div>
  </section>)

export const ServiceCard = ({ s, i = 0 }) => (
  <Reveal delay={i * 70}>
    <Link to={`/services/${s.slug}`} className="card service-card">
      <div className="service-visual"><ServiceIllustration slug={s.slug} title={s.title} /><span>{s.icon}</span></div>
      <div className="service-card-body"><h3>{s.title}</h3><p>{s.short}</p>
        <div className="card-foot"><b>From AED 150</b><span className="arrow">→</span></div>
      </div>
    </Link>
  </Reveal>)

export function ReviewCard({ review, i = 0 }) {
  const initials = review.n.split(' ').map(part => part[0]).slice(0, 2).join('')
  return (
    <Reveal delay={i * 90} className="review-card">
      <div className="review-meta"><span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span><span className="review-source">Google review</span></div>
      <blockquote>{review.t}</blockquote>
      <div className="review-author"><span className="review-avatar">{initials}</span><span className="review-author-info"><b>{review.n}</b><small>Verified customer</small></span><span className="review-check" aria-label="Verified">✓</span></div>
    </Reveal>
  )
}

export function ReviewCarousel({ reviews }) {
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const [hovered, setHovered] = useState(false)

  const move = direction => {
    const track = trackRef.current
    const slides = track?.querySelectorAll('.review-slide')
    if (!track || !slides?.length || slides.length <= reviews.length) return
    const cycleWidth = slides[reviews.length].offsetLeft - slides[0].offsetLeft
    offsetRef.current = (offsetRef.current + direction * cycleWidth / reviews.length + cycleWidth) % cycleWidth
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
  }

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current
    const slides = track?.querySelectorAll('.review-slide')
    if (!viewport || !track || !slides?.length || slides.length <= reviews.length) return undefined

    let frame
    let previousTime
    let cycleWidth = slides[reviews.length].offsetLeft - slides[0].offsetLeft
    const animate = time => {
      if (previousTime !== undefined && !hovered && !document.hidden) {
        offsetRef.current = (offsetRef.current + (time - previousTime) * 0.018) % cycleWidth
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }
      previousTime = time
      frame = window.requestAnimationFrame(animate)
    }

    frame = window.requestAnimationFrame(animate)
    const onResize = () => {
      cycleWidth = slides[reviews.length].offsetLeft - slides[0].offsetLeft
      offsetRef.current %= cycleWidth || 1
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [hovered, reviews.length])

  return (
    <div className="review-carousel">
      <div className="review-viewport" ref={viewportRef} aria-label="Customer testimonials" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div className="review-track" ref={trackRef}>
          {[...reviews, ...reviews, ...reviews].map((review, i) => <div className="review-slide" aria-hidden={i >= reviews.length} key={`${review.n}-${i}`}><ReviewCard review={review} i={i % reviews.length} /></div>)}
        </div>
      </div>
      <div className="review-controls">
        <span>Customer reviews</span>
        <div>
          <button type="button" aria-label="Previous testimonials" onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next testimonials" onClick={() => move(1)}>→</button>
        </div>
      </div>
    </div>
  )
}

export const Marquee = ({ items, to }) => {
  const m = <div className="marquee"><div className="track">{[...items, ...items].map((b, i) => <span key={i}>{b}</span>)}</div></div>
  return to ? <Link to={to} aria-label="View brands">{m}</Link> : m
}

export function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return <div className="faq">{items.map(([q, a], i) => (
    <div key={q} className={`faq-item ${open === i ? 'open' : ''}`}>
      <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>{q}<i>+</i></button>
      <div className="faq-a"><p>{a}</p></div>
    </div>))}</div>
}

export function BookingForm() {
  const [f, setF] = useState({ name: '', mobile: '', email: '', area: areas[0], service: services[0].title, car: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const m = `Hi, I'm ${f.name || 'a customer'}. I need: ${f.service}. Mobile: ${f.mobile || 'not provided'}. Email: ${f.email || 'not provided'}. Location: ${f.area}. Car/tyre: ${f.car || 'will share'}.`
    window.open(waLink(m), '_blank')
  }
  return (
    <form className="booking" onSubmit={submit}>
      <h3>Get a Free Quote</h3><p>Tell us what you need — we’ll reply on WhatsApp.</p>
      <input placeholder="Your name" value={f.name} onChange={set('name')} />
      <input type="tel" autoComplete="tel" aria-label="Mobile number" placeholder="Mobile number" value={f.mobile} onChange={set('mobile')} />
      <input type="email" autoComplete="email" aria-label="Email address" placeholder="Email address" value={f.email} onChange={set('email')} />
      <select value={f.service} onChange={set('service')}>{services.map(s => <option key={s.slug}>{s.title}</option>)}</select>
      <select value={f.area} onChange={set('area')}>{areas.map(a => <option key={a}>{a}</option>)}<option>Other area in Dubai</option></select>
      <input placeholder="Car model & tyre size (optional)" value={f.car} onChange={set('car')} />
      <button className="btn primary full" type="submit">Request on WhatsApp →</button>
    </form>)
}

export const CTABand = () => (
  <section className="cta-band"><div className="wrap">
    <div><h2>Flat tyre? We’re 10–15 minutes away.</h2><p>24/7 mobile tyre assistance across Dubai.</p></div>
    <CallButtons />
  </div></section>)
