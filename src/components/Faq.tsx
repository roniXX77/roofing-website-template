import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/company'

export function Faq() {
  const [active, setActive] = useState<number | null>(0)
  return (
    <div className="border-t border-ink/15">
      {faqs.map((faq, index) => {
        const open = active === index
        return (
          <div key={faq.question} className="border-b border-ink/15">
            <button className="flex w-full items-center justify-between gap-6 py-6 text-left" onClick={() => setActive(open ? null : index)} aria-expanded={open}>
              <span className="font-display text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl">{faq.question}</span>
              <ChevronDown className={`shrink-0 text-copper transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden"><p className="max-w-3xl pb-6 leading-7 text-ink/65">{faq.answer}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
