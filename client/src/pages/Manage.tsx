import { ArrowLeft, Check, LogIn, Pencil, Plus, Save, Trash2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { PortfolioNav } from "@/components/PortfolioNav";
import { trpc } from "@/lib/trpc";
import { startLogin } from "@/const";
import { useI18n } from "@/lib/i18n";
import type { PortfolioCase } from "@shared/cases";

type CaseForm = Omit<PortfolioCase, "id" | "methods" | "outcomes" | "tags"> & { id?: number; methods: string; outcomes: string; tags: string };
const emptyForm: CaseForm = { slug: "", title: "", kicker: "", summary: "", context: "", role: "", methods: "", outcomes: "", tags: "", cover: "protest", link: "", featured: false };
const listify = (value: string) => value.split(/[,\n]/).map(item => item.trim()).filter(Boolean);
const toForm = (item: PortfolioCase): CaseForm => ({ ...item, methods: item.methods.join(", "), outcomes: item.outcomes.join("\n"), tags: item.tags.join(", ") });

export default function Manage() {
  const auth = useAuth();
  const { t } = useI18n();
  const utils = trpc.useUtils();
  const casesQuery = trpc.portfolio.list.useQuery();
  const [form, setForm] = useState<CaseForm>(emptyForm);
  const [notice, setNotice] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const cases = casesQuery.data ?? [];
  const canManage = auth.user?.role === "admin";
  const isEditing = useMemo(() => Boolean(form.id), [form.id]);
  const createMutation = trpc.portfolio.create.useMutation({ onSuccess: () => refresh(t("manage.publishedNotice")) });
  const updateMutation = trpc.portfolio.update.useMutation({ onSuccess: () => refresh(t("manage.updatedNotice")) });
  const removeMutation = trpc.portfolio.remove.useMutation({ onSuccess: () => refresh(t("manage.removedNotice")) });
  function refresh(message: string) { setNotice(message); setForm(emptyForm); setIsFormOpen(false); void utils.portfolio.list.invalidate(); }
  function submit(event: React.FormEvent) { event.preventDefault(); setNotice(""); const payload = { ...form, methods: listify(form.methods), outcomes: listify(form.outcomes), tags: listify(form.tags), link: form.link || "" }; if (isEditing && form.id) updateMutation.mutate(payload as Parameters<typeof updateMutation.mutate>[0]); else createMutation.mutate(payload as Parameters<typeof createMutation.mutate>[0]); }
  function edit(item: PortfolioCase) { setForm(toForm(item)); setIsFormOpen(true); window.scrollTo({ top: 0, behavior: "smooth" }); }
  const pending = createMutation.isPending || updateMutation.isPending || removeMutation.isPending;

  if (auth.loading) return <div className="center-state"><span className="loader-dot" /> {t("manage.loading")}</div>;
  if (!auth.user) return <div className="manage-page"><PortfolioNav /><div className="auth-panel"><span className="section-index">/ {t("manage.reserved")}</span><h1>{t("manage.continue")}<br /><em>{t("manage.continueEmphasis")}</em></h1><p>{t("manage.loginText")}</p><button className="solid-button" type="button" onClick={() => startLogin()}><LogIn size={17} /> {t("manage.login")}</button><Link href="/" className="back-link"><ArrowLeft size={16} /> {t("manage.back")}</Link></div></div>;
  if (!canManage) return <div className="manage-page"><PortfolioNav /><div className="auth-panel"><span className="section-index">/ {t("manage.restricted")}</span><h1>{t("manage.almost")}</h1><p>{t("manage.restrictedText")}</p><button className="outline-button" type="button" onClick={() => void auth.logout()}>{t("manage.logout")}</button></div></div>;

  return <div className="manage-page"><PortfolioNav /><main className="manage-shell"><div className="manage-header"><div><span className="section-index">/ {t("manage.reserved")}</span><h1>{t("manage.title")}<br /><em>{t("manage.titleEmphasis")}</em></h1><p>{t("manage.subtitle")}</p></div><button className="solid-button" type="button" onClick={() => { setForm(emptyForm); setIsFormOpen(true); }}><Plus size={17} /> {t("manage.new")}</button></div>{notice && <div className="notice"><Check size={16} /> {notice}</div>}
    {isFormOpen && <form className="editor-card" onSubmit={submit}><div className="editor-top"><div><span className="section-index">/ {isEditing ? t("manage.edit") : t("manage.add")}</span><h2>{isEditing ? t("manage.refine") : t("manage.add")}</h2></div><button className="icon-button" type="button" onClick={() => setIsFormOpen(false)} aria-label={t("manage.close")}><X size={18} /></button></div><div className="form-grid"><label className="field field-wide">{t("manage.titleField")}<input required value={form.title} onChange={event => setForm({ ...form, title: event.target.value })} /></label><label className="field">{t("manage.slug")}<input required value={form.slug} onChange={event => setForm({ ...form, slug: event.target.value })} placeholder="onboarding-que-aprende" /></label><label className="field">{t("manage.role")}<input required value={form.role} onChange={event => setForm({ ...form, role: event.target.value })} placeholder="UX Research · Product Design" /></label><label className="field field-wide">{t("manage.kicker")}<input required value={form.kicker} onChange={event => setForm({ ...form, kicker: event.target.value })} /></label><label className="field field-wide">{t("manage.summary")}<textarea required value={form.summary} onChange={event => setForm({ ...form, summary: event.target.value })} rows={3} /></label><label className="field field-wide">{t("manage.context")}<textarea required value={form.context} onChange={event => setForm({ ...form, context: event.target.value })} rows={3} /></label><label className="field">{t("manage.methods")}<textarea required value={form.methods} onChange={event => setForm({ ...form, methods: event.target.value })} rows={3} placeholder="Interviews, Usability" /></label><label className="field">{t("manage.outcomes")}<textarea required value={form.outcomes} onChange={event => setForm({ ...form, outcomes: event.target.value })} rows={3} /></label><label className="field">{t("manage.tags")}<input required value={form.tags} onChange={event => setForm({ ...form, tags: event.target.value })} placeholder="Research, Discovery" /></label><label className="field">{t("manage.cover")}<select value={form.cover} onChange={event => setForm({ ...form, cover: event.target.value })}><option value="protest">Strategy / discovery</option><option value="legal">Field notes</option><option value="custom">Custom / new</option></select></label><label className="field field-wide">{t("manage.link")}<input type="url" value={form.link} onChange={event => setForm({ ...form, link: event.target.value })} placeholder="https://..." /></label></div><label className="check-field"><input type="checkbox" checked={form.featured} onChange={event => setForm({ ...form, featured: event.target.checked })} /> {t("manage.featured")}</label><div className="editor-actions"><button className="outline-button" type="button" onClick={() => setIsFormOpen(false)}>{t("manage.cancel")}</button><button className="solid-button" type="submit" disabled={pending}><Save size={17} /> {pending ? t("manage.saving") : isEditing ? t("manage.save") : t("manage.publish")}</button></div></form>}
    <section className="manage-list"><div className="list-heading"><span>{t("manage.published")}</span><span>{cases.length} {cases.length === 1 ? t("manage.caseCount") : t("manage.caseCountPlural")}</span></div>{cases.map(item => <article className="manage-row" key={item.id ?? item.slug}><div className={`mini-art mini-art-${item.cover}`}><span>{item.cover === "legal" ? "FN" : "SD"}</span></div><div className="manage-row-copy"><span className="section-index">{item.role}</span><h3>{item.title}</h3><p>{item.kicker}</p></div><div className="manage-row-actions"><Link href={`/work/${item.slug}`} className="text-link">{t("manage.view")} <ArrowLeft size={15} className="rotate-180" /></Link><button className="icon-button" type="button" onClick={() => edit(item)} aria-label={`${t("manage.edit")} ${item.title}`}><Pencil size={17} /></button><button className="icon-button danger" type="button" disabled={pending} onClick={() => { if (item.id && window.confirm(t("manage.removeConfirm"))) removeMutation.mutate({ id: item.id }); }} aria-label={`${t("manage.removeConfirm")} ${item.title}`}><Trash2 size={17} /></button></div></article>)}</section>
  </main></div>;
}
