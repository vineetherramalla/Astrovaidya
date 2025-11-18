import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import ZodiacPage from "./pages/ZodiacPage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import './i18n/config';
import MarqueeServices from "./components/MarqueeServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <TopBar />
          <MarqueeServices />
          <Navbar />
          <div className="flex-1 pt-26">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/zodiac/:sign" element={<ZodiacPage />} />
              <Route path="/admin" element={<Admin />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
