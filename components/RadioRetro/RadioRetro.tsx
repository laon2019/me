import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, Briefcase, Code } from 'lucide-react';
import RetroGrid from "../ui/retro-grid";

const StudyJourneyDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const studyJourney = [
    {
      period: "2022.09 ~ 2023.03",
      title: "자바 백엔드 과정",
      description: "백엔드 개발의 기초를 다지다",
      details: "Spring Boot, JPA, MySQL을 활용한 백엔드 개발 학습",
      icon: <Code className="w-10 h-10 text-blue-400" />,
      gradient: "from-blue-600 to-blue-100",
      shadowColor: "shadow-blue-500/50"
    },
    {
      period: "2023.04 ~ 2024.08",
      title: "프론트엔드 독학",
      description: "새로운 도전과 성장",
      details: "React, Next.js, TypeScript를 통한 프론트엔드 역량 강화",
      icon: <BookOpen className="w-10 h-10 text-purple-400" />,
      gradient: "from-purple-600 to-purple-100",
      shadowColor: "shadow-purple-500/50"
    },
    {
      period: "2024.08 ~ 현재",
      title: "업사이트",
      description: "인턴십 & 정규직 전환",
      details: "실무 경험을 통한 전문성 향상과 성장",
      icon: <Briefcase className="w-10 h-10 text-amber-400" />,
      gradient: "from-amber-600 to-amber-100",
      shadowColor: "shadow-amber-500/50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % studyJourney.length);
        setIsVisible(true);
      }, 1000);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentJourney = studyJourney[currentIndex];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <RetroGrid />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <div className="relative inline-block">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              My Journey
            </motion.h1>
            <Sparkles 
              className="absolute -top-6 -right-6 text-blue-300 w-10 h-10 animate-pulse"
            />
          </div>
          <motion.p 
            className="text-gray-300 text-xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            개발자가 되기까지의 여정
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 100 
              }}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${currentJourney.gradient}
                shadow-lg ${currentJourney.shadowColor} border-2 border-white/20 p-10 md:p-14
                backdrop-blur-xl`}
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 p-6 bg-white/20 rounded-2xl shadow-xl backdrop-blur-sm transform hover:scale-110 transition-transform duration-300">
                  {currentJourney.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-3">
                  {currentJourney.period}
                </h3>
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {currentJourney.title}
                </h4>
                <p className="text-xl md:text-2xl text-white/90 mb-4">
                  {currentJourney.description}
                </p>
                <p className="text-lg md:text-xl text-white/80 bg-white/10 px-6 py-3 rounded-full">
                  {currentJourney.details}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-2xl transform -translate-x-1/2 translate-y-1/2 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 flex justify-center items-center gap-4">
          {studyJourney.map((_, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                opacity: index === currentIndex ? 1 : 0.5
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white shadow-lg shadow-white/50' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyJourneyDemo;