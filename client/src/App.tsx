import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
const Services = lazy(() => import("./pages/Services"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const CityLanding = lazy(() => import("./pages/CityLanding"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const KitchenRemodelingStPete = lazy(() => import("./pages/KitchenRemodelingStPete"));
const BathroomRemodelingStPete = lazy(() => import("./pages/BathroomRemodelingStPete"));
const TrexDeckBuilderTampaBay = lazy(() => import("./pages/TrexDeckBuilderTampaBay"));
const SunroomFloridaRoom = lazy(() => import("./pages/SunroomFloridaRoom"));
const AduInLawSuiteBuilder = lazy(() => import("./pages/AduInLawSuiteBuilder"));
const GeneralContractorStPete = lazy(() => import("./pages/GeneralContractorStPete"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
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
      <Route path="/general-contractor-st-petersburg" component={GeneralContractorStPete} />
      <Route path="/general-contractor-st-petersburg/" component={GeneralContractorStPete} />
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
          <Suspense fallback={<div className="min-h-screen" />}>
            <Router />
          </Suspense>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
