import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { SectionHead } from './Common.jsx'
export default function Team({ link }) {
  return (<>
    <SectionHead eyebrow="Meet the Team" title="The experts behind every call-out" sub="Mobile technicians for tyre fitting, puncture repair, wheel balancing and emergency roadside help." />
    <Reveal className="team-image-card">
      <img src="/images/rapid%20tyre%20team.jpg" alt="The Rapid Tyre Repair Dubai team together in their workshop" loading="lazy" decoding="async" />
    </Reveal>
    {link && <div className="center-block" style={{ marginTop: 36 }}><Link to="/about" className="btn ghost">Meet the full team →</Link></div>}
  </>)
}
