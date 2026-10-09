import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { IS_STATIC_SITE, ROUTER_BASE } from "./const";
import { ThemeProvider } from "./contexts/ThemeContext";
import CaseDetail from "./pages/CaseDetail";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import { I18nProvider } from "./lib/i18n";

function Router() {
  return <WouterRouter base={ROUTER_BASE}><Switch>
    <Route path="/" component={Home} />
    <Route path="/work/:slug" component={CaseDetail} />
    {!IS_STATIC_SITE && <Route path="/manage" component={Manage} />}
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch></WouterRouter>;
}

function App() {
  return <ErrorBoundary><I18nProvider><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><Router /></TooltipProvider></ThemeProvider></I18nProvider></ErrorBoundary>;
}

export default App;
