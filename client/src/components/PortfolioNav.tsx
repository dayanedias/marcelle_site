import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { IS_STATIC_SITE } from "@/const";
import { useI18n } from "@/lib/i18n";

export function PortfolioNav() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useI18n();
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" onClick={close}>
          <span className="monogram">MU</span>
          <span className="wordmark-text">marcelle uliano</span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={open ? t("nav.close") : t("nav.open")} onClick={() => setOpen(value => !value)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label={t("nav.work")}>
          <a href={`${import.meta.env.BASE_URL}#work`} onClick={close}>{t("nav.work")}</a>
          <a href={`${import.meta.env.BASE_URL}#approach`} onClick={close}>{t("nav.approach")}</a>
          <a href={`${import.meta.env.BASE_URL}#about`} onClick={close}>{t("nav.about")}</a>
          <a href={`${import.meta.env.BASE_URL}#contact`} onClick={close}>{t("nav.contact")}</a>
          <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={`Switch to ${language === "pt" ? "English" : "Português"}`}>
            <span className={language === "pt" ? "is-active" : ""}>PT</span><b>/</b><span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
          {!IS_STATIC_SITE && <Link href="/manage" className="nav-admin" onClick={close}>{t("nav.admin")} <ArrowUpRight size={14} /></Link>}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();
  return <footer className="site-footer"><div className="footer-mark"><span className="monogram">MU</span><span>marcelle uliano</span></div><p>{t("footer.tagline")}</p><span className="footer-year">© {new Date().getFullYear()}</span></footer>;
}
