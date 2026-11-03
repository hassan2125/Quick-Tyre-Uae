import { useState } from 'react'
import Reveal from './Reveal.jsx'
const Wheel = ({ x, y, r = 34 }) => (<g><circle cx={x} cy={y} r={r} fill="#10243f" /><circle cx={x} cy={y} r={r * .62} fill="#aab6c8" />{[0, 72, 144, 216, 288].map(a => <rect key={a} x={x - 2} y={y - r * .6} width="4" height={r * .4} fill="#10243f" transform={`rotate(${a} ${x} ${y})`} />)}<circle cx={x} cy={y} r={r * .2} fill="#ffc20e" /></g>)
const Car = ({ x = 60, y = 150, c = '#2f7bff', front = true }) => (<g transform={`translate(${x} ${y})`}><path d="M0 70 L10 42 Q22 20 62 18 L150 18 Q186 22 200 48 L216 56 Q224 62 222 70Z" fill={c} /><path d="M30 42 L52 25 L100 25 L100 42Z M108 25 L148 25 Q168 29 180 42 L108 42Z" fill="#dff0ff" /><Wheel x={50} y={72} r={22} />{front && <Wheel x={172} y={72} r={22} />}</g>)
const Road = ({ c = '#2b3a4e', y = 232 }) => (<g><rect y={y} width="400" height={300 - y} fill={c} /><path d={`M0 ${y + 34}H400`} stroke="#ffc20e" strokeWidth="3" strokeDasharray="22 16" /></g>)
const Person = ({ x, y }) => (<g transform={`translate(${x} ${y})`}><circle cx="0" cy="0" r="9" fill="#f1c9a5" /><path d="M-9 -3 Q0 -16 9 -3Z" fill="#ffc20e" /><rect x="-10" y="10" width="20" height="34" rx="6" fill="#0f3d8a" /><rect x="-9" y="44" width="7" height="22" fill="#10243f" /><rect x="2" y="44" width="7" height="22" fill="#10243f" /></g>)
const scenes = {
  roadside: <g><rect width="400" height="300" fill="#cfe3ff" /><circle cx="330" cy="60" r="30" fill="#ffd23f" /><Road /><Car x={70} y={158} front={false} /><rect x="235" y="205" width="26" height="26" fill="#5b6b7f" /><Wheel x={285} y={212} r={30} /><Person x={200} y={178} /><path d="M345 232 L358 190 L371 232Z" fill="#ff6a3d" /></g>,
  home: <g><rect width="400" height="300" fill="#fde9b8" /><rect x="20" y="110" width="140" height="122" fill="#fff" /><path d="M10 112 L90 58 L170 112Z" fill="#e8352b" /><rect x="70" y="160" width="40" height="72" fill="#0f3d8a" /><Road y={232} /><g transform="translate(180 150)"><rect width="190" height="70" rx="10" fill="#fff" stroke="#0d2342" strokeWidth="3" /><rect x="130" y="8" width="52" height="30" fill="#dff0ff" /><text x="18" y="44" fontSize="24" fontWeight="800" fill="#0f3d8a">QUICK TYRES</text><Wheel x={40} y={72} r={20} /><Wheel x={150} y={72} r={20} /></g></g>,
  puncture: <g><rect width="400" height="300" fill="#e8eefa" /><circle cx="200" cy="150" r="105" fill="#10243f" /><circle cx="200" cy="150" r="62" fill="#aab6c8" /><circle cx="200" cy="150" r="14" fill="#ffc20e" /><line x1="262" y1="82" x2="238" y2="100" stroke="#8a97a8" strokeWidth="6" /><circle cx="266" cy="79" r="9" fill="#5b6b7f" /><rect x="214" y="204" width="46" height="26" rx="6" fill="#ffc20e" transform="rotate(-18 237 217)" /><circle cx="300" cy="215" r="34" fill="none" stroke="#e8352b" strokeWidth="7" /><line x1="324" y1="240" x2="350" y2="266" stroke="#e8352b" strokeWidth="9" strokeLinecap="round" /></g>,
  inspect: <g><rect width="400" height="300" fill="#dbe7ff" /><Wheel x={120} y={160} r={92} /><g transform="translate(300 150)"><circle r="68" fill="#fff" stroke="#0d2342" strokeWidth="6" /><path d="M-48 20 A52 52 0 0 1 48 20" fill="none" stroke="#1fbf6a" strokeWidth="10" /><line x1="0" y1="0" x2="30" y2="-30" stroke="#e8352b" strokeWidth="5" strokeLinecap="round"><animateTransform attributeName="transform" type="rotate" values="-30;25;-30" dur="4s" repeatCount="indefinite" /></line><circle r="7" fill="#0d2342" /><text y="48" fontSize="14" textAnchor="middle" fontWeight="700" fill="#0d2342">PSI</text></g></g>,
  luxury: <g><rect width="400" height="300" fill="#0d2342" /><ellipse cx="200" cy="245" rx="170" ry="22" fill="#2f7bff" opacity=".35" />{[[60, 50], [330, 70], [250, 36], [120, 90]].map(([a, b], i) => <circle key={i} cx={a} cy={b} r="3" fill="#ffd23f"><animate attributeName="opacity" values="1;.2;1" dur={`${2 + i}s`} repeatCount="indefinite" /></circle>)}<Car x={90} y={150} c="#c9d3e3" /><Person x={60} y={185} /></g>,
  night: <g><rect width="400" height="300" fill="#0b1b36" /><circle cx="320" cy="55" r="24" fill="#f4f0d6" />{[40, 120, 200, 260].map((a, i) => <circle key={a} cx={a} cy={30 + i * 14} r="2" fill="#fff" />)}<Road c="#1a2a42" /><Car x={60} y={158} c="#e8352b" /><circle cx="64" cy="215" r="9" fill="#ff9d00"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></circle><circle cx="278" cy="215" r="9" fill="#ff9d00"><animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" /></circle><g transform="translate(300 170)"><rect width="80" height="50" rx="8" fill="#fff" /><circle cx="20" cy="-6" r="8" fill="#e8352b"><animate attributeName="opacity" values="1;.1;1" dur=".6s" repeatCount="indefinite" /></circle><circle cx="46" cy="-6" r="8" fill="#2f7bff"><animate attributeName="opacity" values=".1;1;.1" dur=".6s" repeatCount="indefinite" /></circle></g></g>,
}
const serviceScenes = {
  'mobile-tyre-change': 'home',
  'emergency-tyre-change': 'night',
  'mobile-tyre-puncture-repair': 'puncture',
  'mobile-flat-tyre-repair': 'roadside',
  'emergency-tyre-puncture-repair': 'night',
  'mobile-tyre-change-replacement': 'luxury',
}
export function ServiceIllustration({ slug, title }) {
  const scene = serviceScenes[slug] || 'roadside'
  return <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${title} illustration`}>{scenes[scene]}</svg>
}
const items = [['roadside', 'Roadside tyre change', 'On the road'], ['home', 'Mobile service at home', 'Mobile van'], ['puncture', 'Puncture repair', 'On-site repair'], ['inspect', 'Pressure & condition check', 'Inspection'], ['luxury', 'Luxury car tyre fitting', 'Fitting'], ['night', 'Emergency night call-out', '24/7']]
export default function WorkGallery({ offset = 0 }) {
  const [lb, setLb] = useState(null)
  const list = items.map((_, i) => items[(i + offset) % items.length])
  return (<>
    <div className="work-grid">{list.map(([k, t, c], i) => (
      <Reveal key={k} delay={i * 70}><button className="work-card" onClick={() => setLb([k, t, c])} aria-label={t}>
        <svg viewBox="0 0 400 300" role="img" aria-label={t}>{scenes[k]}</svg><span className="cap"><small>{c}</small>{t}</span></button></Reveal>))}</div>
    <p className="work-note">Illustrated previews — replace with real job photos from the team.</p>
    {lb && <div className="lightbox" onClick={() => setLb(null)}><div className="lb-card"><svg viewBox="0 0 400 300">{scenes[lb[0]]}</svg><h3>{lb[1]}</h3><p>Tap anywhere to close</p></div></div>}
  </>)
}
