import React from 'react';
import { motion } from 'framer-motion';
import { GiftIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const footerLinks = [
    { name: 'FAQ', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const socialLinks = [
    { name: 'Discord', icon: '🎮', href: '#' },
    { name: 'Telegram', icon: '📱', href: '#' },
    { name: 'Email', icon: '✉️', href: '#' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-16 pt-16 pb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-skinops-darker to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="inline-flex items-center space-x-3 mb-4"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-skinops-orange to-skinops-accent rounded-lg flex items-center justify-center">
                <GiftIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white">
                SKINOPS
              </h3>
            </motion.div>
            <p className="text-skinops-gray text-sm">
              The ultimate destination for skin trading, case opening, and gaming collectibles.
            </p>
          </div>
          
          {/* Links */}
          <div className="text-center">
            <h4 className="text-white font-rajdhani font-bold mb-4">Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="block text-skinops-gray hover:text-skinops-orange transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-rajdhani font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 text-skinops-gray hover:text-skinops-orange transition-colors duration-200"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-skinops-border text-center"
        >
          <p className="text-skinops-gray text-sm">
            © 2025 SkinOps. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;