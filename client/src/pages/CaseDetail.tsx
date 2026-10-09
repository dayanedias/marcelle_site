import { ArrowLeft, ArrowUpRight, Check, Layers3 } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Footer, PortfolioNav } from "@/components/PortfolioNav";
import { trpc } from "@/lib/trpc";
import { seedCases } from "@shared/cases";
import { localizeCase, useI18n } from "@/lib/i18n";
import { IS_STATIC_SITE } from "@/const";

export default function CaseDetail() {
  const [, params] = useRoute("/work/:slug");
  const { language, t } = useI18n();
  const slug = params?.slug ?? "";
  const query = trpc.portfolio.bySlug.useQuery({ slug }, { enabled: !IS_STATIC_SITE });
  const rawItem = query.data ?? seedCases.find(candidate => candidate.slug === slug);
  const item = rawItem ? localizeCase(rawItem, language) : undefined;

  if (!item) return <div className="center-state"><p>{t("case.unavailable")}</p><Link href="/" className="text-link">{t("case.home")} <ArrowUpRight size={16} /></Link></div>;

  return <div className="site-page"><PortfolioNav /><main className="case-detail"><div className={`case-hero-art case-card-${item.cover}`}><span className="art-index">/ case</span><span className="art-label">{item.cover === "legal" ? "field notes" : "strategy / discovery"}</span><span className="art-shape art-shape-one" /><span className="art-shape art-shape-two" /><span className="art-shape art-shape-three" /></div><div className="section-shell case-reading"><Link href="/#work" className="back-link"><ArrowLeft size={16} /> {t("case.back")}</Link><div className="case-title-block"><span className="section-index">/ {t("case.selected")}</span><h1>{item.title}</h1><p className="case-kicker">{item.kicker}</p></div><div className="case-meta-grid"><div><span className="meta-label">{t("case.role")}</span><strong>{item.role}</strong></div><div><span className="meta-label">{t("case.methods")}</span><div className="tag-row">{item.methods.map(method => <span className="tag" key={method}>{method}</span>)}</div></div><div><span className="meta-label">{t("case.status")}</span><strong>{t("case.statusValue")}</strong></div></div><div className="case-content-grid"><div className="case-content-main"><span className="section-index">/ {t("case.context")}</span><h2>{t("case.inPlay")}<br /><em>{t("case.inPlayEmphasis")}</em></h2><p>{item.context}</p><p>{item.summary}</p><div className="case-callout"><Layers3 size={22} /><span>{t("case.callout")}</span></div></div><aside className="case-outcomes"><span className="section-index">/ {t("case.learning")}</span><h3>{t("case.stays")}</h3>{item.outcomes.map(outcome => <div className="outcome" key={outcome}><Check size={16} /><span>{outcome}</span></div>)}{item.link && <a href={item.link} target="_blank" rel="noreferrer" className="outline-button">{t("case.notion")} <ArrowUpRight size={16} /></a>}</aside></div><div className="case-footer-row"><div className="tag-row">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><Link href="/#contact" className="text-link">{t("case.talk")} <ArrowUpRight size={16} /></Link></div></div></main><Footer /></div>;
}
