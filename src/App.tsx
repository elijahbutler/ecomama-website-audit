import { PreferencesProvider } from "./features/preferences";
import {
  JournalHome,
  JournalVenue,
  JournalVignettes,
  JournalServices,
  JournalFarm,
  JournalGatherings,
  JournalFloral,
  JournalExplore,
  JournalGuide,
  JournalAbout,
  JournalStory,
  JournalSustainability,
  JournalPartners,
} from "./pages/JournalPages";
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, DesignMode } from "./components/Layout";
import {
  HomePage,
  VenuePage,
  VignettesPage,
  ServicesPage,
} from "./pages/HomeAndVenuePages";
import {
  TheFarmPage,
  GatheringsPage,
  FloralPage,
} from "./pages/FarmAndFloralPages";
import {
  ExplorePage,
  LocalRecommendationsPage,
  AboutPage,
  OurStoryPage,
  SustainabilityPage,
} from "./pages/ExploreAndAboutPages";
import {
  ContactPage,
  PartnerWithUsPage,
  PrivacyPolicyPage,
} from "./pages/ContactAndLegalPages";

export function App() {
  const [mode, setMode] = useState<DesignMode>("organic");

  return (
    <PreferencesProvider>
      <Layout mode={mode} setMode={setMode}>
        <Routes>
          <Route
            path="/"
            element={
              mode === "organic" ? <JournalHome /> : <HomePage mode={mode} />
            }
          />
          <Route
            path="/home"
            element={
              mode === "organic" ? <JournalHome /> : <HomePage mode={mode} />
            }
          />
          <Route
            path="/venue"
            element={
              mode === "organic" ? <JournalVenue /> : <VenuePage mode={mode} />
            }
          />
          <Route
            path="/vignettes"
            element={
              mode === "organic" ? (
                <JournalVignettes />
              ) : (
                <VignettesPage mode={mode} />
              )
            }
          />
          <Route
            path="/services"
            element={
              mode === "organic" ? (
                <JournalServices />
              ) : (
                <ServicesPage mode={mode} />
              )
            }
          />
          <Route
            path="/the-farm"
            element={
              mode === "organic" ? <JournalFarm /> : <TheFarmPage mode={mode} />
            }
          />
          <Route
            path="/gatherings"
            element={
              mode === "organic" ? (
                <JournalGatherings />
              ) : (
                <GatheringsPage mode={mode} />
              )
            }
          />
          <Route
            path="/floral"
            element={
              mode === "organic" ? (
                <JournalFloral />
              ) : (
                <FloralPage mode={mode} />
              )
            }
          />
          <Route
            path="/explore"
            element={
              mode === "organic" ? (
                <JournalExplore />
              ) : (
                <ExplorePage mode={mode} />
              )
            }
          />
          <Route
            path="/local-recommendations"
            element={
              mode === "organic" ? (
                <JournalGuide />
              ) : (
                <LocalRecommendationsPage mode={mode} />
              )
            }
          />
          <Route
            path="/about"
            element={
              mode === "organic" ? <JournalAbout /> : <AboutPage mode={mode} />
            }
          />
          <Route
            path="/our-story"
            element={
              mode === "organic" ? (
                <JournalStory />
              ) : (
                <OurStoryPage mode={mode} />
              )
            }
          />
          <Route
            path="/sustainability"
            element={
              mode === "organic" ? (
                <JournalSustainability />
              ) : (
                <SustainabilityPage mode={mode} />
              )
            }
          />
          <Route path="/contact" element={<ContactPage mode={mode} />} />
          <Route
            path="/partner-with-us"
            element={
              mode === "organic" ? (
                <JournalPartners />
              ) : (
                <PartnerWithUsPage mode={mode} />
              )
            }
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage mode={mode} />}
          />
          <Route
            path="/privacy-policy-1"
            element={<Navigate to="/privacy-policy" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </PreferencesProvider>
  );
}

export default App;
