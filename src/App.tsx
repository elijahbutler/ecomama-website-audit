import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout, DesignMode } from './components/Layout';
import { HomePage, VenuePage, VignettesPage, ServicesPage } from './pages/HomeAndVenuePages';
import { TheFarmPage, GatheringsPage, FloralPage } from './pages/FarmAndFloralPages';
import { ExplorePage, LocalRecommendationsPage, AboutPage, OurStoryPage, SustainabilityPage } from './pages/ExploreAndAboutPages';
import { ContactPage, PartnerWithUsPage, PrivacyPolicyPage } from './pages/ContactAndLegalPages';

export function App() {
  const [mode, setMode] = useState<DesignMode>('organic');

  return (
    <Layout mode={mode} setMode={setMode}>
      <Routes>
        <Route path="/" element={<HomePage mode={mode} />} />
        <Route path="/home" element={<HomePage mode={mode} />} />
        <Route path="/venue" element={<VenuePage mode={mode} />} />
        <Route path="/vignettes" element={<VignettesPage mode={mode} />} />
        <Route path="/services" element={<ServicesPage mode={mode} />} />
        <Route path="/the-farm" element={<TheFarmPage mode={mode} />} />
        <Route path="/gatherings" element={<GatheringsPage mode={mode} />} />
        <Route path="/floral" element={<FloralPage mode={mode} />} />
        <Route path="/explore" element={<ExplorePage mode={mode} />} />
        <Route path="/local-recommendations" element={<LocalRecommendationsPage mode={mode} />} />
        <Route path="/about" element={<AboutPage mode={mode} />} />
        <Route path="/our-story" element={<OurStoryPage mode={mode} />} />
        <Route path="/sustainability" element={<SustainabilityPage mode={mode} />} />
        <Route path="/contact" element={<ContactPage mode={mode} />} />
        <Route path="/partner-with-us" element={<PartnerWithUsPage mode={mode} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage mode={mode} />} />
        <Route path="/privacy-policy-1" element={<Navigate to="/privacy-policy" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
