import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import ServiceDetail from "./pages/ServiceDetail";
import CityLanding from "./pages/CityLanding";
import FAQ from "./pages/FAQ";
import Portfolio from "./pages/Portfolio";
import KitchenRemodelingStPete from "./pages/KitchenRemodelingStPete";
import BathroomRemodelingStPete from "./pages/BathroomRemodelingStPete";
import TrexDeckBuilderTampaBay from "./pages/TrexDeckBuilderTampaBay";
import SunroomFloridaRoom from "./pages/SunroomFloridaRoom";
import AduInLawSuiteBuilder from "./pages/AduInLawSuiteBuilder";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      {/* 301 redirects — old /services/ slugs → canonical SEO landing pages */}
      <Route path="/services/kitchen-remodeling"><Redirect to="/kitchen-remodeling-st-petersburg/" /></Route>
      <Route path="/services/bathroom-remodeling"><Redirect to="/bathroom-remodeling-st-petersburg/" /></Route>
      <Route path="/services/sunrooms"><Redirect to="/sunroom-florida-room-contractor/" /></Route>
      <Route path="/services/trex-decks"><Redirect to="/trex-deck-builder-tampa-bay/" /></Route>
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/our-work" component={Portfolio} />
      <Route path="/areas/:city" component={CityLanding} />
      <Route path="/kitchen-remodeling-st-petersburg" component={KitchenRemodelingStPete} />
      <Route path="/kitchen-remodeling-st-petersburg/" component={KitchenRemodelingStPete} />
      <Route path="/bathroom-remodeling-st-petersburg" component={BathroomRemodelingStPete} />
      <Route path="/bathroom-remodeling-st-petersburg/" component={BathroomRemodelingStPete} />
      <Route path="/trex-deck-builder-tampa-bay" component={TrexDeckBuilderTampaBay} />
      <Route path="/trex-deck-builder-tampa-bay/" component={TrexDeckBuilderTampaBay} />
      <Route path="/sunroom-florida-room-contractor" component={SunroomFloridaRoom} />
      <Route path="/sunroom-florida-room-contractor/" component={SunroomFloridaRoom} />
      <Route path="/adu-in-law-suite-builder" component={AduInLawSuiteBuilder} />
      <Route path="/adu-in-law-suite-builder/" component={AduInLawSuiteBuilder} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
