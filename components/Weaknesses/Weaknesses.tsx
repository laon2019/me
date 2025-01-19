import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weaknesses = [
  {
    title: "속도 지향적인 성향",
    description: "속도와 품질 사이의 균형을 맞추고, 디테일을 놓치지 않기 위해 세심한 점검을 강화하고 있습니다."
  },
  {
    title: "일과 일상 분리 어려움", 
    description: "취미 활동을 통해 업무와 일상을 분리하고, 개인 시간을 확보하여 균형을 맞추고 있습니다."
  }
];

const Weaknesses: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl mx-auto px-1 sm:px-6 lg:px-8 py-2 sm:py-12 flex flex-col items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="weaknesses"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-4 sm:mb-20 w-full px-4"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="text-xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-16 text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              극복하려 노력하는 부분
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-12 px-1 max-w-4xl mx-auto">
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
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg transform rotate-2 group-hover:rotate-4 transition-transform duration-300" />
                <div className="relative bg-white rounded-lg p-2 sm:p-6 shadow-xl border border-white/10 transform transition-transform duration-300">
                  <div className="text-lg sm:text-3xl mb-1 sm:mb-3">{weakness.title === "속도 지향적인 성향" ? "⚡" : "⚖️"}</div>
                  <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-3 text-gray-900">
                    {weakness.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-lg">
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