import { useState } from 'react'
import { BookingForm, CallButtons, PageHero, ReviewCarousel, SectionHead } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import { reviews, steps } from '../data/site.js'

const galleryImages = [
  { category: 'Tyre Change', image: '/images/mobile-tyre-change-at-home.jpg', alt: 'Mobile technician changing a car tyre at home', h: 70 },
  { category: 'Flat Tyre Assistance', image: '/images/emergency-tyre-change.jpg', alt: 'Emergency tyre change in progress', h: 30 },
  { category: 'Puncture Repair', image: '/images/mobile-tyre-puncture-repair.jpg', alt: 'Technician inspecting a punctured tyre', h: 85 },
  { category: 'Flat Tyre Assistance', image: '/images/mobile-flat-tyre-repair.jpg', alt: 'Mobile assistance for a flat car tyre', h: 45 },
  { category: 'Puncture Repair', image: '/images/emergency-tyre-puncture-repair.jpg', alt: 'Emergency tyre puncture repair', h: 70 },
  { category: 'Tyre Replacement', image: '/images/tyre-change-replacement.jpg', alt: 'Tyre change and replacement service', h: 55 },
  { category: 'Workshop & Fitting', image: '/images/wheel-service.jpg', alt: 'Technician servicing a vehicle wheel', h: 70 },
  { category: 'Workshop & Fitting', image: '/images/wheel-detail.jpg', alt: 'Close view of a tyre and alloy wheel', h: 35 },
  { category: 'Tyre Replacement', image: '/images/replacement-service.jpg', alt: 'Mechanic fitting a replacement tyre', h: 85 },
  { category: 'Puncture Repair', image: '/images/puncture-repair.jpg', alt: 'Close-up of a technician repairing a tyre', h: 100 },
  { category: 'Flat Tyre Assistance', image: '/images/mechanic-change.jpg', alt: 'Mechanic changing a vehicle wheel', h: 75 },
  { category: 'Puncture Repair', image: '/images/mechanic-puncture.jpg', alt: 'Technician repairing a wheel at the roadside', h: 75 },
  { category: 'Tyre Change', image: '/images/tyre-change.webp', alt: 'Tyre change in progress at a workshop', h: 60 },
  { category: 'Tyre Replacement', image: '/images/tyre-replacement.webp', alt: 'Technician fitting a new tyre', h: 90 },
  { category: 'Mobile Assistance', image: '/images/roadside-hero.webp', alt: 'Mobile tyre service van at a roadside location', h: 75 },
  { category: 'Workshop & Fitting', image: '/images/service-step.webp', alt: 'Wheel fitting equipment in use', h: 50 },
  { category: 'Tyre Change', image: '/images/download-2.webp', alt: 'Technician using a powered wrench on a car wheel', h: 50 },
  { category: 'Mobile Assistance', image: '/images/about-intro-service.webp', alt: 'Mobile technician changing a tyre beside the service van in Dubai', h: 85 },
]

const filters = ['All', ...new Set(galleryImages.map(item => item.category))]

export default function Gallery() {
  const [category, setCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState(null)
  const images = galleryImages.filter(item => category === 'All' || item.category === category)

  return (<>
    <PageHero
      eyebrow="Gallery"
      title="Tyre service gallery"
      sub="Browse illustrative photos of tyre changes, puncture repairs and mobile service. These are not photos of customer jobs."
    />
    <section className="section"><div className="wrap">
      <div className="filters" aria-label="Filter gallery images">
        {filters.map(item => <button key={item} type="button" className={item === category ? 'on' : ''} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}
      </div>
      <div className="masonry">
        {images.map((item, i) => (
          <Reveal key={item.image} delay={(i % 3) * 50}>
            <button type="button" className="tile gallery-image-card" style={{ '--h': item.h }} aria-label={`View image: ${item.alt}`} onClick={() => setLightboxImage(item)}>
              <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
            </button>
          </Reveal>))}
      </div>
    </div></section>

    {lightboxImage && <div className="lightbox gallery-lightbox" onClick={() => setLightboxImage(null)}>
      <div className="gallery-lightbox-card" role="dialog" aria-modal="true" aria-label="Gallery image preview" onClick={event => event.stopPropagation()}>
        <button type="button" className="gallery-lightbox-close" aria-label="Close image preview" onClick={() => setLightboxImage(null)}>×</button>
        <img src={lightboxImage.image} alt={lightboxImage.alt} />
      </div>
    </div>}

    <section className="section dark"><div className="wrap">
      <SectionHead eyebrow="How It Works" title="Back on the road in 3 steps" center />
      <div className="steps">{steps.map((step, i) => <Reveal key={step.t} delay={i * 120} className="step"><span>{i + 1}</span><h3>{step.t}</h3><p>{step.d}</p></Reveal>)}</div>
    </div></section>

    <section className="section alt"><div className="wrap">
      <SectionHead eyebrow="Testimonials" title="What customers say" sub="Rated 4.7★ by 3,000+ Google reviewers." />
      <ReviewCarousel reviews={reviews} />
    </div></section>

    <section className="section gallery-contact-section"><div className="wrap split">
      <div><SectionHead eyebrow="Get in Touch" title="Need tyre assistance?" sub="Tell us what you need and we’ll confirm availability and price." /><CallButtons /></div>
      <Reveal delay={150}><BookingForm /></Reveal>
    </div></section>
  </>)
}
