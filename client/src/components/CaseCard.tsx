import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { PortfolioCase } from "@shared/cases";
import { localizeCase, useI18n } from "@/lib/i18n";

export function CaseCard({ item, index = 0 }: { item: PortfolioCase; index?: number }) {
  const { language } = useI18n();
  const localized = localizeCase(item, language);
  return <Link href={`/work/${item.slug}`} className={`case-card case-card-${item.cover}`}>
    <div className="case-art" aria-hidden="true"><span className="art-index">0{index + 1}</span><span className="art-label">{item.cover === "legal" ? "field notes" : "strategy / discovery"}</span><span className="art-shape art-shape-one" /><span className="art-shape art-shape-two" /><span className="art-shape art-shape-three" /></div>
    <div className="case-card-body"><div className="case-card-meta"><span>{localized.role}</span><ArrowUpRight size={18} /></div><h3>{localized.title}</h3><p>{localized.kicker}</p><div className="tag-row">{localized.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
  </Link>;
}
