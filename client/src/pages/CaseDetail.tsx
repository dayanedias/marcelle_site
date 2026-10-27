import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Fragment, type ReactNode } from "react";
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

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "p": return <p>{inline(block.text)}</p>;
    case "h3": return <h3>{block.text}</h3>;
    case "quote": return <blockquote>{inline(block.text)}</blockquote>;
    case "ul": return <ul>{block.items.map(item => <li key={item}>{inline(item)}</li>)}</ul>;
    case "ol": return <ol>{block.items.map(item => <li key={item}>{inline(item)}</li>)}</ol>;
    case "image": return <figure className="case-figure"><img src={asset(block.src)} alt={block.alt} loading="lazy" /></figure>;
    case "gallery": return <div className="case-gallery">{block.images.map(image => <figure className="case-figure" key={image.src}><img src={asset(image.src)} alt={image.alt} loading="lazy" /></figure>)}</div>;
  }
}

export default function CaseDetail() {
  const [, params] = useRoute("/work/:slug");
  const { language, t } = useI18n();
  const slug = params?.slug ?? "";
  const query = trpc.portfolio.bySlug.useQuery({ slug }, { enabled: !IS_STATIC_SITE });
  const rawItem = query.data ?? seedCases.find(candidate => candidate.slug === slug);
  const item = rawItem ? localizeCase(rawItem, language) : undefined;
  const content = caseContent[slug]?.[language];

  if (!item) return <div className="center-state"><p>{t("case.unavailable")}</p><Link href="/" className="text-link">{t("case.home")} <ArrowUpRight size={16} /></Link></div>;

  return <div className="site-page"><PortfolioNav /><main className="case-detail">
    <div className={`case-hero-art case-card-${item.cover}`}><span className="art-shape art-shape-one" /><span className="art-shape art-shape-two" /><span className="art-shape art-shape-three" /></div>
    <div className="section-shell case-reading">
      <Link href="/#work" className="back-link"><ArrowLeft size={16} /> {t("case.back")}</Link>
      <div className="case-title-block"><h1>{content?.title ?? item.title}</h1><p className="case-kicker">{content?.kicker ?? item.kicker}</p></div>
      <div className="case-meta-grid"><div><span className="meta-label">{t("case.role")}</span><strong>{item.role}</strong></div><div><span className="meta-label">{t("case.methods")}</span><div className="tag-row">{item.methods.map(method => <span className="tag" key={method}>{method}</span>)}</div></div><div><span className="meta-label">{t("case.topics")}</span><div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></div>
      <article className="case-article">
        {content
          ? content.sections.map(section => <section className="case-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.blocks.map((block, index) => <Block block={block} key={index} />)}</section>)
          : <section className="case-section"><p>{item.context}</p><p>{item.summary}</p></section>}
      </article>
      <div className="case-footer-row"><Link href="/#work" className="back-link"><ArrowLeft size={16} /> {t("case.back")}</Link><Link href="/#contact" className="text-link">{t("case.talk")} <ArrowUpRight size={16} /></Link></div>
    </div>
  </main><Footer /></div>;
}
