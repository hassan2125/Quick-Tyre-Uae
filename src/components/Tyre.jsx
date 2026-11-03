export default function Tyre({ size = 400, spin = true, className = '' }) {
  const lugs = Array.from({ length: 36 }, (_, i) => i * 10)
  const spokes = Array.from({ length: 5 }, (_, i) => i * 72)
  return (
    <svg viewBox="0 0 400 400" width={size} height={size} className={`tyre ${spin ? 'spin' : ''} ${className}`} aria-hidden="true">
      <circle cx="200" cy="200" r="190" fill="#0a0a0a" stroke="#222" strokeWidth="4" />
      {lugs.map(a => <rect key={a} x="192" y="8" width="16" height="30" rx="3" fill="#1d1d1d" transform={`rotate(${a} 200 200)`} />)}
      <circle cx="200" cy="200" r="150" fill="#141414" />
      <circle cx="200" cy="200" r="132" fill="none" stroke="#ffc20e" strokeWidth="3" strokeDasharray="6 10" />
      <circle cx="200" cy="200" r="118" fill="#9aa0a6" />
      <circle cx="200" cy="200" r="108" fill="#2a2d31" />
      {spokes.map(a => <path key={a} d="M190 200 L186 100 L214 100 L210 200Z" fill="#c9ced3" transform={`rotate(${a} 200 200)`} />)}
      <circle cx="200" cy="200" r="30" fill="#ffc20e" /><circle cx="200" cy="200" r="12" fill="#111" />
    </svg>
  )
}
