import React from 'react';
import { motion } from 'framer-motion';

const GameSelection = ({ selectedGame, setSelectedGame }) => {
  const games = [
    { id: 'cs2', name: 'CS2', icon: '🎯' },
    { id: 'dota2', name: 'DOTA 2', icon: '⚔️' },
    { id: 'rust', name: 'RUST', icon: '🔨' },
    { id: 'tf2', name: 'TF2', icon: '🎪' },
    { id: 'minecraft', name: 'MINECRAFT', icon: '⛏️' },
    { id: 'roblox', name: 'ROBLOX', icon: '🧱' },
    { id: 'pubg', name: 'PUBG', icon: '🎮' },
    { id: 'pubgm', name: 'PUBG MOBILE', icon: '📱' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-6xl font-rajdhani font-bold mb-12 text-white"
      >
        SELECT A GAME
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedGame(game.id)}
            className={`
              relative group cursor-pointer p-6 rounded-xl border-2 transition-all duration-300
              ${selectedGame === game.id 
                ? 'border-skinops-orange bg-gradient-to-br from-skinops-orange/20 to-skinops-accent/20 shadow-lg shadow-skinops-orange/25' 
                : 'border-skinops-border bg-skinops-card/50 hover:border-skinops-orange/50 hover:bg-skinops-card/80'
              }
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-skinops-orange/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="text-4xl mb-3">{game.icon}</div>
              <h3 className="text-lg font-rajdhani font-bold text-white mb-1">
                {game.name}
              </h3>
              
              {selectedGame === game.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-skinops-orange rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default GameSelection;