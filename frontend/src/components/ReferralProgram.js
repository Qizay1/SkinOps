import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShareIcon, UsersIcon, LinkIcon } from '@heroicons/react/24/outline';
import { ClipboardIcon } from '@heroicons/react/24/solid';

const ReferralProgram = () => {
  const [referralCode, setReferralCode] = useState('');
  const [myReferralLink, setMyReferralLink] = useState('https://skinops.com/ref/USER12345');
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(myReferralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleApplyCode = (e) => {
    e.preventDefault();
    alert(`Referral code "${referralCode}" applied successfully!`);
    setReferralCode('');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740714-a8395b3bf30f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MXwxfHNlYXJjaHwxfHx0ZWNofGVufDB8fHxvcmFuZ2V8MTc1MzYyOTI5NXww&ixlib=rb-4.1.0&q=85')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-skinops-black/80 to-skinops-darker/80"></div>
        
        <div className="relative z-10 p-8 md:p-12">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-4"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <ShareIcon className="w-8 h-8 text-purple-500 animate-pulse" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-2"
            >
              REFERRAL PROGRAM
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-skinops-gray text-lg"
            >
              Invite friends and earn 10% of their spend + they get 5% bonus!
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Apply Referral Code */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <LinkIcon className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-rajdhani font-bold text-white">
                  Apply Referral Code
                </h3>
              </div>
              
              <form onSubmit={handleApplyCode} className="space-y-4">
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  placeholder="Enter referral code"
                  className="w-full px-4 py-3 bg-skinops-card/50 border border-skinops-border rounded-lg text-white placeholder-skinops-gray focus:outline-none focus:border-purple-500 focus:bg-skinops-card/80 transition-all duration-200"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                >
                  Apply Code
                </motion.button>
              </form>
            </motion.div>
            
            {/* Share Your Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-skinops-card/50 border border-skinops-border rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <ShareIcon className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-rajdhani font-bold text-white">
                  Share Your Link
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={myReferralLink}
                    readOnly
                    className="flex-1 px-4 py-3 bg-skinops-card/50 border border-skinops-border rounded-lg text-white focus:outline-none"
                  />
                  <motion.button
                    onClick={handleCopyLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                  >
                    <ClipboardIcon className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-sm"
                  >
                    Link copied to clipboard!
                  </motion.p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReferralProgram;