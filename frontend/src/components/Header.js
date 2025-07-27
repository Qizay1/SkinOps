import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserIcon, GiftIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-20"
    >
      <div className="absolute inset-0 bg-skinops-black/80 backdrop-blur-md border-b border-skinops-border/50"></div>
      
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-skinops-orange to-skinops-accent rounded-lg flex items-center justify-center">
              <GiftIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-rajdhani font-bold text-white">
              SKINOPS
            </h1>
          </motion.div>

          {/* Promo Code */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="bg-gradient-to-r from-skinops-orange/20 to-skinops-accent/20 px-4 py-2 rounded-lg border border-skinops-orange/30">
              <span className="text-skinops-orange font-semibold text-sm">
                PROMO: SKINWIN-442
              </span>
            </div>
          </motion.div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-skinops-card/50 hover:bg-skinops-card border border-skinops-border rounded-lg transition-all duration-200"
            >
              <UserIcon className="w-4 h-4" />
              <span className="text-sm">Sign In</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-skinops-orange to-skinops-accent text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-skinops-orange/25 transition-all duration-200"
            >
              Register
            </motion.button>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-skinops-border"
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
                <div className="w-full h-0.5 bg-white"></div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-skinops-card/95 backdrop-blur-md border-b border-skinops-border/50 p-4"
          >
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-skinops-orange/20 to-skinops-accent/20 px-4 py-2 rounded-lg border border-skinops-orange/30">
                <span className="text-skinops-orange font-semibold text-sm">
                  PROMO: SKINWIN-442
                </span>
              </div>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-skinops-card/50 hover:bg-skinops-card border border-skinops-border rounded-lg transition-all duration-200">
                <UserIcon className="w-4 h-4" />
                <span className="text-sm">Sign In</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;