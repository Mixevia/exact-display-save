import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { Reveal, Eyebrow } from "@/components/Reveal";
import { company, team, clients } from "@/lib/company";

import siloComplex from "@/assets/silo-complex.jpg";
import silo1 from "@/assets/silo-1.jpg";
import dryer1 from "@/assets/dryer-1.jpg";
import dryer2 from "@/assets/dryer-2.jpg";
import foundation from "@/assets/foundation.jpg";
import siteTeam from "@/assets/site-team.jpg";
import sauceRange from "@/assets/sauce-range.jpg";
import sauceStock from "@/assets/sauce-stock.jpg";
import sauceBulk from "@/assets/sauce-bulk.jpg";
import saucePallet from "@/assets/sauce-pallet.jpg";
import tomatoProcess from "@/assets/tomato-process.jpg";
import distribution from "@/assets/distribution.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Bode Partners Ug Limited — Grain Systems, Sauce & Engineering",
      },
      {
        name: "description",
        content:
          "Uganda-based builders of grain storage and drying infrastructure, producers of Bode Tomato Sauce, and providers of civil and engineering services.",
      },
      { property: "og:title", content: "Bode Partners Ug Limited" },
      {
        property: "og:description",
        content:
          "Grain storage & drying infrastructure, Bode Tomato Sauce, and engineering services from Kampala, Uganda.",
      },
    ],
  }),
  component: Index,
});

const stages = [
  { n: "01", t: "Grain Intake & Storage", d: "Reception pits, elevators and silo batteries sized to throughput.", img: siloComplex },
  { n: "02", t: "Drying & Handling", d: "Continuous-flow and mobile dryers matched to crop moisture profiles.", img: dryer1 },
  { n: "03", t: "Infrastructure Build", d: "Foundations, civil works and structural steel executed in-house.", img: foundation },
  { n: "04", t: "Tomato Processing", d: "Sorting, washing and cooking under controlled hygiene conditions.", img: tomatoProcess },
  { n: "05", t: "Bottling & Packing", d: "400g retail bottles and 5-litre bulk packs, batch-traceable.", img: sauceStock },
  { n: "06", t: "Distribution", d: "Delivery to distributors, institutions and retail stockists.", img: distribution },
];

const facts = [
  ["Registration No.", company.registration],
  ["URA TIN", company.tin],
  ["Headquarters", "Kampala, Uganda"],
  ["Core Activity", "Agro-processing & Engineering"],
];

const engineeringLines = [
  ["Master planning", "Site layouts for processing and storage facilities."],
  ["Civil & structural", "Foundations, slabs, retaining works, structural steel."],
  ["Mechanical & electrical", "Power, conveying, drying and handling installations."],
  ["Feasibility studies", "Capacity, cost and throughput analysis before capital spend."],
  ["Construction management", "Procurement, supervision and handover of works."],
];

function Index() {
  return (
    <div id="top" className="bg-paper">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-[68px]">
          <img
            src={siloComplex}
            alt="Grain silo battery at a Bode Partners agro-processing installation"
            width={1600}
            height={1008}
            className="absolute inset-0 h-full w-full object-cover duotone"
          />
          <div className="absolute inset-0 bg-ink/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-rust/35 mix-blend-color" />
          <div className="shell relative z-10 pb-24 pt-28">
            <Eyebrow tone="paper">Kampala · Mbarara · Uganda</Eyebrow>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.4rem,7.2vw,5.2rem)] font-black text-paper">
              Grain infrastructure,
              <br />
              food production &amp;
              <br />
              engineering works.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/80">
              We build storage and drying systems for agribusinesses, manufacture Bode Tomato
              Sauce, and deliver civil and engineering services across Uganda.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#agro"
                className="bg-paper px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink transition-colors hover:bg-rust hover:text-paper"
              >
                See our agro-processing work
              </a>
              <a
                href="#contact"
                className="border border-paper/70 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-paper/10"
              >
                Get in touch
              </a>
            </div>
          </div>
        </section>

        {/* NAMEPLATE */}
        <section className="bg-steel-dark">
          <div className="shell grid grid-cols-2 gap-px py-0 md:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label} className="border-r border-paper/10 py-7 pr-6 last:border-r-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/45">
                  {label}
                </div>
                <div className="mt-2 font-mono text-[13px] text-paper">{value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-pad">
          <div className="shell grid gap-14 lg:grid-cols-[1.25fr_1fr]">
            <Reveal>
              <Eyebrow>About the company</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,3rem)] text-ink">
                An engineering company that also feeds the shelf.
              </h2>
              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-ink-soft">
                <p>
                  Bode Partners Ug Limited works where agriculture meets engineering. We design,
                  fabricate and install grain storage and drying infrastructure for cooperatives,
                  institutions and commercial agribusinesses — and we run our own food production
                  line in Mbarara.
                </p>
                <p>
                  Our engineers hold accredited degrees across mechanical, electrical, civil and
                  architectural disciplines, which lets us take a project from feasibility and
                  layout through to concrete, steel, commissioning and handover without brokering
                  the work out.
                </p>
                <p>
                  We work with established equipment partners — {company.partners} — so the systems
                  we install are supportable, documented and serviceable long after commissioning.
                </p>
              </div>
            </Reveal>

            <Reveal className="border border-steel-line bg-paper-deep p-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-rust">
                Company record
              </div>
              <dl className="mt-6 divide-y divide-steel-line/70">
                {[
                  ["Incorporated", company.incorporated],
                  ["Legal form", company.legalForm],
                  ["Headquarters", company.hq],
                  ["Production facility", company.facility],
                  ["Equipment partners", company.partners],
                  ["Flagship product", company.flagship],
                  ["Phone", company.phones[0]],
                  ["Email", company.email],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[auto_1fr] gap-4 py-3">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                      {k}
                    </dt>
                    <dd className="text-right font-mono text-[12px] leading-snug text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="section-pad border-y border-steel-line bg-paper-deep">
          <div className="shell">
            <Reveal>
              <Eyebrow>Value chain</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.8rem,3.6vw,2.7rem)] text-ink">
                Six stages, one continuous capability.
              </h2>
            </Reveal>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {stages.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.n}
                  className="group border border-steel-line bg-paper"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.t}
                      loading="lazy"
                      width={900}
                      height={675}
                      className="h-full w-full object-cover duotone transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-steel-dark/45 mix-blend-multiply" />
                    <span className="absolute left-0 top-0 bg-rust px-3 py-1.5 font-mono text-[11px] text-paper">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-sm tracking-tight text-ink">{s.t}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* SPLIT PANELS */}
        <section className="grid lg:grid-cols-2">
          <Reveal id="agro" className="bg-steel-dark px-7 py-20 sm:px-12 lg:px-14">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow text-paper/60">
                <span className="eyebrow-rule" />
                Business line 01
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-paper">
                Agro-processing &amp; value addition
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/70">
                Storage, drying and handling infrastructure engineered around your crop, moisture
                profile and throughput — supplied, installed and commissioned as one package.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Grain silo supply, fabrication and erection",
                  "Continuous-flow and mobile drying systems",
                  "Conveying, elevation and intake handling",
                  "Civil works, foundations and structural steel",
                  "Commissioning, operator training and service",
                ].map((li) => (
                  <li
                    key={li}
                    className="border-l-2 border-rust pl-4 font-mono text-[12px] leading-relaxed text-paper/85"
                  >
                    {li}
                  </li>
                ))}
              </ul>
              <div className="mt-9 grid grid-cols-2 gap-2">
                {[silo1, dryer1, dryer2, siteTeam].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Agro-processing installation work"
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full object-cover duotone opacity-85"
                  />
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block border-b border-rust pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper"
              >
                Request a capability brief →
              </a>
            </div>
          </Reveal>

          <Reveal id="sauce" className="bg-rust-deep px-7 py-20 sm:px-12 lg:px-14">
            <div className="mx-auto max-w-xl">
              <span className="eyebrow text-paper/60">
                <span className="eyebrow-rule" />
                Business line 02
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.8rem,3.4vw,2.6rem)] text-paper">
                Bode Tomato Sauce
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-paper/75">
                Produced at our Mbarara facility from Ugandan tomatoes, packed for both household
                shelves and high-volume kitchens.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "400g retail bottle — the flagship pack",
                  "5-litre bulk packs for kitchens and institutions",
                  "Batch coding and traceability on every run",
                  "Product of Uganda — locally sourced tomatoes",
                  "Distributor and stockist terms available",
                ].map((li) => (
                  <li
                    key={li}
                    className="border-l-2 border-paper/40 pl-4 font-mono text-[12px] leading-relaxed text-paper/85"
                  >
                    {li}
                  </li>
                ))}
              </ul>
              <div className="mt-9 grid grid-cols-2 gap-2">
                {[sauceRange, sauceStock, sauceBulk, saucePallet].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Bode Tomato Sauce production and packing"
                    loading="lazy"
                    width={900}
                    height={900}
                    className="aspect-square w-full object-cover"
                  />
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 inline-block border-b border-paper pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper"
              >
                Enquire about bulk orders →
              </a>
            </div>
          </Reveal>
        </section>

        {/* ENGINEERING */}
        <section id="engineering" className="section-pad">
          <div className="shell grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <Eyebrow>Business line 03</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.7rem)] text-ink">
                Engineering &amp; construction services
              </h2>
              <ul className="mt-9 space-y-6">
                {engineeringLines.map(([t, d]) => (
                  <li key={t} className="border-l-2 border-olive pl-5">
                    <h3 className="font-display text-sm tracking-tight text-ink">{t}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">{d}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="lg:sticky lg:top-24">
              <img
                src={foundation}
                alt="Reinforced concrete foundation works on a Bode Partners site"
                loading="lazy"
                width={900}
                height={900}
                className="w-full object-cover duotone"
              />
              <p className="mt-3 font-mono text-[11px] text-ink-soft">
                Fig. 01 — Reinforced foundation works, silo battery base.
              </p>
            </Reveal>
          </div>
        </section>

        {/* CLIENTS */}
        <section className="section-pad bg-steel-dark">
          <div className="shell">
            <Reveal>
              <span className="eyebrow text-paper/60">
                <span className="eyebrow-rule" />
                Trusted by
              </span>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.7rem,3.2vw,2.4rem)] text-paper">
                Institutions and companies we have worked with.
              </h2>
            </Reveal>
            <Reveal className="mt-10 flex flex-wrap gap-2">
              {clients.map((c) => (
                <span
                  key={c}
                  className="border border-paper/20 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-paper/80"
                >
                  {c}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="section-pad border-b border-steel-line bg-paper-deep">
          <div className="shell">
            <Reveal>
              <Eyebrow>The team</Eyebrow>
              <h2 className="mt-6 max-w-2xl font-display text-[clamp(1.7rem,3.2vw,2.4rem)] text-ink">
                Named engineers, accountable work.
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-px border border-steel-line bg-steel-line sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <li key={m.name} className="bg-paper p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-rust">
                    {m.role}
                  </span>
                  <h3 className="mt-4 font-display text-[15px] tracking-tight text-ink">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-ink-soft">{m.cred}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-pad bg-rust-deep">
          <div className="shell grid gap-14 lg:grid-cols-2">
            <Reveal>
              <span className="eyebrow text-paper/60">
                <span className="eyebrow-rule" />
                Contact
              </span>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,4vw,3rem)] text-paper">
                Tell us what you need built.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/75">
                Whether it is a silo battery, a drying line, a construction package or a sauce
                supply agreement, send us the scope and we will respond with a written approach and
                a quote.
              </p>
              <div className="mt-9 space-y-5 font-mono text-[12px] text-paper/80">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-paper/45">
                    Headquarters
                  </div>
                  <div className="mt-1.5">{company.hq}</div>
                  <div>{company.poBox}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-paper/45">
                    Production facility
                  </div>
                  <div className="mt-1.5">{company.facility}</div>
                </div>
              </div>
            </Reveal>

            <Reveal className="space-y-3">
              {[
                { label: "Phone", value: company.phones[0], href: `tel:${company.phones[0].replace(/\s/g, "")}` },
                { label: "Phone", value: company.phones[1], href: `tel:${company.phones[1].replace(/\s/g, "")}` },
                { label: "Email", value: company.email, href: `mailto:${company.email}` },
              ].map((c) => (
                <a
                  key={c.value}
                  href={c.href}
                  className="flex items-center gap-4 border border-paper/25 p-5 transition-colors hover:bg-paper/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-paper/40 font-mono text-[10px] text-paper">
                    {c.label === "Email" ? "@" : "☎"}
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                      {c.label}
                    </span>
                    <span className="mt-1 block font-mono text-[13px] text-paper">{c.value}</span>
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10">
        <div className="shell flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center bg-rust font-display text-sm font-black text-paper">
              B
            </span>
            <span className="font-display text-sm tracking-tight text-paper">{company.name}</span>
          </div>
          <p className="font-mono text-[11px] text-paper/50">
            Reg. No. {company.registration} · TIN {company.tin} · Kampala, Uganda
          </p>
        </div>
      </footer>
    </div>
  );
}
