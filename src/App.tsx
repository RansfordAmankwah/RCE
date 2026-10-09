import { FormEvent, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Gem,
  Heart,
  Landmark,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { buildWhatsAppEnquiryUrl } from './whatsapp'

const images = {
  hero: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1800&q=88',
  portrait: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1100&q=88',
  tables: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=88',
  dinner: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=88',
  celebration: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=88',
  gathering: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=88',
}

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    number: '01',
    title: 'Weddings & receptions',
    text: 'A beautiful, adaptable setting to consider for ceremonies, receptions and the moments around them.',
    icon: Heart,
  },
  {
    number: '02',
    title: 'Milestones & celebrations',
    text: 'A welcoming backdrop to consider for birthdays, anniversaries and personal milestones.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Corporate gatherings',
    text: 'An elegant setting to consider for launches, dinners, team occasions and important conversations.',
    icon: Landmark,
  },
  {
    number: '04',
    title: 'Event enquiries',
    text: 'Share your occasion, preferred date and ideas, then enquire about what may be possible.',
    icon: Users,
  },
]

const galleryItems = [
  { src: images.tables, alt: 'Elegant event tables prepared for an evening celebration', className: 'md:col-span-2 md:row-span-2' },
  { src: images.dinner, alt: 'Warmly lit dining space prepared for guests', className: 'md:col-span-1 md:row-span-1' },
  { src: images.celebration, alt: 'Guests enjoying a lively event together', className: 'md:col-span-1 md:row-span-2' },
  { src: images.gathering, alt: 'People gathered in a welcoming event space', className: 'md:col-span-1 md:row-span-1' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const contact = String(formData.get('contact') ?? '').trim()
    const eventType = String(formData.get('eventType') ?? '').trim()
    const preferredDate = String(formData.get('date') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    window.open(buildWhatsAppEnquiryUrl({
      name,
      contact,
      eventType,
      preferredDate,
      details: message,
    }), '_blank', 'noopener,noreferrer')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen overflow-hidden bg-parchment text-ink">
      <header className="absolute inset-x-0 top-0 z-50 text-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <a className="group flex items-center gap-3" href="#top" aria-label="Red Carpet Events Centre home">
            <span className="flex h-10 w-10 items-center justify-center border border-white/50 text-sm font-semibold tracking-[-0.08em] transition-colors group-hover:border-champagne group-hover:text-champagne">
              RC
            </span>
            <span className="leading-none">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">Red Carpet</span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.24em]">Events Centre</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            <a className="nav-link" href="#top">Home</a>
            {navigation.map((item) => (
              <a className="nav-link" href={item.href} key={item.label}>{item.label}</a>
            ))}
          </nav>

          <a className="hidden items-center gap-2 border border-white/45 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.23em] transition hover:border-champagne hover:bg-champagne hover:text-ink sm:flex" href="#contact">
            Make an enquiry <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>

          <button
            className="flex h-11 w-11 items-center justify-center border border-white/30 sm:hidden"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-burgundy px-6 pb-6 pt-4 sm:px-10 lg:hidden" aria-label="Mobile navigation">
            <a className="mobile-nav-link" href="#top" onClick={closeMenu}>Home</a>
            {navigation.map((item) => (
              <a className="mobile-nav-link" href={item.href} key={item.label} onClick={closeMenu}>{item.label}</a>
            ))}
            <a className="mt-4 flex items-center justify-center gap-2 border border-champagne bg-champagne px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.23em] text-ink" href="#contact" onClick={closeMenu}>
              Make an enquiry <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </nav>
        )}
      </header>

      <main>
        <section id="top" className="relative isolate min-h-[760px] overflow-hidden bg-ink text-white lg:min-h-[840px]">
          <div className="absolute inset-0 z-[-2] bg-[linear-gradient(90deg,rgba(24,17,18,0.95)_0%,rgba(24,17,18,0.72)_42%,rgba(24,17,18,0.12)_100%)]" />
          <img className="absolute inset-0 z-[-3] h-full w-full object-cover object-[63%_center] opacity-85" src={images.hero} alt="Illustrative stock image of a warmly lit event hall prepared for a celebration" />
          <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(20,14,15,0.38)_0%,transparent_35%,rgba(20,14,15,0.25)_100%)]" />

          <div className="mx-auto flex min-h-[760px] max-w-[1440px] items-end px-6 pb-16 pt-36 sm:px-10 lg:min-h-[840px] lg:items-center lg:px-16 lg:pb-0">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-champagne sm:mb-8">
                <span className="h-px w-10 bg-champagne" />
                East Legon · Accra, Ghana
              </div>
              <h1 className="max-w-3xl font-display text-[4.2rem] font-light leading-[0.87] tracking-[-0.045em] text-white sm:text-[6.8rem] lg:text-[8.3rem]">
                Where memorable events take centre stage<span className="text-champagne">.</span>
              </h1>
              <p className="mt-8 max-w-md text-[15px] font-light leading-7 text-white/75 sm:mt-10 sm:text-base">
                A considered venue for the occasions that matter — from first dances to final toasts, right here in Accra.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11">
                <a className="inline-flex items-center gap-3 bg-champagne px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink transition hover:bg-white" href="#contact">
                  Plan your event <ArrowUpRight size={15} strokeWidth={1.6} />
                </a>
                <a className="inline-flex items-center gap-2 px-4 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:text-champagne" href="#gallery">
                  Explore the space <ChevronRight size={14} strokeWidth={1.5} />
                </a>
              </div>
              <p className="mt-5 max-w-xs text-[9px] leading-4 text-white/55">Illustrative image — not an actual venue photo</p>
            </div>
          </div>

          <div className="absolute bottom-7 right-6 hidden max-w-[240px] border-l border-champagne/70 pl-4 text-xs leading-5 text-white/70 lg:block lg:right-16">
            <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.27em] text-champagne">A room for every feeling</span>
            Thoughtful spaces, warm light and the freedom to make the occasion your own.
          </div>
          <a className="absolute bottom-8 left-6 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60 transition hover:text-white sm:flex lg:left-16" href="#about">
            Scroll to discover <ArrowDownRight size={15} strokeWidth={1.3} />
          </a>
        </section>

        <section className="border-b border-ink/10 bg-[#f8f5f0]" aria-label="Venue highlights">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 sm:grid-cols-4">
            <div className="highlight-cell"><span className="highlight-value text-[24px] sm:text-[30px]">Google</span><span className="highlight-label">Public listing</span></div>
            <div className="highlight-cell"><span className="highlight-value text-[24px] sm:text-[30px]">View</span><span className="highlight-label">Listing and feedback</span></div>
            <div className="highlight-cell"><span className="highlight-value text-[19px] sm:text-[22px]">East Legon</span><span className="highlight-label">Our Accra location</span></div>
            <div className="highlight-cell"><span className="highlight-value text-[19px] sm:text-[22px]">024 448 5219</span><span className="highlight-label">Call to enquire</span></div>
          </div>
        </section>

        <section id="about" className="bg-parchment px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
          <div className="mx-auto grid max-w-[1280px] items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
            <div className="relative mx-auto w-full max-w-[510px] lg:mx-0">
              <div className="absolute -left-4 -top-5 h-28 w-28 border-l border-t border-champagne sm:-left-8 sm:-top-8" />
              <div className="relative aspect-[0.83] overflow-hidden">
                <img className="h-full w-full object-cover object-center" src={images.portrait} alt="Illustrative stock image of a warmly dressed guest in an elegant celebration setting" loading="lazy" />
                <p className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] bg-ink/75 px-3 py-2 text-[9px] leading-4 text-white">Illustrative image — not an actual venue photo</p>
              </div>
              <div className="absolute -bottom-7 -right-5 w-[52%] border border-parchment bg-wine p-5 text-white sm:-right-10 sm:p-7">
                <Gem className="mb-6 text-champagne" size={22} strokeWidth={1.2} />
                <p className="font-display text-[25px] leading-[0.95] text-white sm:text-[32px]">Make it a moment worth remembering.</p>
                <span className="mt-5 block text-[9px] font-semibold uppercase tracking-[0.25em] text-white/55">Red Carpet Events Centre</span>
              </div>
            </div>

            <div>
              <p className="eyebrow"><span /> The Red Carpet feeling</p>
              <h2 className="section-title mt-6 max-w-xl">A setting that lets your occasion speak for itself<span className="text-wine">.</span></h2>
              <p className="mt-7 max-w-lg text-[15px] leading-7 text-ink/65 sm:text-base">
                There is a certain energy that arrives with a room made ready. The light is warm, the details are in place, and everyone knows they are about to be part of something special.
              </p>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-ink/65 sm:text-base">
                Red Carpet Events Centre is designed around that feeling — a polished, welcoming backdrop in East Legon for celebrations, gatherings and milestone moments in Accra.
              </p>
              <a className="mt-9 inline-flex items-center gap-3 border-b border-wine pb-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-wine transition hover:border-champagne hover:text-champagne" href="#contact">
                Start a conversation <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ink px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-12 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow text-champagne"><span className="bg-champagne" /> Made for the occasion</p>
                <h2 className="section-title mt-6 max-w-2xl text-white">Bring the idea. We’ll help set the scene<span className="text-champagne">.</span></h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-white/55">A flexible, considered setting for the moments you want to hold onto.</p>
            </div>

            <div className="grid divide-y divide-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
              {services.map(({ number, title, text, icon: Icon }) => (
                <article className="group py-9 md:px-8 md:py-10 lg:first:pl-0 lg:last:pr-0" key={number}>
                  <div className="flex items-start justify-between">
                    <span className="font-display text-2xl text-champagne/80">{number}</span>
                    <Icon className="text-white/45 transition group-hover:text-champagne" size={21} strokeWidth={1.15} />
                  </div>
                  <h3 className="mt-12 max-w-[200px] font-display text-[29px] leading-[0.95] text-white">{title}</h3>
                  <p className="mt-5 max-w-[235px] text-[13px] leading-6 text-white/55">{text}</p>
                  <a className="mt-8 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-white/55 transition group-hover:text-champagne" href="#contact">Enquire <ArrowUpRight size={13} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-[#f8f5f0] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-[1280px]">
            <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow"><span /> A sense of the setting</p>
                <h2 className="section-title mt-6 max-w-xl">The backdrop to your best stories<span className="text-wine">.</span></h2>
              </div>
              <p className="max-w-[260px] text-sm leading-6 text-ink/55">Come with a vision. Leave with a room full of possibilities.</p>
            </div>
            <div className="grid auto-rows-[170px] grid-cols-1 gap-3 sm:auto-rows-[190px] sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[170px]">
              {galleryItems.map((item, index) => (
                <figure className={`group relative overflow-hidden ${item.className}`} key={item.src}>
                  <img className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105" src={item.src} alt={item.alt} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70" />
                  <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.23em] text-white/85">
                    <span className="h-1 w-1 rounded-full bg-champagne" /> 0{index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-5 text-[10px] uppercase tracking-[0.19em] text-ink/40">Illustrative event imagery for this presentation</p>
          </div>
        </section>

        <section id="reviews" className="bg-blush px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <p className="eyebrow"><span /> A little perspective</p>
              <h2 className="section-title mt-6 max-w-lg">A thoughtful start to something memorable<span className="text-wine">.</span></h2>
              <p className="mt-10 max-w-sm font-display text-[30px] leading-[0.98] text-ink sm:text-[38px]">Explore the public listing and recent feedback on Google.</p>
              <a className="mt-10 inline-flex items-center gap-3 border-b border-wine pb-3 text-[10px] font-semibold uppercase tracking-[0.23em] text-wine transition hover:border-ink hover:text-ink" href="https://www.google.com/search?q=Red+Carpet+Events+Centre+Accra" target="_blank" rel="noreferrer">
                View the Google listing <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
            <div className="relative border-y border-ink/15 py-10 sm:py-14 lg:px-12">
              <Sparkles className="absolute -top-4 left-0 bg-blush pr-3 text-wine" size={35} strokeWidth={1.1} />
              <p className="font-display text-[34px] leading-[0.98] text-ink sm:text-[46px]">The right setting gives your next occasion room to become its own story.</p>
              <div className="mt-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.23em] text-ink/50"><span className="h-px w-8 bg-wine" /> Your next occasion starts here</div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-wine px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-36">
          <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="eyebrow text-champagne"><span className="bg-champagne" /> Your occasion, from here</p>
              <h2 className="section-title mt-6 max-w-lg text-white">Let’s make room for something memorable<span className="text-champagne">.</span></h2>
              <p className="mt-7 max-w-md text-[15px] leading-7 text-white/65">Tell us a little about what you are planning. We’ll start with the details that matter and take it from there.</p>
              <div className="mt-12 space-y-6 border-t border-white/15 pt-7">
                <a className="contact-detail" href="tel:+233244485219"><Phone size={17} strokeWidth={1.25} /><span><small>Call us</small>024 448 5219</span><ArrowUpRight size={15} className="ml-auto text-champagne" /></a>
                <a className="contact-detail" href="https://www.google.com/maps/search/?api=1&query=East+Legon+Boundary+Road%2C+Accra%2C+Ghana" target="_blank" rel="noreferrer"><Landmark size={17} strokeWidth={1.25} /><span><small>Find us</small>East Legon Boundary Road<br />Accra, Ghana</span><ArrowUpRight size={15} className="ml-auto text-champagne" /></a>
                <a className="contact-detail" href="https://wa.me/233244485219" target="_blank" rel="noreferrer"><MessageCircle size={17} strokeWidth={1.25} /><span><small>WhatsApp</small>Message us directly</span><ArrowUpRight size={15} className="ml-auto text-champagne" /></a>
              </div>
            </div>

            <div className="bg-[#f8f5f0] p-6 text-ink sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit}>
                  <div className="mb-9 flex items-start justify-between border-b border-ink/15 pb-6"><div><p className="eyebrow"><span /> Make an enquiry</p><h3 className="mt-3 font-display text-[34px] leading-none">Tell us about your event<span className="text-wine">.</span></h3></div><MessageCircle className="mt-1 text-wine" size={25} strokeWidth={1.1} /></div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="field-label">Your name<input required className="field-input" type="text" name="name" placeholder="Full name" /></label>
                    <label className="field-label">Email or phone<input required className="field-input" type="text" name="contact" placeholder="How can we reach you?" /></label>
                    <label className="field-label">Event type<select required className="field-input" name="eventType" defaultValue=""><option value="" disabled>Select one</option><option>Wedding or reception</option><option>Birthday or milestone</option><option>Corporate gathering</option><option>Other occasion</option></select><ChevronDown className="pointer-events-none absolute bottom-3 right-0 text-ink/45" size={16} /></label>
                    <label className="field-label">Preferred date<input className="field-input" type="text" name="date" placeholder="DD / MM / YYYY" /></label>
                  </div>
                  <label className="field-label mt-6">A few details<textarea className="field-input min-h-[100px] resize-y" name="message" placeholder="Guest count, timing or anything you already have in mind..." /></label>
                  <button className="mt-8 inline-flex items-center gap-3 bg-wine px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-ink" type="submit">Continue on WhatsApp <ArrowUpRight size={15} strokeWidth={1.5} /></button>
                </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#24151b] px-6 py-10 text-white sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><a className="flex items-center gap-3" href="#top"><span className="flex h-9 w-9 items-center justify-center border border-white/50 text-xs font-semibold tracking-[-0.08em]">RC</span><span className="text-[10px] font-semibold uppercase tracking-[0.24em]">Red Carpet Events Centre</span></a><p className="mt-5 text-xs text-white/40">A memorable setting in East Legon, Accra.</p><p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/30">Website design concept by Ransford Amankwah</p></div>
          <div className="flex items-center gap-6"><a className="text-white/50 transition hover:text-champagne" href="tel:+233244485219" aria-label="Phone"><Phone size={17} strokeWidth={1.4} /></a><span className="text-[9px] uppercase tracking-[0.2em] text-white/35">© {new Date().getFullYear()} Red Carpet Events Centre</span></div>
        </div>
      </footer>
    </div>
  )
}

export default App
