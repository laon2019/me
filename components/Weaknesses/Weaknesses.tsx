import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weaknesses = [
    { title: "완벽주의", description: "단계적 목표설정으로 개선 중입니다" },
    { title: "과도한 몰입", description: "시간관리 시스템을 도입했습니다" }
];

const Weaknesses: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="weaknesses"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-20 w-full"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              극복하려 노력하는 부분
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weaknesses.map((weakness, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-white/10 transform transition-transform duration-300">
                  <div className="text-3xl mb-3">{weakness.title === "완벽주의" ? "🎯" : "⚡"}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {weakness.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base">
                    {weakness.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Weaknesses;