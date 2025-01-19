import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const strengths = [
  {
    title: "창의적 문제해결",
    description: "문제를 해결할 때 기존의 방법에 얽매이지 않고, 다양한 시각을 통해 창의적인 해결책을 제시합니다."
  },
  {
    title: "빠른 학습능력",
    description: "새로운 기술과 도구를 빠르게 습득하고, 이를 실무에 바로 적용하여 업무 효율을 높입니다."
  },
  {
    title: "커뮤니케이션",
    description: "명확하고 효과적인 소통을 통해 팀원들과 원활하게 협업하며, 공동의 목표를 달성하는 데 기여합니다."
  }
];

const Strengths: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="strengths"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mb-20 w-full"
        >
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              저는 이런 장점이 있습니다
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, index) => (
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
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-white/10 transform transition-transform duration-300">
                  <div className="text-4xl mb-4">{strength.title === "창의적 문제해결" ? "🎨" : strength.title === "빠른 학습능력" ? "🚀" : "🤝"}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {strength.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xl">
                    {strength.description}
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

export default Strengths;