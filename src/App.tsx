import type { FormEvent } from 'react'
import {
  ArrowRight, BadgeCheck, Building2, Check, CheckCircle2, ChevronRight,
  ClipboardCheck, Clock3, CloudRain, Gem, Hammer, House,
  Layers3, Mail, MapPin, MapPinned, MenuSquare, PanelsTopLeft,
  Phone, Quote, ShieldCheck, Sparkles, Star, Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Header } from './components/Header'
import { Brand } from './components/Brand'
import { SectionHeading } from './components/SectionHeading'
import { Faq } from './components/Faq'
import { benefits, company, images, projects, serviceAreas, services, testimonials } from './data/company'

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck, Building2, ClipboardCheck, CloudRain, Gem, Hammer, House,
  Layers3, PanelsTopLeft, ShieldCheck, Sparkles, Users,
}

const navLinks = ['Services', 'Projects', 'About', 'Reviews', 'Service Areas', 'Contact']

function App() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const success = form.querySelector<HTMLElement>('[data-success]')
    if (success) success.hidden = false
    form.reset()
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-white pb-[68px] lg:pb-0">
      <Header />

      <main>
        <section className="hero relative min-h-[680px] overflow-hidden bg-ink lg:min-h-[740px]" aria-labelledby="hero-title">
          <img src={images.hero} alt="New roof on a contemporary Los Angeles home" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" fetchPriority="high" />
          <div className="hero-overlay absolute inset-0" />
          <div className="site-container relative flex min-h-[680px] items-center py-20 lg:min-h-[740px]">
            <div className="w-full min-w-0 max-w-[730px] pt-5 text-white">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.18em] text-orange-200 sm:text-sm">
                <span className="h-px w-9 bg-copper" /> Los Angeles County Roofing Experts
              </div>
              <h1 id="hero-title" className="max-w-full font-display text-[3.15rem] font-extrabold uppercase leading-[.91] tracking-[-.025em] sm:text-[5.2rem] lg:text-[6.6rem]">Los Angeles Roofing You Can Rely On.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">Roof repairs, replacements and installations backed by experienced local professionals.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="button button-accent w-full px-4 sm:w-auto sm:px-7">Get a Free Roof Inspection <ArrowRight size={18} /></a>
                <a href={company.phoneHref} className="button w-full border border-white/40 bg-white/10 px-4 text-white hover:bg-white hover:text-ink sm:w-auto sm:px-7"><Phone size={18} /> Call {company.phone}</a>
              </div>
              <div className="mt-11 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-4">
                <HeroTrust title={`${company.rating} Google Rating`} icon={<span className="text-[.7rem] tracking-[-2px] text-yellow-400">★★★★★</span>} />
                <HeroTrust title={`${company.yearsExperience} Years Experience`} icon={<Clock3 size={17} />} />
                <HeroTrust title="Licensed & Insured" icon={<BadgeCheck size={17} />} />
                <HeroTrust title={`${company.projectsCompleted} Roofs Completed`} icon={<CheckCircle2 size={17} />} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden bg-white px-10 py-5 text-ink lg:block">
            <p className="text-[.65rem] font-bold uppercase tracking-[.2em] text-ink/50">Local. Proven. Professional.</p>
            <p className="mt-1 font-display text-xl font-bold uppercase tracking-wide">Serving greater Los Angeles</p>
          </div>
        </section>

        <section aria-label="Company statistics" className="border-b border-ink/10 bg-sand">
          <div className="site-container grid grid-cols-2 divide-x divide-ink/10 lg:grid-cols-4">
            <Stat value="4.9/5" label="Google Rating" />
            <Stat value="500+" label="Completed Projects" />
            <Stat value="15+" label="Years of Experience" />
            <Stat value="100%" label="Free Estimates" />
          </div>
        </section>

        <section id="services" className="section-pad">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <SectionHeading eyebrow="What We Do" title="Roofing Services Built Around Your Home" text="From a single broken tile to a complete roofing system, every project gets experienced attention and a clear plan." />
              <a href="#contact" className="text-link shrink-0">Discuss your project <ArrowRight size={17} /></a>
            </div>
            <div className="mt-12 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon]
                return (
                  <article key={service.title} className="service-card group">
                    <div className="relative h-60 overflow-hidden bg-mist">
                      <img src={service.image} alt="" loading={index > 2 ? 'lazy' : 'eager'} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                      <span className="absolute bottom-0 left-0 grid h-14 w-14 place-items-center bg-copper text-white"><Icon size={25} /></span>
                    </div>
                    <div className="border-x border-b border-ink/12 px-6 pb-6 pt-7">
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">{service.title}</h3>
                      <p className="mt-3 min-h-[72px] leading-6 text-ink/62">{service.description}</p>
                      <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[.09em] text-forest">Learn More <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-forest text-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[420px] lg:min-h-[650px]">
              <img src={images.urgency} alt="Roofing professional inspecting shingles" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-pine/15" />
              <div className="absolute bottom-6 left-6 right-6 border-l-4 border-copper bg-white px-6 py-5 text-ink shadow-lift sm:bottom-10 sm:left-10 sm:right-auto sm:max-w-sm">
                <p className="text-sm font-bold uppercase tracking-[.13em] text-copper">Early action matters</p>
                <p className="mt-2 font-display text-2xl font-bold uppercase leading-tight">A small leak can cause hidden damage long before you see a ceiling stain.</p>
              </div>
            </div>
            <div className="flex items-center px-6 py-16 sm:px-12 lg:px-[9%] lg:py-20">
              <div className="max-w-xl">
                <SectionHeading eyebrow="Protect Your Property" title="Small Roof Problems Become Expensive Problems." light />
                <p className="mt-6 text-lg leading-8 text-white/72">Loose flashing, cracked tiles and worn shingles let water move beneath the surface. Left alone, minor damage can lead to mold, damaged decking and costly interior repairs.</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {['Active or recurring leaks', 'Missing or lifted shingles', 'Cracked tiles and flashing', 'Water marks or ceiling stains'].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className="text-orange-200" size={18} /> {item}</li>)}
                </ul>
                <a href="#contact" className="button button-accent mt-9">Schedule a Free Inspection <ArrowRight size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad bg-sand">
          <div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="The Summit Standard" title="Why Los Angeles Homeowners Choose Summit" text="Good roofing is more than materials. It is a well-run process, careful workmanship, and a team that respects your property." />
              <div className="mt-8 border-l-2 border-copper pl-6 text-sm font-semibold uppercase tracking-[.11em] text-forest">{company.tagline}</div>
            </div>
            <div className="grid border-l border-t border-ink/15 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon]
                return (
                  <div key={benefit.title} className="group border-b border-r border-ink/15 bg-white p-7 transition-colors hover:bg-forest hover:text-white sm:p-8">
                    <Icon className="text-copper" size={29} strokeWidth={1.8} />
                    <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 opacity-65">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Selected Work" title="Recent Roofing Projects" text="A look at recent residential and commercial work completed across Los Angeles County." />
              <a href="#contact" className="button button-outline shrink-0">View All Projects <ArrowRight size={17} /></a>
            </div>
            <div className="mt-12 grid auto-rows-[270px] gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <article key={project.title} className={`project-card group relative overflow-hidden bg-ink ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                  <img src={project.image} alt={`${project.title} in ${project.location}`} loading="lazy" className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.045] group-hover:opacity-75" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-7">
                    <p className="text-[.67rem] font-bold uppercase tracking-[.19em] text-orange-200">{project.location}</p>
                    <h3 className={`mt-1 font-display font-bold uppercase tracking-wide ${index === 0 ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-y border-white/10 bg-ink text-white">
          <div className="site-container">
            <SectionHeading eyebrow="How It Works" title="A Better Roofing Experience." text="No guesswork. No confusing handoffs. Just a clear path from the first inspection to the final cleanup." light />
            <div className="mt-14 grid gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', 'Free Inspection', 'We inspect the roof and explain exactly what we find.'],
                ['02', 'Clear Estimate', 'You receive straightforward pricing and recommendations.'],
                ['03', 'Professional Installation', 'Our experienced crew completes the work efficiently.'],
                ['04', 'Final Walkthrough', 'We inspect everything with you before finishing.'],
              ].map(([number, title, text], index) => (
                <div key={number} className="relative pr-8 lg:border-t lg:border-white/25 lg:pt-9">
                  <div className="mb-5 flex items-center gap-4 lg:absolute lg:-top-4 lg:left-0">
                    <span className="grid h-8 w-11 place-items-center bg-copper font-display text-lg font-bold">{number}</span>
                    {index < 3 && <span className="hidden h-px w-12 bg-white/25 lg:block" />}
                  </div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section-pad bg-mist">
          <div className="site-container">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading eyebrow="Homeowner Reviews" title="Trusted by Los Angeles Homeowners" />
              <div className="flex items-center gap-3 bg-white px-5 py-3 shadow-sm"><span className="font-display text-2xl font-bold text-ink">{company.rating}</span><Star size={19} className="fill-amber-400 text-amber-400" /><span className="text-sm font-semibold text-ink/60">Google Rating</span></div>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="relative border-t-4 border-copper bg-white p-8 shadow-[0_10px_35px_rgba(14,36,29,.06)]">
                  <Quote className="absolute right-7 top-7 text-forest/10" size={48} fill="currentColor" />
                  <div className="text-sm tracking-[2px] text-amber-400" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote className="mt-6 leading-7 text-ink/70">“{testimonial.text}”</blockquote>
                  <div className="mt-7 border-t border-ink/10 pt-5">
                    <p className="font-display text-xl font-bold uppercase tracking-wide text-ink">{testimonial.name}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[.1em] text-ink/45"><MapPin size={13} /> {testimonial.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="service-areas" className="section-pad overflow-hidden">
          <div className="site-container grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="Local Roofing Experts" title="Proudly Serving Los Angeles County" text="We provide dependable roofing service from the Westside to the Valley and throughout greater Los Angeles." />
              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">
                {serviceAreas.map((area) => <div key={area} className="flex items-center gap-2.5 border-b border-ink/10 py-2.5 text-sm font-semibold text-ink/75"><MapPin size={15} className="text-copper" /> {area}</div>)}
              </div>
              <p className="mt-7 text-sm text-ink/50">Don’t see your city? Call us—we may still be able to help.</p>
            </div>
            <div className="la-map relative min-h-[470px] bg-sand p-8 sm:p-12">
              <div className="absolute inset-5 border border-forest/10" />
              <div className="absolute left-[26%] top-[16%] h-24 w-24 rounded-full border border-copper/30" />
              <div className="absolute bottom-[21%] right-[16%] h-36 w-36 rounded-full border border-forest/15" />
              <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 600 500" aria-hidden="true"><path d="M45 310 C130 250, 170 325, 240 265 S370 250, 415 170 S505 75, 565 115" fill="none" stroke="#143f35" strokeWidth="2" strokeDasharray="7 9"/><path d="M90 80 C165 150, 145 220, 225 240 S325 345, 390 380 S500 360, 545 435" fill="none" stroke="#c56c3a" strokeWidth="2"/></svg>
              <div className="relative z-10 flex h-full min-h-[374px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[.65rem] font-bold uppercase tracking-[.2em] text-forest/50">34.0522° N, 118.2437° W</span>
                  <MapPinned className="text-copper" size={30} />
                </div>
                <div>
                  <p className="font-display text-[6rem] font-extrabold uppercase leading-[.7] tracking-[-.04em] text-forest/10 sm:text-[8rem]">LA</p>
                  <div className="mt-8 max-w-sm bg-forest p-7 text-white shadow-lift">
                    <p className="text-[.65rem] font-bold uppercase tracking-[.18em] text-orange-200">Our service radius</p>
                    <p className="mt-2 font-display text-2xl font-bold uppercase tracking-wide">Los Angeles County & nearby communities</p>
                    <a href={company.phoneHref} className="mt-5 inline-flex items-center gap-2 text-sm font-bold"><Phone size={15} /> {company.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-sand">
          <div className="site-container grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
            <SectionHeading eyebrow="Common Questions" title="Straight Answers About Your Roof" text="Still have a question? Our team is happy to talk through your roof, timeline, or material options." />
            <Faq />
          </div>
        </section>

        <section className="relative overflow-hidden bg-forest py-20 text-white sm:py-24">
          <div className="absolute -right-20 -top-36 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -bottom-48 left-[15%] h-96 w-96 rounded-full border border-copper/30" />
          <div className="site-container relative z-10 text-center">
            <p className="eyebrow text-orange-200">A Clear Answer Starts Here</p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-5xl font-extrabold uppercase leading-[.96] tracking-tight sm:text-7xl">Not Sure What Your Roof Needs?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">Schedule a free inspection and we’ll give you an honest assessment.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#contact" className="button button-accent">Get My Free Inspection <ArrowRight size={18} /></a>
              <a href={company.phoneHref} className="button border border-white/30 text-white hover:bg-white hover:text-forest"><Phone size={18} /> {company.phone}</a>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad">
          <div className="site-container grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:gap-14">
            <div className="border border-ink/12 bg-white p-6 shadow-lift sm:p-10 lg:p-12">
              <SectionHeading eyebrow="Free, No-Pressure Estimate" title="Request Your Free Roofing Estimate" text="Tell us a little about your property. A member of our local team will follow up to schedule your inspection." />
              <form className="mt-9 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                <Field label="Name" name="name" autoComplete="name" required />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field label="Property ZIP Code" name="zip" inputMode="numeric" autoComplete="postal-code" required />
                <label className="form-label sm:col-span-2">Service Needed
                  <select name="service" className="form-field" defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    {services.map((service) => <option key={service.title}>{service.title}</option>)}
                    <option>Not Sure / Inspection</option>
                  </select>
                </label>
                <label className="form-label sm:col-span-2">Message
                  <textarea name="message" rows={5} className="form-field resize-none" placeholder="Tell us about your roof or any issues you’ve noticed." />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="button button-primary w-full sm:w-auto">Request Free Estimate <ArrowRight size={18} /></button>
                  <p className="mt-4 text-xs leading-5 text-ink/45">By submitting this form, you agree to be contacted about your roofing request. No spam—ever.</p>
                  <p data-success hidden className="mt-4 border-l-4 border-forest bg-mist p-4 text-sm font-semibold text-forest">Thanks! Your request is ready. Connect this form to your preferred form provider before launch.</p>
                </div>
              </form>
            </div>
            <aside className="bg-ink p-8 text-white sm:p-10 lg:p-12">
              <p className="eyebrow text-orange-200">Contact Information</p>
              <h3 className="mt-4 font-display text-4xl font-bold uppercase leading-none">Talk With a Local Roofing Professional.</h3>
              <p className="mt-5 leading-7 text-white/60">Prefer to speak directly? Call during business hours and we’ll help you determine the best next step.</p>
              <div className="mt-9 divide-y divide-white/12 border-y border-white/12">
                <ContactItem icon={Phone} label="Phone" value={company.phone} href={company.phoneHref} />
                <ContactItem icon={Clock3} label="Business Hours" value={company.hours} />
                <ContactItem icon={MapPin} label="Service Area" value="Los Angeles County" />
                <ContactItem icon={Mail} label="Response Time" value={company.responseTime} />
              </div>
              <div className="mt-9 flex items-center gap-3 text-sm text-white/55"><ShieldCheck className="text-copper" /> Licensed &amp; insured professionals</div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-pine pb-10 pt-16 text-white">
        <div className="site-container">
          <div className="grid gap-12 border-b border-white/12 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.8fr_1fr]">
            <div>
              <Brand inverse />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Trusted residential and commercial roofing across Los Angeles County, backed by experienced crews and straightforward service.</p>
              <div className="mt-6 flex gap-3">
                {['f', 'ig', 'yt'].map((mark, index) => <a key={mark} href="#" aria-label={['Facebook', 'Instagram', 'YouTube'][index]} className="grid h-9 w-9 place-items-center border border-white/20 text-[.65rem] font-extrabold uppercase text-white/65 hover:border-copper hover:text-copper">{mark}</a>)}
              </div>
            </div>
            <FooterColumn title="Company" links={['About', 'Projects', 'Reviews', 'Contact']} />
            <FooterColumn title="Services" links={services.slice(0, 5).map((item) => item.title)} />
            <div>
              <p className="footer-title">Contact</p>
              <a href={company.phoneHref} className="mt-5 block font-display text-2xl font-bold text-white hover:text-orange-200">{company.phone}</a>
              <a href={`mailto:${company.email}`} className="mt-2 block break-all text-sm text-white/55 hover:text-white">{company.email}</a>
              <p className="mt-5 text-xs leading-5 text-white/45">{company.license}<br />Serving Los Angeles County</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {company.name}. All rights reserved.</p>
            <div className="flex gap-5"><a href="#">Privacy Policy</a><a href="#">Terms of Use</a></div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-[60] grid h-[68px] grid-cols-2 border-t border-ink/15 bg-white p-2 shadow-[0_-8px_25px_rgba(14,36,29,.12)] lg:hidden">
        <a href={company.phoneHref} className="flex items-center justify-center gap-2 font-bold text-forest"><Phone size={18} /> Call Now</a>
        <a href="#contact" className="flex items-center justify-center gap-2 bg-copper font-bold text-white"><MenuSquare size={18} /> Free Estimate</a>
      </div>
    </div>
  )
}

function HeroTrust({ icon, title }: { icon: React.ReactNode; title: string }) {
  return <div><div className="mb-2 flex h-5 items-center text-orange-200">{icon}</div><p className="text-[.67rem] font-bold uppercase leading-4 tracking-[.1em] text-white/75">{title}</p></div>
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="px-3 py-8 text-center sm:py-10"><p className="font-display text-4xl font-extrabold uppercase text-forest sm:text-5xl">{value}</p><p className="mt-1 text-[.62rem] font-bold uppercase tracking-[.16em] text-ink/48 sm:text-xs">{label}</p></div>
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; name: string }
function Field({ label, ...props }: FieldProps) {
  return <label className="form-label">{label}<input className="form-field" {...props} /></label>
}

function ContactItem({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href?: string }) {
  const content = <><Icon className="mt-1 shrink-0 text-copper" size={20} /><div><p className="text-[.62rem] font-bold uppercase tracking-[.16em] text-white/40">{label}</p><p className="mt-1 text-sm font-semibold leading-6">{value}</p></div></>
  return href ? <a href={href} className="flex gap-4 py-5 hover:text-orange-200">{content}</a> : <div className="flex gap-4 py-5">{content}</div>
}

function FooterColumn({ title, links }: { title: string; links: readonly string[] }) {
  return <div><p className="footer-title">{title}</p><ul className="mt-5 space-y-3 text-sm text-white/55">{links.map((link) => <li key={link}><a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-white">{link}</a></li>)}</ul></div>
}

export default App
