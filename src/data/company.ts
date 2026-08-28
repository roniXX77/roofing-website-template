export const company = {
  name: 'Summit Roofing LA',
  shortName: 'Summit',
  tagline: 'Protecting Los Angeles, One Roof at a Time.',
  phone: '(323) 555-0187',
  phoneHref: 'tel:+13235550187',
  email: 'estimates@summitroofingla.com',
  license: 'CA License #000000 (Placeholder)',
  rating: '4.9',
  reviewCount: 187,
  yearsExperience: '15+',
  projectsCompleted: '500+',
  hours: 'Mon–Sat, 7:00 AM–6:00 PM',
  responseTime: 'Typically within one business day',
} as const

export const images = {
  hero: '/images/summit-roofing-hero.png',
  urgency: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1600&q=85',
  crew: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=85',
} as const

export const services = [
  { title: 'Roof Repair', description: 'Targeted repairs for leaks, damaged shingles, flashing and storm-related issues.', image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80', icon: 'Hammer' },
  { title: 'Roof Replacement', description: 'Complete roofing systems installed with premium materials and careful craftsmanship.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', icon: 'House' },
  { title: 'New Roof Installation', description: 'Long-lasting roofing for additions and new construction, built to California code.', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', icon: 'PanelsTopLeft' },
  { title: 'Flat Roofing', description: 'Energy-efficient flat and low-slope roofing systems for LA properties.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80', icon: 'Layers3' },
  { title: 'Commercial Roofing', description: 'Reliable commercial solutions designed around your property and operations.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', icon: 'Building2' },
  { title: 'Emergency Roof Repair', description: 'Fast help to secure active leaks and prevent further interior damage.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80', icon: 'CloudRain' },
] as const

export const benefits = [
  { title: 'Licensed & Insured', description: 'Professional protection for your home and your peace of mind.', icon: 'BadgeCheck' },
  { title: 'Transparent Estimates', description: 'Clear recommendations and straightforward pricing before work begins.', icon: 'ClipboardCheck' },
  { title: 'Experienced Local Crews', description: 'Skilled roofers who understand LA homes, codes and climate.', icon: 'Users' },
  { title: 'Premium Materials', description: 'Proven roofing systems selected for performance and longevity.', icon: 'Gem' },
  { title: 'Clean Job Sites', description: 'Daily cleanup and careful protection of landscaping and property.', icon: 'Sparkles' },
  { title: 'Workmanship Warranty', description: 'Our installation is backed long after the final walkthrough.', icon: 'ShieldCheck' },
] as const

export const projects = [
  { title: 'Shingle Roof Replacement', location: 'Pasadena', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Flat Roof Restoration', location: 'Los Angeles', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Tile Roof Repair', location: 'Beverly Hills', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Residential Re-Roof', location: 'Glendale', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Commercial Flat Roof', location: 'Downtown LA', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Roof Replacement', location: 'Santa Monica', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85' },
] as const

export const testimonials = [
  { name: 'Maria G.', location: 'Highland Park', text: 'Summit explained the source of our leak clearly and showed us photos before and after the repair. The crew was punctual, respectful, and left the driveway spotless.' },
  { name: 'David R.', location: 'Sherman Oaks', text: 'We received three estimates and Summit’s was the most thorough—not the cheapest or the highest. Communication stayed excellent from inspection through the final walkthrough.' },
  { name: 'Alicia T.', location: 'Culver City', text: 'Our new roof looks great. The team protected our garden, cleaned up every afternoon, and finished when they said they would. A very professional experience.' },
] as const

export const serviceAreas = ['Los Angeles', 'Beverly Hills', 'Santa Monica', 'Pasadena', 'Glendale', 'Burbank', 'Culver City', 'West Hollywood', 'Sherman Oaks', 'Encino', 'Woodland Hills', 'Long Beach'] as const

export const faqs = [
  { question: 'How much does a new roof cost in Los Angeles?', answer: 'Roof cost depends on size, pitch, access, material and the condition of the existing deck. After a free inspection, we provide a written estimate with clear options—no vague allowances or surprise fees.' },
  { question: 'How do I know whether I need repair or replacement?', answer: 'Isolated damage can often be repaired. Widespread wear, recurring leaks, brittle materials or an aging roof may make replacement the better value. We will show you what we find and explain both options honestly.' },
  { question: 'Do you offer free roof inspections?', answer: 'Yes. Inspections and roofing estimates are free for residential and commercial properties throughout our Los Angeles County service area.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Summit Roofing LA is presented as a fully licensed and insured contractor. Replace the placeholder license number in the company data file before publishing this template.' },
  { question: 'How long does a roof replacement take?', answer: 'Many residential replacements take two to five working days. Larger roofs, specialty materials, repairs to the roof deck and weather can affect the schedule.' },
  { question: 'What roofing materials do you install?', answer: 'We work with architectural shingles, tile, standing-seam metal and modern flat-roof systems. We recommend materials based on your home, budget, design goals and energy needs.' },
  { question: 'Do you handle emergency roof repairs?', answer: 'Yes. Call us for active leaks or storm damage. We can help secure the roof, limit further water intrusion and plan the permanent repair.' },
] as const
