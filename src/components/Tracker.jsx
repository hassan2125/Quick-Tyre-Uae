import { gallery } from '../data/site.js'
export default function Tracker() {
  const rows = [['Request received', 'WhatsApp · 0:00'], ['Technician assigned', 'Mobile van ready · 0:02'], ['Van on the way', 'ETA 10–15 min'], ['Fixed on site', 'Back on the road']]
  return (
    <div className="tracker">
      <img className="tracker-photo" src={gallery[0].image} alt={gallery[0].alt} fetchpriority="high" />
      <div className="ticket">
        <div className="tk-head"><span>Job card</span><b>#QT-0215</b></div>
        <div className="spec">225/45 R17 94W</div><div className="route"><i className="pin a">📍</i><div className="road"><span className="van">🚐</span></div><i className="pin b">🛞</i></div>
        <ul>{rows.map(([a, b], i) => <li key={a} className={i < 2 ? 'done' : i === 2 ? 'live' : ''}><span />{a}<small>{b}</small></li>)}</ul>
        <div className="tk-foot">From <b>AED 150</b><em>24/7</em></div>
      </div>
    </div>)
}
