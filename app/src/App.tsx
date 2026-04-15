import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ArtInMotionSection from './sections/ArtInMotionSection';
import RomanticExpressionSection from './sections/RomanticExpressionSection';
import RoadsterRenaissanceSection from './sections/RoadsterRenaissanceSection';
import AbstractMotifSection from './sections/AbstractMotifSection';
import TapestryPetalsSection from './sections/TapestryPetalsSection';
import DepthRadianceSection from './sections/DepthRadianceSection';
import NoireLustreSection from './sections/NoireLustreSection';
import GlamourDistilledSection from './sections/GlamourDistilledSection';
import UnmistakablePresenceSection from './sections/UnmistakablePresenceSection';
import RoseVideoSection from './sections/RoseVideoSection';
import ContinueJourneySection from './sections/ContinueJourneySection';
import JournalDetailPage from './pages/JournalDetailPage';
import { journalEntryBySlug } from './data/journalEntries';

function App() {
  const path = window.location.pathname;
  const isJournal = path.startsWith('/journal/');
  const slug = isJournal ? path.replace('/journal/', '') : '';
  const entry = isJournal ? journalEntryBySlug(slug) : undefined;

  return (
    <div className="min-h-screen bg-[#080704] text-white">
      <Header />
      {isJournal ? (
        entry ? (
          <JournalDetailPage entry={entry} />
        ) : (
          <main className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="text-center">
              <h1 className="font-display text-3xl text-[#f4e7cb] tracking-[0.16em]">ENTRY NOT FOUND</h1>
              <a
                href="/"
                className="inline-block mt-8 text-xs tracking-[0.22em] text-[#d8ba7d] hover:text-[#f4e7cb] transition-colors duration-500"
              >
                RETURN TO MAISON
              </a>
            </div>
          </main>
        )
      ) : (
        <main>
          <HeroSection />
          <ArtInMotionSection />
          <RomanticExpressionSection />
          <RoadsterRenaissanceSection />
          <AbstractMotifSection />
          <TapestryPetalsSection />
          <DepthRadianceSection />
          <NoireLustreSection />
          <GlamourDistilledSection />
          <UnmistakablePresenceSection />
          <RoseVideoSection />
          <ContinueJourneySection />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
