import { PageHero, ServiceCard, SectionHead, FAQ, CallButtons } from '../components/Common.jsx'
import Reveal from '../components/Reveal.jsx'
import { services, extras, servicesFaqs, gallery } from '../data/site.js'
export default function Services() {
  return (<>
    <PageHero eyebrow="Services" title="Tyre services that come to you" sub="From everyday tyre changes to emergency puncture repair — all starting from AED 150." image={gallery[0].image} imageAlt={gallery[0].alt} />
    <section className="section"><div className="wrap"><div className="grid3">{services.map((s, i) => <ServiceCard key={s.slug} s={s} i={i} />)}</div></div></section>
    <section className="section dark"><div className="wrap"><SectionHead eyebrow="Also Included" title="Every visit can include" />
      <div className="grid4">{extras.map((e, i) => <Reveal key={e} delay={i * 80} className="card mini"><h3>{e}</h3><b>From AED 150</b></Reveal>)}</div></div></section>
    <section className="section"><div className="wrap"><SectionHead eyebrow="Repair or Replace?" title="We’ll tell you honestly" sub="Final recommendations always follow an inspection of the tyre and vehicle." />
      <div className="grid3 compare">
        <Reveal className="card"><h3>🔧 Usually repairable</h3><ul className="ticks"><li>Small puncture in the tread area</li><li>Slow air leak from a nail or screw</li><li>Tyre otherwise in good condition</li></ul></Reveal>
        <Reveal delay={90} className="card"><h3>🛞 Usually needs replacing</h3><ul className="ticks warn"><li>Sidewall damage or bulges</li><li>Worn-out tread</li><li>Large or repeated punctures</li></ul></Reveal>
        <Reveal delay={180} className="card hl"><h3>Not sure?</h3><p className="muted">Send a photo on WhatsApp or book a tyre inspection — we’ll advise on the spot.</p><CallButtons msg="Hi, can you check my tyre? Repair or replace?" /></Reveal>
      </div></div></section>
    <section className="section"><div className="wrap"><SectionHead eyebrow="FAQs" title="Good to know" /><FAQ items={servicesFaqs} /></div></section>
  </>)
}
