import React from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const PaymentMethods = () => {
  const paymentMethods = [
    { name: 'Visa', icon: '💳', type: 'card' },
    { name: 'MasterCard', icon: '💳', type: 'card' },
    { name: 'Mir', icon: '💳', type: 'card' },
    { name: 'Bitcoin', icon: '₿', type: 'crypto' },
    { name: 'Ethereum', icon: 'Ξ', type: 'crypto' },
    { name: 'Tether', icon: '₮', type: 'crypto' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-3 mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <CreditCardIcon className="w-8 h-8 text-white" />
          </div>
          <CurrencyDollarIcon className="w-8 h-8 text-green-500 animate-pulse" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-2"
        >
          PAYMENT METHODS
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-skinops-gray text-lg"
        >
          We accept cards and crypto for your convenience
        </motion.p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={method.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-skinops-card/50 border border-skinops-border rounded-xl p-6 text-center backdrop-blur-sm hover:border-skinops-orange/50 transition-all duration-300"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
              {method.icon}
            </div>
            <h3 className="text-white font-rajdhani font-semibold text-sm">
              {method.name}
            </h3>
            <p className="text-skinops-gray text-xs mt-1">
              {method.type === 'card' ? 'Card Payment' : 'Cryptocurrency'}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-500 font-semibold text-sm">
            Secure & Encrypted Payments
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default PaymentMethods;