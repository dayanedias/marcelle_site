import { ArrowDown, ArrowUpRight, Download, Mail, Phone, FileText, Sparkles, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { CaseCard } from "@/components/CaseCard";
import { Footer, PortfolioNav } from "@/components/PortfolioNav";
import { trpc } from "@/lib/trpc";
import { seedCases } from "@shared/cases";
import { useI18n } from "@/lib/i18n";
import { IS_STATIC_SITE, LINKEDIN_URL, PROFILE_PHOTO, RESUME_DOWNLOAD_URL, RESUME_VIEW_URL } from "@/const";

export default function Home() {
  const { t } = useI18n();
  const casesQuery = trpc.portfolio.list.useQuery(undefined, { enabled: !IS_STATIC_SITE });
  const cases = casesQuery.data?.length ? casesQuery.data : seedCases;
  const methodNotes = [
    { number: "01", title: t("approach.listen"), text: t("approach.listenText") },
    { number: "02", title: t("approach.makeSense"), text: t("approach.makeSenseText") },
    { number: "03", title: t("approach.evolve"), text: t("approach.evolveText") },
  ];

  return <div className="site-page"><PortfolioNav /><main>
    <section className="hero section-shell"><div className="hero-profile"><span className="profile-photo">{PROFILE_PHOTO ? <img src={`${import.meta.env.BASE_URL}${PROFILE_PHOTO}`} alt="Marcelle Uliano" /> : <span aria-hidden="true">MU</span>}</span><div className="profile-id"><strong>Marcelle Uliano</strong><span>{t("hero.role")}</span></div><a className="profile-linkedin" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label={t("about.linkedin")} title="LinkedIn"><Linkedin size={15} /></a></div><div className="hero-grid"><h1>{t("hero.headline").split("|").map((line, index) => <span key={line}>{index > 0 && <br />}{index === 1 ? <em>{line}</em> : line}</span>)}</h1><div className="hero-aside"><p className="hero-lede">{t("hero.lede")}</p><div className="hero-actions"><a href="#work" className="solid-button">{t("hero.explore")} <ArrowDown size={16} /></a><a href={RESUME_DOWNLOAD_URL} className="outline-button" target="_blank" rel="noreferrer">{t("hero.resume")} <Download size={16} /></a></div></div></div></section>
    <section className="signal-band"><div className="section-shell signal-grid"><span className="section-index">/ 00</span><p>{t("signal")}<br /><strong>{t("signal.strong")}</strong></p><Sparkles className="signal-icon" size={28} strokeWidth={1.4} /></div></section>
    <section className="section-shell work-section" id="work"><div className="section-heading"><div><span className="section-index">/ 01 — {t("work.label")}</span><h2>{t("work.title")}<br /><em>{t("work.titleEmphasis")}</em></h2></div><p className="section-intro">{t("work.intro")}</p></div><div className="cases-grid">{cases.map((item, index) => <CaseCard key={item.slug} item={item} index={index} />)}</div><div className="work-note"><span>{t("work.note")}</span>{!IS_STATIC_SITE && <Link href="/manage" className="text-link">{t("work.manage")} <ArrowUpRight size={16} /></Link>}</div></section>
    <section className="approach-section" id="approach"><div className="section-shell"><div className="section-heading approach-heading"><div><span className="section-index">/ 02 — {t("approach.label")}</span><h2>{t("approach.title")}<br /><em>{t("approach.emphasis")}</em></h2></div><p className="section-intro">{t("approach.intro")}</p></div><div className="method-list">{methodNotes.map(note => <article className="method-item" key={note.number}><span className="method-number">{note.number}</span><div><h3>{note.title}</h3><p>{note.text}</p></div><ArrowUpRight size={18} /></article>)}</div></div></section>
    <section className="about-section section-shell" id="about"><div className="about-mark" aria-hidden="true"><span>MU</span></div><div className="about-copy"><span className="section-index">/ 03 — {t("about.label")}</span><h2>{t("about.title")}<br /><em>{t("about.emphasis")}</em></h2><p>{t("about.body")}</p><p className="about-quote">“I aim to deeply understand people’s needs and turn that understanding into clearer, more relevant, and evidence-driven product decisions.”</p><a className="text-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer">{t("about.linkedin")} <ArrowUpRight size={16} /></a></div></section>
    <section className="contact-section" id="contact"><div className="section-shell contact-inner"><div><span className="section-index">/ 04 — {t("contact.label")}</span><h2>{t("contact.title")}<br /><em>{t("contact.emphasis")}</em></h2></div><div className="contact-side"><p>{t("contact.body")}</p><div className="contact-links"><a href="mailto:marcelle.uliano@gmail.com"><Mail size={17} /> marcelle.uliano@gmail.com</a><a href="https://wa.me/5548992121218" target="_blank" rel="noreferrer"><Phone size={17} /> WhatsApp</a><a href={RESUME_VIEW_URL} target="_blank" rel="noreferrer"><FileText size={17} /> {t("contact.resume")}</a></div></div></div></section>
  </main><Footer /></div>;
}
