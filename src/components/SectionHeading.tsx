export function SectionHeading({ eyebrow, title, text, light = false, center = false }: { eyebrow: string; title: string; text?: string; light?: boolean; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`eyebrow ${light ? 'text-orange-200' : 'text-copper'}`}>{eyebrow}</p>
      <h2 className={`section-title mt-3 ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-7 sm:text-lg ${light ? 'text-white/72' : 'text-ink/65'}`}>{text}</p>}
    </div>
  )
}
