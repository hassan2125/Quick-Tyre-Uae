import { useState } from 'react'
import { sidewall } from '../data/site.js'
export default function Sidewall() {
  const [a, setA] = useState(0)
  return (
    <div className="sidewall">
      <small>Tap each part of the tyre code</small>
      <div className="code">{sidewall.map(([v], i) => <button key={i} className={i === a ? 'on' : ''} onClick={() => setA(i)} onMouseEnter={() => setA(i)}>{v}</button>)}</div>
      <div className="explain"><b>{sidewall[a][1]}</b><p>{sidewall[a][2]}</p></div>
      <p className="hint">Not sure? Send us a photo of your tyre’s sidewall on WhatsApp.</p>
    </div>)
}
