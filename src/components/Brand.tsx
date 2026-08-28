import { House } from 'lucide-react'
import { company } from '../data/company'

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="#top" aria-label={`${company.name} home`} className="group inline-flex items-center gap-3">
      <span className={`grid h-11 w-11 place-items-center transition-colors ${inverse ? 'bg-copper text-white' : 'bg-forest text-white group-hover:bg-pine'}`}>
        <House size={24} strokeWidth={2.2} />
      </span>
      <span className="leading-none">
        <span className={`block font-display text-[1.55rem] font-extrabold uppercase tracking-[.035em] ${inverse ? 'text-white' : 'text-ink'}`}>{company.shortName}</span>
        <span className={`block text-[.63rem] font-bold uppercase tracking-[.31em] ${inverse ? 'text-white/60' : 'text-forest/65'}`}>Roofing LA</span>
      </span>
    </a>
  )
}
