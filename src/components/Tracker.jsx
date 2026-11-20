import Icon from './Icon.jsx'
import { site, waLink } from '../data/site.js'

export default function Tracker() {
  const steps = [
    ['Tell us what you need', 'Share your location, vehicle and tyre issue.', 'chat'],
    ['Confirm the details', 'We check availability, service options and price with you.', 'check'],
    ['Technician comes to you', 'Once arranged, we visit your agreed location.', 'van'],
    ['Repair or replacement', 'The technician inspects the tyre and explains the options.', 'tyre'],
  ]

  return (
    <div className="service-journey-layout">
      <div className="service-journey-copy">
        <span className="eyebrow">What happens after you book</span>
        <h2>Tyre help, from request to repair</h2>
        <p>Here’s how a typical mobile tyre visit works. Contact our team to confirm availability, service details and your estimated arrival time.</p>
        <div className="service-journey-metrics">
          <div><b>10–15 min</b><span>Average arrival*</span></div>
          <div><b>24/7</b><span>Roadside support*</span></div>
          <div><b>On-site</b><span>At your location</span></div>
        </div>
        <small className="service-journey-footnote">*Average arrival and roadside availability depend on your location and current availability. Please confirm when booking.</small>
        <div className="service-journey-actions">
          <a className="btn primary" href={waLink('Hi, I need mobile tyre assistance.')} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18} /> Request assistance</a>
          <a className="btn ghost" href={`tel:${site.tel}`}><Icon name="phone" size={18} /> {site.phone}</a>
        </div>
      </div>

      <div className="tracker">
        <div className="journey-panel">
          <div className="journey-header">
            <div><span>How it works</span><b>Your service journey</b></div>
            <div className="journey-mini-scene" aria-hidden="true">
              <span className="journey-mini-road"><span className="journey-mini-van"><Icon name="van" size={19} /></span></span>
              <span className="journey-mini-tyre"><Icon name="tyre" size={17} /></span>
            </div>
          </div>
          <div className="journey-steps">
            {steps.map(([title, detail, icon], i) => (
              <div className="journey-step" key={title}>
                <span className="journey-step-icon"><Icon name={icon} size={18} /></span>
                <div><small>STEP 0{i + 1}</small><b>{title}</b><p>{detail}</p></div>
              </div>
            ))}
          </div>
          <div className="journey-note">Illustration only — this is not live technician tracking.</div>
        </div>
      </div>
    </div>
  )
}
