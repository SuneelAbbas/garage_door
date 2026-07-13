import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import ServiceInstallation from "./pages/ServiceInstallation";
import ServiceRepairs from "./pages/ServiceRepairs";
import ServiceSpring from "./pages/ServiceSpring";
import ServiceOpener from "./pages/ServiceOpener";
import ServiceEmergency from "./pages/ServiceEmergency";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import LocationsIndex from "./pages/LocationsIndex";
import LocationPage from "./pages/LocationPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/installation" element={<ServiceInstallation />} />
          <Route path="/services/repairs" element={<ServiceRepairs />} />
          <Route path="/services/spring-replacement" element={<ServiceSpring />} />
          <Route path="/services/opener" element={<ServiceOpener />} />
          <Route path="/services/emergency" element={<ServiceEmergency />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/locations" element={<LocationsIndex />} />
          <Route path="/locations/:id" element={<LocationPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
