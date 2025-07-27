import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StarIcon, LockClosedIcon, GiftIcon, BoltIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const DynamicModeSection = ({ selectedMode, selectedGame }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const casesData = [
    {
      id: 1,
      name: 'Dragon Lore Case',
      price: '$2.50',
      rarity: 'Legendary',
      image: 'https://images.unsplash.com/photo-1596213812307-df3ffda88656?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxnYW1pbmd8ZW58MHx8fG9yYW5nZXwxNzUzNTI4NjQ1fDA&ixlib=rb-4.1.0&q=85',
      odds: '0.26%'
    },
    {
      id: 2,
      name: 'Knife Collection',
      price: '$5.00',
      rarity: 'Rare',
      image: 'https://images.unsplash.com/photo-1596213812307-df3ffda88656?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxnYW1pbmd8ZW58MHx8fG9yYW5nZXwxNzUzNTI4NjQ1fDA&ixlib=rb-4.1.0&q=85',
      odds: '0.64%'
    },
    {
      id: 3,
      name: 'Glove Case',
      price: '$3.75',
      rarity: 'Epic',
      image: 'https://images.unsplash.com/photo-1596213812307-df3ffda88656?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxnYW1pbmd8ZW58MHx8fG9yYW5nZXwxNzUzNTI4NjQ1fDA&ixlib=rb-4.1.0&q=85',
      odds: '1.2%'
    }
  ];

  const upgradeData = [
    {
      id: 1,
      from: 'AK-47 Redline',
      to: 'AK-47 Fire Serpent',
      chance: '25%',
      cost: '$15.00',
      image: 'https://images.pexels.com/photos/28948223/pexels-photo-28948223.jpeg'
    },
    {
      id: 2,
      from: 'AWP Asiimov',
      to: 'AWP Dragon Lore',
      chance: '15%',
      cost: '$25.00',
      image: 'https://images.pexels.com/photos/28948223/pexels-photo-28948223.jpeg'
    }
  ];

  const contractsData = [
    {
      id: 1,
      name: 'Trade Up Contract',
      description: 'Exchange 10 items for 1 higher tier item',
      requirements: '10 items of same quality',
      image: 'https://images.unsplash.com/photo-1615215271533-eab8c3d9cb34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx0ZWNofGVufDB8fHxvcmFuZ2V8MTc1MzYyOTI5NXww&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      name: 'Skin Exchange',
      description: 'Trade skins with other players',
      requirements: 'Verified account',
      image: 'https://images.unsplash.com/photo-1615215271533-eab8c3d9cb34?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx0ZWNofGVufDB8fHxvcmFuZ2V8MTc1MzYyOTI5NXww&ixlib=rb-4.1.0&q=85'
    }
  ];

  const buyData = [
    {
      id: 1,
      name: 'AK-47 Fire Serpent',
      price: '$150.00',
      rarity: 'Covert',
      condition: 'Field-Tested',
      image: 'https://images.unsplash.com/photo-1649767727699-3a38a00dd984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxzaG9wcGluZ3xlbnwwfHx8b3JhbmdlfDE3NTM2MjkzMDh8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      id: 2,
      name: 'AWP Dragon Lore',
      price: '$2,500.00',
      rarity: 'Covert',
      condition: 'Factory New',
      image: 'https://images.unsplash.com/photo-1649767727699-3a38a00dd984?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxzaG9wcGluZ3xlbnwwfHx8b3JhbmdlfDE3NTM2MjkzMDh8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const renderCases = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
          Available Cases
        </h3>
        <p className="text-skinops-gray">
          Open cases to discover rare skins and items
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casesData.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm group hover:border-skinops-orange/50 transition-all duration-300"
          >
            <div className="relative mb-4">
              <img 
                src={caseItem.image} 
                alt={caseItem.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-skinops-orange/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-skinops-orange font-semibold">
                {caseItem.odds}
              </div>
            </div>
            
            <h4 className="font-rajdhani font-bold text-white mb-2">
              {caseItem.name}
            </h4>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-skinops-gray text-sm">{caseItem.rarity}</span>
              <span className="text-skinops-orange font-bold">{caseItem.price}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-gradient-to-r from-skinops-orange to-skinops-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-skinops-orange/25 transition-all duration-200"
            >
              Open Case
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderUpgrade = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
          Upgrade Your Skins
        </h3>
        <p className="text-skinops-gray">
          Risk your items to get higher tier skins
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {upgradeData.map((upgrade, index) => (
          <motion.div
            key={upgrade.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-skinops-orange/20 rounded-lg flex items-center justify-center">
                  <BoltIcon className="w-6 h-6 text-skinops-orange" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-white">{upgrade.from}</h4>
                  <p className="text-skinops-gray text-sm">Starting Item</p>
                </div>
              </div>
              <ChevronRightIcon className="w-6 h-6 text-skinops-orange" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-rajdhani font-bold text-white">{upgrade.to}</h4>
                  <p className="text-skinops-gray text-sm">Target Item</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-skinops-gray">Success Rate:</span>
              <span className="text-green-500 font-bold">{upgrade.chance}</span>
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-skinops-gray">Cost:</span>
              <span className="text-skinops-orange font-bold">{upgrade.cost}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
            >
              Upgrade Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContracts = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
          Trading Contracts
        </h3>
        <p className="text-skinops-gray">
          Exchange items and trade with other players
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contractsData.map((contract, index) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm group hover:border-skinops-orange/50 transition-all duration-300"
          >
            <div className="relative mb-4">
              <img 
                src={contract.image} 
                alt={contract.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>
            
            <h4 className="font-rajdhani font-bold text-white mb-2">
              {contract.name}
            </h4>
            
            <p className="text-skinops-gray text-sm mb-4">
              {contract.description}
            </p>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-skinops-gray text-sm">Requirements:</span>
              <span className="text-skinops-orange text-sm">{contract.requirements}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
            >
              Start Contract
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderBuy = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-rajdhani font-bold text-white mb-2">
          Marketplace
        </h3>
        <p className="text-skinops-gray">
          Buy skins directly from our marketplace
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {buyData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm group hover:border-skinops-orange/50 transition-all duration-300"
          >
            <div className="relative mb-4">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-skinops-orange/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-skinops-orange font-semibold">
                {item.rarity}
              </div>
            </div>
            
            <h4 className="font-rajdhani font-bold text-white mb-2">
              {item.name}
            </h4>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-skinops-gray text-sm">{item.condition}</span>
              <span className="text-skinops-orange font-bold">{item.price}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all duration-200"
            >
              Buy Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedMode) {
      case 'cases':
        return renderCases();
      case 'upgrade':
        return renderUpgrade();
      case 'contracts':
        return renderContracts();
      case 'buy':
        return renderBuy();
      default:
        return renderCases();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedMode}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};

export default DynamicModeSection;