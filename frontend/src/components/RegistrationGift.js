import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GiftIcon, SparklesIcon } from '@heroicons/react/24/solid';

const RegistrationGift = () => {
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsRegistering(false);
      alert('Registration successful! Check your email for the free bonus case.');
    }, 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-skinops-orange/20 to-skinops-accent/20 border border-skinops-orange/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1701170599571-8bb88f4c8fb4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx1cGdyYWRlfGVufDB8fHxvcmFuZ2V8MTc1MzYyOTMwMnww&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-skinops-black/80 to-skinops-darker/80"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-3 mb-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-skinops-orange to-skinops-accent rounded-full flex items-center justify-center">
                  <GiftIcon className="w-8 h-8 text-white" />
                </div>
                <SparklesIcon className="w-8 h-8 text-skinops-orange animate-pulse" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-2"
              >
                GET A REGISTRATION GIFT
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-skinops-gray text-lg"
              >
                Register now and get a free bonus case worth $5.00!
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full md:w-auto"
            >
              <form onSubmit={handleRegister} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 bg-skinops-card/50 border border-skinops-border rounded-lg text-white placeholder-skinops-gray focus:outline-none focus:border-skinops-orange focus:bg-skinops-card/80 transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  disabled={isRegistering}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-skinops-orange to-skinops-accent text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-skinops-orange/25 transition-all duration-200 disabled:opacity-50"
                >
                  {isRegistering ? 'Registering...' : 'Register Now'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default RegistrationGift;