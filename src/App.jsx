import React, { useState } from 'react';
import Hero from './components/Hero';
import ScratchCard from './components/ScratchCard';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
import WelcomeGate from './components/WelcomeGate';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF8F0] text-[#4E342E] overflow-x-hidden">
      {!isOpened && <WelcomeGate onOpen={() => setIsOpened(true)} />}

      <MusicPlayer isOpened={isOpened} />

      <main className={!isOpened ? 'h-screen overflow-hidden' : ''}>
        <Hero />
        <ScratchCard />
        <Countdown />
        {/* <Gallery /> */}
        <Venue />
        <Schedule />
        <Footer />
      </main>
    </div>
  );
}

export default App;
