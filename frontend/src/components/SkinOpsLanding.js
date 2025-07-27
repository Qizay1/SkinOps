import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import GameSelection from './GameSelection';
import ModeSelection from './ModeSelection';
import DynamicModeSection from './DynamicModeSection';
import RegistrationGift from './RegistrationGift';
import ReferralProgram from './ReferralProgram';
import PaymentMethods from './PaymentMethods';
import Footer from './Footer';

const SkinOpsLanding = () => {
  const [selectedGame, setSelectedGame] = useState('cs2');
  const [selectedMode, setSelectedMode] = useState('cases');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-skinops-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-pulse">
            <div className="w-24 h-24 bg-skinops-orange rounded-full mx-auto mb-4"></div>
            <h2 className="text-2xl font-rajdhani font-bold text-skinops-orange">
              Loading SkinOps...
            </h2>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-skinops-black text-white">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,0,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,122,0,0.05)_49%,rgba(255,122,0,0.05)_51%,transparent_52%)] bg-[length:8px_8px]"></div>
      </div>

      {/* Hero Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-skinops-black via-skinops-darker to-skinops-black"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxnYW1pbmd8ZW58MHx8fG9yYW5nZXwxNzUzNTI4NjQ1fDA&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-skinops-black via-transparent to-skinops-black"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Header />
        
        <main className="container mx-auto px-4 py-8 space-y-12">
          <GameSelection 
            selectedGame={selectedGame} 
            setSelectedGame={setSelectedGame} 
          />
          
          <ModeSelection 
            selectedMode={selectedMode} 
            setSelectedMode={setSelectedMode} 
          />
          
          <DynamicModeSection 
            selectedMode={selectedMode} 
            selectedGame={selectedGame} 
          />
          
          <RegistrationGift />
          
          <ReferralProgram />
          
          <PaymentMethods />
        </main>
        
        <Footer />
      </motion.div>
    </div>
  );
};

export default SkinOpsLanding;