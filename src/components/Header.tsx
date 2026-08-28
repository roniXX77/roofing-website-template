import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { company } from '../data/company'
import { Brand } from './Brand'

const links = ['Services', 'Projects', 'About', 'Reviews', 'Service Areas', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header id="top" className="relative z-50">
      <div className="bg-pine text-white">
        <div className="site-container flex h-10 items-center justify-between text-[.68rem] font-semibold uppercase tracking-[.13em] sm:text-xs">
          <span>Licensed &amp; Insured <span className="hidden sm:inline">• Serving Los Angeles County</span></span>
          <div className="flex items-center gap-4 sm:gap-7">
            <a className="flex items-center gap-1.5 hover:text-orange-200" href={company.phoneHref}><Phone size={13} /> <span className="hidden sm:inline">{company.phone}</span><span className="sm:hidden">Call now</span></a>
            <a href="#contact" className="hidden text-orange-200 hover:text-white sm:inline">Free Estimates</a>
          </div>
        </div>
      </div>
      <div className={`sticky top-0 z-50 w-full bg-white transition-shadow ${scrolled ? 'shadow-[0_5px_24px_rgba(17,39,32,.1)]' : ''}`}>
        <div className="site-container flex h-[82px] items-center justify-between lg:h-[92px]">
          <div className="shrink-0"><Brand /></div>
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
            {links.map((link) => <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="nav-link">{link}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="button button-primary hidden lg:inline-flex">Get a Free Estimate</a>
            <button onClick={() => setOpen(!open)} className="grid h-11 w-11 shrink-0 place-items-center border border-ink/15 text-ink xl:hidden" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-[122px] z-40 overflow-y-auto bg-white px-6 pb-12 pt-6 xl:hidden">
          <nav className="mx-auto flex max-w-xl flex-col" aria-label="Mobile navigation">
            {links.map((link) => <a key={link} onClick={() => setOpen(false)} href={`#${link.toLowerCase().replace(' ', '-')}`} className="border-b border-ink/10 py-4 font-display text-2xl font-bold uppercase tracking-wide text-ink">{link}</a>)}
            <a onClick={() => setOpen(false)} href="#contact" className="button button-primary mt-7">Get a Free Estimate</a>
            <a href={company.phoneHref} className="mt-5 flex items-center justify-center gap-2 font-bold text-forest"><Phone size={18} /> {company.phone}</a>
          </nav>
        </div>
      )}
    </header>
  )
}
