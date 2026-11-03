import Reveal from './Reveal.jsx'
import { CallButtons, SectionHead } from './Common.jsx'
import { whyUs } from '../data/site.js'
const icons = ['⏱️', '🚨', '🛡️', '👥', '🚚', '💳']
export default function WhyChoose({ alt }) {
  return (
    <section className={`section ${alt ? 'alt' : ''}`}><div className="wrap">
      <SectionHead eyebrow="Why Choose Us" title="Why drivers pick Quick Tyres" />
      <div className="why-grid">
        <Reveal className="why-panel">
          <div>
            <span className="why-badge">★ 4.7 · 3,000+ Google reviews</span>
            <div className="why-big">10–15<small>min</small></div>
            <h3>Average arrival time</h3>
            <p>Our mobile vans are dispatched fast, so you’re never stuck waiting at the roadside.</p>
          </div>
          <CallButtons />
          <i className="ring" />
        </Reveal>
        <div className="why-cards">{whyUs.slice(1).concat(whyUs[0]).filter(w => !w.big).map((w, i) => (
          <Reveal key={w.t} delay={i * 70} className="why-card">
            <span className="why-ic">{icons[i + 1]}</span>
            <div><h3>{w.t}</h3><p>{w.d}</p></div>
            <em>0{i + 1}</em>
          </Reveal>))}
          <Reveal delay={350} className="why-card hl">
            <span className="why-ic">{icons[0]}</span>
            <div><h3>Free tyre inspection advice</h3><p>Not sure if you need repair or replacement? We’ll tell you honestly.</p></div>
            <em>06</em>
          </Reveal>
        </div>
      </div>
    </div></section>)
}
