import React from 'react';
import { motion } from 'framer-motion';
import { CubeIcon, ArrowTrendingUpIcon, DocumentTextIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const ModeSelection = ({ selectedMode, setSelectedMode }) => {
  const modes = [
    { 
      id: 'cases', 
      name: 'CASES', 
      icon: CubeIcon, 
      description: 'Open cases to get rare skins',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      id: 'upgrade', 
      name: 'UPGRADE', 
      icon: ArrowTrendingUpIcon, 
      description: 'Upgrade your skins to higher tiers',
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 'contracts', 
      name: 'CONTRACTS', 
      icon: DocumentTextIcon, 
      description: 'Trade skins with other players',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      id: 'buy', 
      name: 'BUY', 
      icon: ShoppingCartIcon, 
      description: 'Purchase skins directly',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modes.map((mode, index) => {
          const IconComponent = mode.icon;
          return (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMode(mode.id)}
              className={`
                relative group cursor-pointer p-6 rounded-xl border-2 transition-all duration-300
                ${selectedMode === mode.id 
                  ? 'border-skinops-orange bg-gradient-to-br from-skinops-orange/20 to-skinops-accent/20 shadow-lg shadow-skinops-orange/25' 
                  : 'border-skinops-border bg-skinops-card/50 hover:border-skinops-orange/50 hover:bg-skinops-card/80'
                }
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-skinops-orange/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className={`
                  w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                  ${selectedMode === mode.id 
                    ? 'bg-gradient-to-br from-skinops-orange to-skinops-accent' 
                    : 'bg-skinops-card group-hover:bg-skinops-orange/20'
                  }
                `}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-rajdhani font-bold text-white mb-2">
                  {mode.name}
                </h3>
                
                <p className="text-skinops-gray text-sm">
                  {mode.description}
                </p>
                
                {selectedMode === mode.id && (
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
          );
        })}
      </div>
    </motion.section>
  );
};

export default ModeSelection;