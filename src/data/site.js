export const site = { name:'Rapid Tyre Repair Dubai', phone:'050 312 5302', tel:'+971503125302', wa:'971503125302',
  email:'info@rapidtyrerepairdubai.com', address:'Al Quoz 2, Dubai', hours:'08:00 AM – 11:00 PM' }
export const waLink = (t='Hi, I need tyre change service.') => `https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`
export const stats = [{v:'24/7',l:'Roadside assistance'},{v:'10–15',l:'Min average arrival'},{v:'6,000+',l:'Customers across Dubai'},{v:'4.7★',l:'3,000+ Google reviews'}]
export const services = [
 {slug:'mobile-tyre-change',icon:'tyre',title:'Mobile Tyre Change at Home',image:'/images/mobile-tyre-change-at-home.jpg',short:'We change your tyres at your home, workplace or any suitable location in Dubai.',long:'Skip the garage queue. Share your location, car model and tyre size, and our technician arrives equipped to change your tyres on the spot.',points:['At home, office or roadside','Fitting for compatible tyres','Share location & tyre size','Book by call or WhatsApp']},
 {slug:'emergency-tyre-change',icon:'alert',title:'Emergency Tyre Change',image:'/images/emergency-tyre-change.jpg',short:'Stranded with a damaged tyre? Our team reaches you fast, day or night.',long:'When a tyre fails on the road every minute counts. Our emergency team is on call 24/7 with an average arrival of 10–15 minutes.',points:['24/7 availability','10–15 min average arrival','Roadside support','Repair or replace on site']},
 {slug:'mobile-tyre-puncture-repair',icon:'wrench',title:'Mobile Tyre Puncture Repair',image:'/images/mobile-tyre-puncture-repair.jpg',short:'Puncture fixed where you are, so you can keep driving.',long:'Our technicians inspect the damage and repair suitable punctures at your location. If a tyre cannot be repaired safely, we recommend a replacement.',points:['On-site puncture repair','Damage inspection first','Honest repair vs. replace advice','Back on the road quickly']},
 {slug:'mobile-flat-tyre-repair',icon:'pressure',title:'Mobile Flat Tyre Repair',image:'/images/mobile-flat-tyre-repair.jpg',short:'Flat tyre assistance with repair or replacement based on the damage.',long:'A flat doesn’t have to ruin your day. We assess the tyre and fix or replace it on the spot.',points:['Flat tyre assessment','Repair or replacement','Jack & tools provided','Home, work or roadside']},
 {slug:'emergency-tyre-puncture-repair',icon:'bolt',title:'Emergency Tyre Puncture Repair',image:'/images/emergency-tyre-puncture-repair.jpg',short:'Urgent puncture? Priority dispatch to get you moving again.',long:'For urgent punctures — late nights, weekends, busy roads — our emergency puncture team prioritises your call.',points:['Priority response','Weekend & evening help','Fast on-site fix','Free pick & drop if garage needed']},
 {slug:'mobile-tyre-change-replacement',icon:'replace',title:'Tyre Change & Replacement',image:'/images/tyre-change-replacement.jpg',short:'Replace worn or damaged tyres with suitable options for your vehicle.',long:'Send us your car model and tyre size and we’ll help check suitable replacement options and availability.',points:['Worn or damaged tyre replacement','Leading tyre brands','Tyre inspection','Pay online option']},
]
export const extras = ['Tyre Fitting','Flat Tyre Assistance','Roadside Tyre Change','Tyre Inspection']
export const steps = [{t:'Request Assistance',d:'Call or chat with us on WhatsApp and share your location.'},{t:'We’re On Our Way',d:'Our technicians reach you quickly, equipped and ready.'},{t:'We Fix It On-Site',d:'Puncture repaired or tyre replaced. You’re back on the road!'}]
export const tyreBrands = ['Bridgestone','Continental','Dunlop','Hankook','Michelin','Nexen','Nitto','Pirelli','Roadstone','Vredestein','Yokohama','Zeetex']
export const tyreBrandMarquee = [
 {name:'Bridgestone',image:'/images/Tyre%20Brands/bridgestone-logo.png'},
 {name:'Continental',image:'/images/Tyre%20Brands/continental-logo.png'},
 {name:'Dunlop',image:'/images/Tyre%20Brands/dunlop-logo.png'},
 {name:'Hankook',image:'/images/Tyre%20Brands/hankook-logo.png'},
 {name:'Michelin',image:'/images/Tyre%20Brands/michelin-logo.png'},
 {name:'Nexen',image:'/images/Tyre%20Brands/nexen-logo.png'},
 {name:'Nitto',image:'/images/Tyre%20Brands/nitto-logo.png'},
 {name:'Pirelli',image:'/images/Tyre%20Brands/pirelli-logo.png'},
 {name:'Roadstone',image:'/images/Tyre%20Brands/ROADSTONE.png'},
 {name:'Vredestein',image:'/images/Tyre%20Brands/Vredestein-transparent.png'},
 {name:'Yokohama',image:'/images/Tyre%20Brands/yokohama-logo.png'},
 {name:'Zeetex',image:'/images/Tyre%20Brands/Zeetex-transparent.png'},
]
export const carBrands = ['Lamborghini','Maserati','Lexus','MG','Mercedes-Benz','Opel','Audi','Mitsubishi','BMW','Tesla','Ford','Porsche','Ferrari','Nissan','Jaguar','Jeep','Hyundai','GMC']
export const areas = ['Dubai Marina','JBR','Palm Jumeirah','JLT','Emirates Hills','Greens Views','Barsha Heights','Media City','Internet City','Knowledge Village','Dubai Hills','JVC','JVT','Motor City','Al Sufouh','Arabian Ranches','Al Barari','Festival City','Creek Harbour','Golf City','Remraam','Damac Hills','Downtown Dubai']
export const reviews = [
 {n:'Muneez Kari',t:'Amazing experience. Expert workmanship, excellent customer care and reliable after-sales support.'},
 {n:'Sven Massenhove',t:'Rapid Tyre Repair Dubai fixed what others couldn’t! Professional team, outstanding service at the best rates in Dubai.'},
 {n:'Georgina Deeb',t:'Super fast! I had a flat tyre on a Sunday evening and they responded immediately.'}]
export const team = [['Faisal Khan','Tyre Mechanic'],['Arjun Kumar','Tyre Fitting Expert'],['Omar Khalid','Puncture Repair Technician'],['Mohsin Ali','Mobile Tyre Specialist'],['Arif Rahman','Wheel Balancing Technician'],['Mike','Emergency Tyre Technician']]
export const homeFaqs = [
 ['Which areas of Dubai do you cover?','We provide mobile tyre assistance across Dubai. Share your location and we’ll confirm availability.'],
 ['Can a technician come to my home or workplace?','Yes. Mobile tyre services can be arranged at home, work or another suitable location, subject to availability.'],
 ['Are emergency tyre call-outs available at night?','Roadside assistance is advertised as available 24/7. Contact us to confirm dispatch availability for your location.'],
 ['Can you repair a puncture instead of replacing the tyre?','Our technician inspects the damage first. Suitable tread punctures may be repairable; unsafe damage may require replacement.'],
 ['What should I share when requesting help?','Send your location, car make and model, tyre size if available, and a short description of the problem.'],
]
export const servicesFaqs = [
 ['What mobile tyre services can I book?','Services include mobile tyre changes, flat-tyre assistance, puncture repair and tyre replacement.'],
 ['How do you decide whether a tyre can be repaired?','A technician checks the tyre and damage. Repair is recommended only when the tyre can be repaired safely.'],
 ['What does the starting price include?','Services are listed from AED 150. The final price depends on the work, tyre requirements and availability and is confirmed before work starts.'],
 ['Can you help me choose a replacement tyre?','Share your vehicle details and tyre size and the team can check suitable options and availability.'],
 ['Do you also provide garage support?','Yes. Garage tyre repair, fitting and replacement bookings may include free pick-up and drop-off. Confirm details when booking.'],
]
export const contactFaqs = [
 ['What is the quickest way to request a call-out?','Call or message us on WhatsApp with your current location and tyre issue.'],
 ['What details do you need to confirm a booking?','Please share your location, car make and model, tyre size if known, and whether the tyre is flat, damaged or needs replacement.'],
 ['How do I find the garage?',`The garage is located in ${site.address}. Use the map link on this page for directions.`],
 ['When are you open?','The listed hours are 08:00 AM–11:00 PM. Roadside assistance is advertised as 24/7; contact us to confirm availability.'],
 ['When will I know the price?','Share your service needs and vehicle details. We confirm availability and price with you before starting work.'],
]
export const serviceFaqs = {
 'mobile-tyre-change': [
  ['Where can I book a mobile tyre change?','Request service at home, work or another suitable Dubai location, subject to availability.'],
  ['What information is needed for a mobile change?','Share your location, car model and tyre size if available so the team can check the right equipment and availability.'],
  ['Do I need to visit a garage?','No garage visit is needed for a suitable mobile tyre change; the technician comes to your agreed location.'],
  ['Can you supply replacement tyres too?','Send your car model and tyre size so the team can check suitable replacement options and availability.'],
  ['How is the final price confirmed?','The service and price are confirmed with you after your vehicle and tyre requirements are understood.'],
 ],
 'emergency-tyre-change': [
  ['What should I do before the emergency technician arrives?','Stop in a safe place away from traffic, use your hazard lights, and share your precise location when you call.'],
  ['Is emergency tyre change available around the clock?','Roadside assistance is advertised as 24/7. Contact the team to confirm a dispatch for your location.'],
  ['Can you help if the damaged tyre cannot be changed safely?','The technician will assess the situation and explain available repair or replacement options.'],
  ['How soon can help reach me?','The advertised average arrival is 10–15 minutes, but actual timing depends on location and availability.'],
  ['What details should I provide in an emergency?','Share your location, car model, tyre issue and a callback number so the team can assess the request.'],
 ],
 'mobile-tyre-puncture-repair': [
  ['Can every puncture be repaired on site?','No. The technician inspects the tyre first and repairs only damage that is safe and suitable to repair.'],
  ['Where on the tyre does the puncture matter?','Damage location and extent affect whether repair is safe; the technician needs to inspect the tyre before advising.'],
  ['Can I request repair at my home or office?','Yes, mobile puncture repair can be requested at a suitable location in Dubai, subject to availability.'],
  ['What if the tyre is not repairable?','The technician will explain why repair is not recommended and can discuss replacement options.'],
  ['What should I send when booking?','Share your location, car details and a description or photo of the damage, if it is safe to take one.'],
 ],
 'mobile-flat-tyre-repair': [
  ['Can you help with a completely flat tyre?','Yes. Request mobile assistance and the technician will assess whether repair or replacement is appropriate.'],
  ['Should I keep driving on a flat tyre?','Avoid driving on it if possible; continued driving can worsen damage. Stop somewhere safe and request assistance.'],
  ['Do you bring tools to the location?','The service information lists a jack and tools as provided for flat-tyre assistance.'],
  ['Can you come to a parking area or workplace?','A suitable home, work or roadside location can be requested; confirm access and availability when booking.'],
  ['How do you choose repair or replacement?','The technician checks the tyre condition and damage, then recommends a safe option.'],
 ],
 'emergency-tyre-puncture-repair': [
  ['Is emergency puncture help available on weekends?','The service is described as covering weekends and evenings. Contact us to confirm current dispatch availability.'],
  ['Can a puncture be fixed at the roadside?','Suitable punctures may be repaired on site after the technician inspects the tyre and confirms it is safe.'],
  ['What should I do while waiting by the roadside?','Move to a safe place away from traffic, turn on hazard lights, and share your exact location.'],
  ['What if the tyre needs more than a puncture repair?','If it cannot be repaired safely, the technician will explain replacement or garage options.'],
  ['What affects the emergency arrival time?','Location, traffic and team availability affect timing; the stated 10–15 minutes is an average, not a guarantee.'],
 ],
 'mobile-tyre-change-replacement': [
  ['How do I check which replacement tyre fits my car?','Send the car make and model plus the tyre size printed on the sidewall; the team can check suitable options.'],
  ['Can I request replacement for a worn tyre?','Yes. Share the tyre size and vehicle details to check suitable replacement options and availability.'],
  ['Do you inspect the tyre before recommending replacement?','Yes. The service includes a tyre inspection, and recommendations depend on the condition and damage.'],
  ['Are different tyre brands available?','The team can check availability for suitable options from the listed brands once you share your tyre size.'],
  ['When is the replacement price confirmed?','Availability and price are confirmed with you before work begins.'],
 ],
}
export const gallery = [
 {c:'Tyre Fitting',t:'Technician working on a vehicle wheel',image:'/images/wheel-service.jpg',alt:'Representative stock photo of a technician aligning a vehicle wheel in a tyre workshop',h:48},
 {c:'Tyre Inspection',t:'Close-up of a vehicle wheel and tyre',image:'/images/wheel-detail.jpg',alt:'Representative stock photo showing a close-up of a vehicle tyre and alloy wheel',h:30},
 {c:'Garage Support',t:'Car raised for wheel service',image:'/images/garage-service.jpg',alt:'Representative stock photo of a car raised in a workshop for wheel service',h:200},
]
export const whyUs = [
 {k:'10–15',u:'min',t:'Average arrival time',d:'Our mobile vans are dispatched fast so you are not stuck waiting at the roadside.',big:true},
 {k:'24/7',t:'Roadside assistance',d:'Day, night, weekends — call or WhatsApp anytime.'},
 {k:'✔',t:'Certified technicians',d:'Trained mechanics for puncture repair, fitting and replacement.'},
 {k:'6,000+',t:'Customers across Dubai',d:'Trusted by drivers from Marina to Downtown.'},
 {k:'FREE',t:'Pick & drop',d:'For garage tyre repair, fitting and replacement bookings.'},
 {k:'AED',t:'Pay online',d:'Simple payment once the service and price are agreed.'},
]
export const signs = [['damage','Visible damage or bulges'],['trend','Worn-down tread'],['vibration','Vibration while driving'],['pressure','Pressure that keeps dropping'],['sun','Cracks or ageing from Dubai heat'],['wrench','Nails, screws or sidewall cuts']]
export const sidewall = [['225','Section width','Width of the tyre in millimetres.'],['45','Aspect ratio','Sidewall height as a % of the width.'],['R','Construction','R means radial construction — the standard for cars.'],['17','Rim diameter','The wheel size the tyre fits, in inches.'],['94','Load index','The maximum load each tyre can carry.'],['W','Speed rating','The maximum speed the tyre is rated for.']]
