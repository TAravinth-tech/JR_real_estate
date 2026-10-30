import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
const jrcplLogo = "/jrcpl-logo.png";
const jrcplHero = "/big_image.jpg";
const jrcplMd = "/jrcpl-md.jpg";
const clientMorth = "/client-morth.jpg";
const clientNhai = "/client-nhai.jpg";
const clientCpwd = "/client-cpwd.png";
const clientMsrdc = "/client-msrdc.jpg";
const clientTn = "/client-tn.jpg";
const clientNaidcl = "/client-naidcl.jpg";
const office3 = "/office-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "JR Consultancy Services Pvt. Ltd. — Infrastructure Consultancy, Madurai",
      },
      {
        name: "description",
        content:
          "JR Consultancy Services Private Limited (JRCPL) — integrated infrastructure consultancy from Madurai, Tamil Nadu. Detailed Project Reports, design, construction supervision and material testing for roads, bridges and highways across India.",
      },
      {
        property: "og:title",
        content: "JR Consultancy Services Pvt. Ltd. — Infrastructure Consultancy",
      },
      {
        property: "og:description",
        content:
          "DPR, design, construction supervision and material testing for roads, bridges and highways. Madurai head office, Chennai regional office, site offices across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

// Single place to change the company tagline (shown in the About section).
const TAGLINE = "Building better tomorrows.";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Detailed Project Report",
    body: "Modern, innovative survey methods to capture the most accurate project details for roads and other infrastructure.",
    points: [
      "Total station surveys",
      "Quadcopter aerial views",
      "Integrated cloud data management",
    ],
  },
  {
    num: "02",
    title: "Construction Supervision",
    body: "Specialised tools and techniques to monitor contractors' physical and financial progress — so bills always match reality on the ground.",
    points: [
      "Timely progress checks",
      "Physical vs. financial parity",
      "Quality assurance on site",
    ],
  },
  {
    num: "03",
    title: "Design & Drawings",
    body: "One of the finest design teams in the field, ensuring drawings comply with industry-standard safety rules and stand the test of time.",
    points: [
      "Safety-standard compliance",
      "Infrastructure longevity",
      "Design approvals handled end-to-end",
    ],
  },
  {
    num: "04",
    title: "Material Testing",
    body: "Road and building material testing through our group company, Jancy Labs Private Limited, keeping every site within safety standards.",
    points: [
      "Road material testing",
      "Building material testing",
      "Group company: Jancy Labs Pvt. Ltd.",
    ],
  },
];

const STATS = [
  { value: "2015", label: "Founded in Madurai" },
  { value: "50+", label: "In-house key persons" },
  { value: "6", label: "Government authorities served" },
  { value: "100%", label: "Responsibility — Everything on Us" },
];

const LEADERS = [
  {
    name: "Mr. S. Ovu Reddy",
    role: "Managing Director",
    credentials: "M.Tech., MBA",
    note: "A retired Executive Engineer of the Tamil Nadu National Highways Department, he laid the foundation of JRCPL in 2015 to keep serving the Government with best-in-class consultancy.",
    photo: jrcplMd,
  },
  {
    name: "Mrs. O. Jansi Rani",
    role: "Director",
    credentials: "B.E.",
    note: "The mind behind JRCPL's diversification throughout India, guiding major financial and technological decisions and keeping every member of the team motivated.",
    photo: null,
  },
  {
    name: "Mr. O. Saravana Kumar",
    role: "Director",
    credentials: "B.E.",
    note: "The backbone of JRCPL, whose precise management skills have grown the company's footprint across the nation in a short time.",
    photo: null,
  },
  {
    name: "Mr. O. Santhosh Kumar",
    role: "Director",
    credentials: "B.E., MBA",
    note: "The backbone of JRCPL, whose talent for business and administration has taken the company's wings across the nation.",
    photo: null,
  },
];

const CLIENTS = [
  { name: "Ministry of Road Transport & Highways", logo: clientMorth },
  { name: "National Highways Authority of India", logo: clientNhai },
  { name: "Central Public Works Department", logo: clientCpwd },
  { name: "Maharashtra State Road Development Corporation", logo: clientMsrdc },
  { name: "Government of Tamil Nadu", logo: clientTn },
  { name: "National Highways & Infrastructure Development Corporation", logo: clientNaidcl },
];

const CAPABILITIES = [
  "Detailed Project Reports",
  "Feasibility Reports",
  "Estimation",
  "Design",
  "Construction Supervision",
  "Traffic Analysis",
  "Financial Analysis",
  "Quality Control",
  "Project Management",
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Services />
        <div className="divider-wood" aria-hidden />
        <Leadership />
        <Clients />
        <div className="divider-wood" aria-hidden />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-primary/30 bg-navy/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={jrcplLogo}
            alt="JRCPL logo"
            className="h-12 w-12 rounded-full bg-white/90 p-0.5"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-white">JR Consultancy</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              Services Pvt. Ltd.
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5">
            Enquire Now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-white/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Enquire Now
          </a>
        </nav>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-navy">
      <img
        src={jrcplHero}
        fetchPriority="high"
        decoding="async"
        alt="Aerial view of a completed national highway built under JRCPL supervision"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-40 sm:px-6 lg:px-8">
        <p className="eyebrow text-white/70">
          JR Consultancy Services Pvt. Ltd. · Madurai · Est. 2015
        </p>
        <h1 className="display-title mt-6 max-w-3xl text-5xl text-white sm:text-6xl lg:text-7xl">
          India's highways,
          <br />
          <span className="display-accent text-primary">engineered</span> end to end.
        </h1>
        <p className="mt-8 max-w-xl border-l-2 border-primary/60 pl-5 text-lg leading-relaxed text-white/80">
          One of India's fastest-growing infrastructure consultancy firms — detailed project
          reports, design, construction supervision and quality testing across roads, bridges,
          railways and expressways, all over the country.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a href="#services" className="btn-primary">
            Explore Services
            <span aria-hidden>→</span>
          </a>
          <a href="#clients" className="btn-ghost-light">
            Our Clients
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

function StatsBand() {
  return (
    <section className="border-y border-primary/40 bg-wood-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="display-title text-4xl text-primary sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Shared section heading                                              */
/* ------------------------------------------------------------------ */

function SectionHeading({
  index,
  kicker,
  children,
}: {
  index: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-4">
        <span className="font-display text-sm italic text-gold-deep">[{index}]</span>
        <span className="eyebrow text-muted-foreground">{kicker}</span>
      </div>
      <h2 className="display-title mt-5 text-4xl sm:text-5xl">{children}</h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading index="01" kicker="What is JRCPL?">
              Everything on us.
              <br />
              <span className="display-accent text-gold-deep">Literally.</span>
            </SectionHeading>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                JR Consultancy Services Pvt. Ltd. (JRCPL) is one of India's fastest-growing premier
                infrastructure consultancy firms, with a presence all over the country. We provide
                integrated infrastructure solutions across transportation, roads, bridges, railways,
                traffic analysis, financial analysis, quality control and project management.
              </p>
              <p>
                From small beginnings in rented premises, the company now owns a corporate-style
                head office in the holy city of Madurai, a regional office in Chennai, and site
                offices across the country — supported by more than 50 in-house key persons pooling
                their ideas and efforts.
              </p>
              <p>
                We believe in one simple promise:{" "}
                <strong className="text-foreground">"Everything on Us."</strong> Once you partner
                with us, you need not worry about any procedure — financial, technical or site
                inspections. Design approvals, land-acquisition issues, quality approvals, billing
                and follow-up — all of it is on us.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {CAPABILITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground"
                >
                  {c}
                </span>
              ))}
            </div>

            <a href="#services" className="btn-ghost-dark mt-10">
              See how we help
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              <figure className="col-span-5 border border-primary/50 bg-navy p-1.5 shadow-xl">
                <img
                  src="/Warm1.png"
                  alt="Executive cabin feature wall: black wallpaper with gold veining, walnut panelling and gold-framed signage"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1060/366] w-full object-cover"
                />
              </figure>
              <figure className="col-span-2 row-span-2 border border-primary/50 bg-navy p-1.5 shadow-xl">
                <img
                  src="/interior-wall-3.jpg"
                  alt="Fluted walnut panel beside a gold-veined wall with framed construction artwork and cove lighting"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </figure>
              <figure className="col-span-3 flex border border-primary/50 bg-navy p-1.5 shadow-xl">
                <img
                  src="/interior-wall-2.jpg"
                  alt="Walnut fluted panelling with warm wall sconces and geometric gold wallpaper"
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-0 w-full object-cover"
                />
              </figure>
              <div className="col-span-3 flex items-center justify-center border border-primary/50 bg-navy p-8 text-center shadow-xl">
                <p className="font-display text-xl italic leading-snug text-primary">{TAGLINE}</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow text-gold-deep">Signature finishes</p>
              <ul className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { cls: "finish-walnut", label: "Fluted walnut" },
                  { cls: "finish-noir", label: "Gold-veined noir" },
                  { cls: "finish-brass", label: "Brushed brass" },
                ].map((f) => (
                  <li key={f.label}>
                    <div className={`${f.cls} h-16 border border-primary/50 shadow-md`} />
                    <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="services" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="02" kicker="Our Services">
            Four disciplines.
            <br />
            <span className="display-accent text-gold-deep">One accountable partner.</span>
          </SectionHeading>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Whether a project is big or small, the burden of planning, analysis and approvals stays
            the same. JRCPL takes all of it — at a very reasonable price.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {SERVICES.map((s) => (
            <article
              key={s.num}
              className="group bg-card p-8 transition-colors hover:bg-accent lg:p-12"
            >
              <span className="font-display text-lg italic text-gold-deep">[{s.num}]</span>
              <h3 className="display-title mt-4 text-2xl text-foreground">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership                                                          */
/* ------------------------------------------------------------------ */

function Leadership() {
  return (
    <section id="leadership" className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4">
              <span className="font-display text-sm italic text-primary">[03]</span>
              <span className="eyebrow text-white/60">The Leads</span>
            </div>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl">
              The people behind
              <br />
              <span className="display-accent text-primary">the rise of JRCPL.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            A family of engineers and administrators — the foundation, the diversification and the
            backbone of the company.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {LEADERS.map((l, i) => (
            <article
              key={l.name}
              className={`flex flex-col border border-white/10 p-8 transition-colors hover:border-primary/50 ${
                l.photo
                  ? "sm:col-span-2 lg:col-span-6 lg:flex-row lg:items-center lg:gap-8"
                  : "lg:col-span-2"
              } ${i === LEADERS.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              style={{ backgroundColor: i === 0 ? undefined : "rgba(255,255,255,0.03)" }}
            >
              {l.photo ? (
                <img
                  src={l.photo}
                  alt={l.name}
                  loading="lazy"
                  decoding="async"
                  className="mb-6 h-40 w-40 flex-shrink-0 rounded-full object-cover lg:mb-0"
                />
              ) : (
                <div className="mb-6 flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 lg:mb-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-20 w-20 text-primary"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    aria-hidden
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
                  </svg>
                </div>
              )}
              <div>
                <h3 className="font-display text-xl font-bold">{l.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {l.role} · {l.credentials}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{l.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Clients                                                             */
/* ------------------------------------------------------------------ */

function Clients() {
  return (
    <section id="clients" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading index="04" kicker="Our Clients">
            Trusted by the nation's
            <br />
            <span className="display-accent text-gold-deep">infrastructure authorities.</span>
          </SectionHeading>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            We are proud to have served the following government authorities and agencies on
            projects across India — as associate partner, authority's engineer and independent
            engineer.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3">
          {CLIENTS.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center justify-center gap-4 bg-card p-10 text-center transition-colors hover:bg-secondary"
            >
              <img
                src={c.logo}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Website enquiry — ${data.get("interest") || "General"}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\n\nMessage:\n${data.get("message")}`,
    );
    window.location.href = `mailto:jrconsultancymdu@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  const inputCls =
    "w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <section id="contact" className="border-t border-border bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading index="05" kicker="Contact Us">
              Let's build your
              <br />
              <span className="display-accent text-gold-deep">next project.</span>
            </SectionHeading>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              We also welcome requests for quality testing of road and building materials at our
              head office in Madurai. Reach us directly, or send an enquiry below.
            </p>

            

            <dl className="mt-10 space-y-8">
              <div>
                <dt className="eyebrow text-muted-foreground">Head Office</dt>
                <dd className="mt-2 text-sm leading-relaxed text-foreground">
                  Plot No. 5, Surya Nagar 1st Street, Alagar Koil Main Road,
                  <br />
                  Surya Nagar, K. Pudur, Madurai – 625 007, Tamil Nadu
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Regional Office</dt>
                <dd className="mt-2 text-sm text-foreground">
                  Chennai, Tamil Nadu · plus site offices across India
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Speak</dt>
                <dd className="mt-2 text-sm text-foreground">
                  <a href="tel:+914522562525" className="hover:text-gold-deep">
                    0452-2562525
                  </a>
                  {" · "}
                  <a href="tel:+914522563535" className="hover:text-gold-deep">
                    0452-2563535
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Write</dt>
                <dd className="mt-2 text-sm text-foreground">
                  <a href="mailto:jrconsultancymdu@gmail.com" className="hover:text-gold-deep">
                    jrconsultancymdu@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="self-start border border-border bg-card p-8 lg:p-12"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="eyebrow text-muted-foreground">Full Name</span>
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className={`${inputCls} mt-2`}
                />
              </label>
              <label className="sm:col-span-1">
                <span className="eyebrow text-muted-foreground">Phone</span>
                <input name="phone" type="tel" placeholder="+91" className={`${inputCls} mt-2`} />
              </label>
              <label className="sm:col-span-2">
                <span className="eyebrow text-muted-foreground">Email Address</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={`${inputCls} mt-2`}
                />
              </label>
              <label className="sm:col-span-2">
                <span className="eyebrow text-muted-foreground">I am interested in</span>
                <select
                  name="interest"
                  className={`${inputCls} mt-2`}
                  defaultValue="Detailed Project Report (DPR)"
                >
                  <option>Detailed Project Report (DPR)</option>
                  <option>Construction Supervision</option>
                  <option>Design &amp; Drawings</option>
                  <option>Material Testing</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="eyebrow text-muted-foreground">Your Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project"
                  className={`${inputCls} mt-2 resize-none`}
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-8 w-full justify-center">
              {sent ? "Opening your email app…" : "Submit Enquiry"}
              <span aria-hidden>→</span>
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Submitting opens an email to jrconsultancymdu@gmail.com with your details prefilled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function SiteFooter() {
  return (
    <footer className="border-t-2 border-primary bg-navy py-14 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:gap-4">
          <img
            src={jrcplLogo}
            alt="JRCPL logo"
            className="h-12 w-12 rounded-full bg-white/90 p-0.5"
          />
          <div>
            <p className="font-display text-base font-bold text-white">
              JR Consultancy Services Pvt. Ltd.
            </p>
            <p className="text-xs">Madurai · Chennai · Site offices across India</p>
          </div>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} JRCPL. All rights reserved.</p>
      </div>
    </footer>
  );
}
