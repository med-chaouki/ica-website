import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Sectors from "./pages/Sectors";
import Advantages from "./pages/Advantages";
import About from "./pages/About";
import Contact from "./pages/Contact";
import QuoteRequest from "./pages/QuoteRequest";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans antialiased">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/approach" component={Approach} />
          <Route path="/sectors" component={Sectors} />
          <Route path="/advantages" component={Advantages} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/quote" component={QuoteRequest} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
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
