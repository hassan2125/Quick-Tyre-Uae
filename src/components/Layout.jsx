import { NavLink, Link, Outlet } from 'react-router-dom'
import { Component, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { site, waLink, services } from '../data/site.js'
import { CTABand } from './Common.jsx'

class Boundary extends Component {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  render() { return this.state.err ? <section className="section"><div className="wrap"><h2>Something went wrong on this page</h2><p className="muted">Please use the menu to go to another page.</p></div></section> : this.props.children }
}
const links = [['/', 'Home'], ['/services', 'Services'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/brands', 'Brands'], ['/contact', 'Contact']]
export default function Layout() {
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)
  const close = () => { setOpen(false); setDd(false) }
  return (<>
    <div id="top" className="topbar">⚡ Fast Fix Tyre <b>40% OFF</b> Today in Dubai — Call Now! <a href={`tel:${site.tel}`}>{site.phone}</a></div>
    <header className="header"><div className="wrap bar">
      <Link to="/" className="logo" onClick={() => setOpen(false)}><span className="logo-mark" />QUICK<b>TYRES</b><small>UAE</small></Link>
      <nav className={open ? 'open' : ''}>
        {links.map(([to, l]) => to === '/services' ? (
          <div key={to} className={`dd ${dd ? 'open' : ''}`} onMouseLeave={() => setDd(false)}>
            <NavLink to={to} onClick={close}>{l}</NavLink>
            <button className="dd-caret" aria-label="Show services" aria-expanded={dd} onClick={() => setDd(!dd)}>▾</button>
            <div className="dd-panel"><div className="dd-grid">
              {services.map(s => <Link key={s.slug} to={`/services/${s.slug}`} onClick={close}><span>{s.icon}</span><div><b>{s.title}</b><small>From AED 150</small></div></Link>)}
            </div><Link to="/services" className="dd-all" onClick={close}><span className="dd-all-copy">View all services<small>Explore all 6 mobile tyre services</small></span><b aria-hidden="true">→</b></Link></div>
          </div>) : <NavLink key={to} to={to} end={to === '/'} onClick={close}>{l}</NavLink>)}
        <div className="header-actions">
          <a className="btn ghost header-call" href={`tel:${site.tel}`}>📞 {site.phone}</a>
          <a className="btn primary header-book" href={waLink()} target="_blank" rel="noreferrer">Book a Service</a>
        </div>
      </nav>
      <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><span /><span /><span /></button>
    </div></header>
    <main><Boundary key={useLocation().pathname}><Outlet /></Boundary></main>
    <CTABand />
    <footer className="footer"><div className="wrap grid">
      <div><Link to="/" className="logo">QUICK<b>TYRES</b><small>UAE</small></Link>
        <p>Driving safety and performance: expert tyre repair and replacement, brought to you.</p>
        <div className="footer-socials" aria-label="Social media">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="social-fill" /></svg>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="social-fill" d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z" /></svg>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path className="social-fill" d="M15.8 3h-3.2v12.2a2.7 2.7 0 1 1-2.3-2.7v-3.3a6 6 0 1 0 5.5 6V9a8 8 0 0 0 4.2 1.2V7a4.8 4.8 0 0 1-4.2-4z" /></svg>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 7.2a2.8 2.8 0 0 0-2-2C18.2 4.7 12 4.7 12 4.7s-6.2 0-8 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1.5 12 29 29 0 0 0 2 16.8a2.8 2.8 0 0 0 2 2c1.8.5 8 .5 8 .5s6.2 0 8-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" /><path className="social-play" d="m10 15.5 5-3.5-5-3.5z" /></svg>
          </a>
        </div></div>
      <div><h4>Services</h4>{services.map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.title}</Link>)}</div>
      <div><h4>Explore</h4>{links.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
      <div><h4>Contact</h4><p>{site.address}</p><a href={`tel:${site.tel}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>Timing: {site.hours}</p></div>
    </div><div className="wrap copy">© 2026 Quick Tyre UAE. All rights reserved.</div></footer>
    <div className="float-cta">
      <a href={`tel:${site.tel}`} aria-label="Call">📞</a>
      <a className="wa" href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.5a12 12 0 0 0-10.2 18.3L4.5 28l6.4-1.3A12 12 0 1 0 16 3.5Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M12.1 10.7c-.4-.8-.8-.8-1.2-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.2 8.1 7.1 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.6s-2.8-1.4-3.3-1.6c-.4-.2-.8-.3-1.1.3-.3.5-1.3 1.6-1.6 1.9-.3.3-.6.4-1.1.1-.5-.2-2.1-.8-3.9-2.5-1.4-1.3-2.4-2.8-2.7-3.3-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.9.2-.3.3-.5.5-.8.2-.3.1-.6 0-.9-.1-.2-1-2.5-1.4-3.4Z" transform="translate(2 1) scale(.82)" fill="currentColor" />
        </svg>
      </a>
    </div>
  </>)
}
