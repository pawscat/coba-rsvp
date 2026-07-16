import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cover from './components/Cover';
import QuranVerse from './components/QuranVerse';
import Profiles from './components/Profiles';
import SaveTheDate from './components/SaveTheDate';
import GuestBook from './components/GuestBook';
import WeddingGift from './components/WeddingGift';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Play audio
    const audio = new Audio('/music.mp3');
    audio.loop = true;
    audio.play().catch(e => console.log('Autoplay prevented', e));
  };

  return (
    <div className="min-h-screen bg-ivory text-ink font-sans overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && (
          <Cover guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <main>
          <QuranVerse />
          <Profiles />
          <SaveTheDate />
          <GuestBook />
          <WeddingGift />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
