import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import type { CaseSection } from "@shared/caseContent";
import { Link, useRoute } from "wouter";
import { Footer, PortfolioNav } from "@/components/PortfolioNav";
import { trpc } from "@/lib/trpc";
import { seedCases } from "@shared/cases";
import { caseContent, type CaseBlock } from "@shared/caseContent";
import { localizeCase, useI18n } from "@/lib/i18n";
import { IS_STATIC_SITE } from "@/const";

// Renders the **bold** and [label](url) markers kept from the Notion source.
function inline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={index}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noreferrer">{link[1]}</a>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}

const asset = (src: string) => `${import.meta.env.BASE_URL}${src}`;

// Diagrams are wide, so each figure links to the full-size file for zooming on small screens.
function Figure({ src, alt, hint }: { src: string; alt: string; hint: string }) {
  return <figure className="case-figure"><a href={asset(src)} target="_blank" rel="noreferrer" data-hint={hint}><img src={asset(src)} alt={alt} loading="lazy" /></a></figure>;
}

function Block({ block, hint }: { block: CaseBlock; hint: string }) {
  switch (block.type) {
    case "p": return <p>{inline(block.text)}</p>;
    case "h3": return <h3>{block.text}</h3>;
    case "quote": return <blockquote>{inline(block.text)}</blockquote>;
    case "ul": return <ul>{block.items.map(item => <li key={item}>{inline(item)}</li>)}</ul>;
    case "ol": return <ol>{block.items.map(item => <li key={item}>{inline(item)}</li>)}</ol>;
    case "image": return <Figure src={block.src} alt={block.alt} hint={hint} />;
    case "gallery": return <div className="case-gallery">{block.images.map(image => <Figure key={image.src} src={image.src} alt={image.alt} hint={hint} />)}</div>;
  }
}

// Tracks which section is under the reading line and how far the article has been read.
function useReadingPosition(sections: CaseSection[]) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
      const article = document.querySelector(".case-article");
      if (article) {
        const { top, height } = article.getBoundingClientRect();
        setProgress(Math.min(1, Math.max(0, (line - top) / height)));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [sections]);
  return { active, progress };
}

function CaseToc({ sections, active, label }: { sections: CaseSection[]; active: string; label: string }) {
  useEffect(() => {
    // On mobile the index is a horizontal strip: keep the active chip in view
    // without calling scrollIntoView, which would interrupt the page's smooth scroll.
    const toc = document.querySelector<HTMLElement>(".case-toc");
    const link = toc?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (toc && link && toc.scrollWidth > toc.clientWidth) toc.scrollTo({ left: link.offsetLeft - 19, behavior: "smooth" });
  }, [active]);
  return <nav className="case-toc" aria-label={label}><span className="meta-label">{label}</span><ol>{sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`} className={section.id === active ? "is-active" : ""} aria-current={section.id === active ? "location" : undefined} onClick={event => { event.preventDefault(); document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" }); history.replaceState(null, "", `#${section.id}`); }}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}</ol></nav>;
}

export default function CaseDetail() {
  const [, params] = useRoute("/work/:slug");
  const { language, t } = useI18n();
  const slug = params?.slug ?? "";
  const query = trpc.portfolio.bySlug.useQuery({ slug }, { enabled: !IS_STATIC_SITE });
  const rawItem = query.data ?? seedCases.find(candidate => candidate.slug === slug);
  const item = rawItem ? localizeCase(rawItem, language) : undefined;
  const content = caseContent[slug]?.[language];
  const sections = content?.sections ?? [];
  const { active, progress } = useReadingPosition(sections);
  const nextIndex = (seedCases.findIndex(candidate => candidate.slug === slug) + 1) % seedCases.length;
  const nextCase = seedCases.length > 1 ? localizeCase(seedCases[nextIndex], language) : undefined;
  const nextTitle = nextCase ? caseContent[nextCase.slug]?.[language]?.title ?? nextCase.title : "";

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!item) return <div className="center-state"><p>{t("case.unavailable")}</p><Link href="/" className="text-link">{t("case.home")} <ArrowUpRight size={16} /></Link></div>;

  return <div className="site-page"><PortfolioNav /><div className="reading-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" /><main className="case-detail">
    <div className={`case-hero-art case-card-${item.cover}`}><span className="art-shape art-shape-one" /><span className="art-shape art-shape-two" /><span className="art-shape art-shape-three" /></div>
    <div className="section-shell case-reading">
      <Link href="/#work" className="back-link"><ArrowLeft size={16} /> {t("case.back")}</Link>
      <div className="case-title-block"><h1>{content?.title ?? item.title}</h1><p className="case-kicker">{content?.kicker ?? item.kicker}</p></div>
      <div className="case-meta-grid"><div><span className="meta-label">{t("case.role")}</span><strong>{item.role}</strong></div><div><span className="meta-label">{t("case.methods")}</span><div className="tag-row">{item.methods.map(method => <span className="tag" key={method}>{method}</span>)}</div></div><div><span className="meta-label">{t("case.topics")}</span><div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></div>
      <div className={content ? "case-body" : undefined}>{content && <CaseToc sections={sections} active={active} label={t("case.toc")} />}<article className="case-article">
        {content
          ? content.sections.map(section => <section className="case-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.blocks.map((block, index) => <Block block={block} hint={t("case.zoom")} key={index} />)}</section>)
          : <section className="case-section"><p>{item.context}</p><p>{item.summary}</p></section>}
      </article></div>
      {nextCase && nextCase.slug !== slug && <Link href={`/work/${nextCase.slug}`} className={`next-case case-card-${nextCase.cover}`}><span className="meta-label">{t("case.next")}</span><strong>{nextTitle}</strong><span className="next-case-kicker">{nextCase.kicker}</span><ArrowRight size={22} /></Link>}
      <div className="case-footer-row"><Link href="/#work" className="back-link"><ArrowLeft size={16} /> {t("case.back")}</Link><Link href="/#contact" className="text-link">{t("case.talk")} <ArrowUpRight size={16} /></Link></div>
    </div>
  </main><Footer /></div>;
}
