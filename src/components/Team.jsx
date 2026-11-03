import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { SectionHead } from './Common.jsx'
import { team } from '../data/site.js'
export default function Team({ link }) {
  return (<>
    <SectionHead eyebrow="Meet the Team" title="The experts behind every call-out" sub="Mobile technicians for tyre fitting, puncture repair, wheel balancing and emergency roadside help." />
    <div className="team-grid">{team.map(([n, r], i) => (
      <Reveal key={n} delay={i * 70} className="member">
        <div className="photo"><i /><b>{n[0]}</b><span>✔ Trained</span></div>
        <h3>{n}</h3><em className="role">{r}</em>
      </Reveal>))}</div>
    {link && <div className="center-block" style={{ marginTop: 36 }}><Link to="/about" className="btn ghost">Meet the full team →</Link></div>}
  </>)
}
