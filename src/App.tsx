import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import SocialMediaButtons from './components/SocialMediaButtons';

function App() {
  const [activePanel, setActivePanel] = useState<'home' | 'resume' | 'portfolio'>('home');

  const variants = {
    home: { x: 0, opacity: 1 },
    resume: { x: '50%', opacity: 0.5, scale: 0.9 },
    portfolio: { x: '-50%', opacity: 0.5, scale: 0.9 },
  };

  return (
    <div className="h-screen w-full overflow-hidden relative flex items-center justify-center">
      {/* Background/Side Panels Container */}
      <AnimatePresence mode="wait">
        {activePanel === 'resume' && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute left-0 top-0 w-1/2 h-full z-20"
          >
            <ResumeSection onClose={() => setActivePanel('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activePanel === 'portfolio' && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 w-1/2 h-full z-20"
          >
            <PortfolioSection onClose={() => setActivePanel('home')} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <motion.div
        animate={activePanel}
        variants={variants}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="flex flex-col items-center justify-center gap-8 z-10"
      >
        <Header />
        {/* <ActionButtons
          onResumeClick={() => setActivePanel('resume')}
          onPortfolioClick={() => setActivePanel('portfolio')}
        /> */}

        <div className="mt-6">
          <SocialMediaButtons />
        </div>
      </motion.div>

      <ThemeToggle />
    </div>
  );
}

export default App;
