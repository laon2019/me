'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Switch from '@/components/switch/Switch';
import Loading from '@/components/loading/Loading';
import Strengths from '@/components/Stredngth/Stredngth';
import Weaknesses from '@/components/Weaknesses/Weaknesses';

const Loader = () => {
  const router = useRouter();
  const [isOn, setIsOn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBg, setCurrentBg] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [switchVisible, setSwitchVisible] = useState(true);
  const [showMessages, setShowMessages] = useState(false);
  const [showStrengths, setShowStrengths] = useState(false);
  const [showWeaknesses, setShowWeaknesses] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const backgrounds = [
    'bg-white',
    'bg-blue-50',
    'bg-purple-50',
    'bg-indigo-50'
  ];

  const mobileMessages = [
    "안녕하세요\n프론트엔드 개발자\n조규범입니다.",
    "함께 성장하며\n새로운 가치를 만들어가는\n개발자입니다.",
    "저에 대해\n소개하겠습니다.",
  ];
  
  const desktopMessages = [
    "안녕하세요 프론트엔드 개발자 조규범입니다.",
    "함께 성장하며 새로운 가치를 만들어가는 개발자입니다.",
    "저에 대해 소개하겠습니다.",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOn) {
      const totalDuration = 18000; // 총 진행 시간 (모든 타이머 합)
      const interval = 100; // 프로그레스 업데이트 간격
      let elapsed = 0;

      const progressInterval = setInterval(() => {
        elapsed += interval;
        const newProgress = (elapsed / totalDuration) * 100;
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setProgress(100);
        } else {
          setProgress(newProgress);
        }
      }, interval);

      setTimeout(() => {
        setSwitchVisible(false);
        setShowMessages(true);
      }, 1500);

      setTimeout(() => {
        const bgInterval = setInterval(() => {
          setCurrentBg(prev => (prev + 1) % backgrounds.length);
        }, 3000);

        const messageInterval = setInterval(() => {
          setMessageIndex(prev => {
            if (prev + 1 >= mobileMessages.length) {
              clearInterval(messageInterval);
              setShowStrengths(true);
              return prev;
            }
            return prev + 1;
          });
        }, 3000);

        return () => {
          clearInterval(bgInterval);
          clearInterval(messageInterval);
        };
      }, 1500);

      return () => clearInterval(progressInterval);
    }
  }, [isOn]);

  useEffect(() => {
    if (showStrengths) {
      const timer = setTimeout(() => {
        setShowStrengths(false);
        setShowWeaknesses(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showStrengths]);

  useEffect(() => {
    if (showWeaknesses) {
      const timer = setTimeout(() => {
        setShowWeaknesses(false);
        setShowResult(true);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showWeaknesses]);

  useEffect(() => {
    if (showResult) {
      router.push('/Result');
    }
  }, [showResult, router]);

  return (
    <>
      <div className={`flex justify-center items-center h-screen w-screen ${isOn ? backgrounds[currentBg] : 'bg-slate-900'} transition-colors duration-1000`}>
        {isOn && !showResult && (
          <div className="fixed top-5 left-0 w-full px-8">
            <div className="w-full max-w-3xl mx-auto">
              <div className="h-2 bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-100 shadow-lg"
                  style={{ 
                    width: `${progress}%`,
                    boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                  }}
                />
              </div>
            </div>
          </div>
        )}
        {isLoading ? (
          <Loading />
        ) : (
          <AnimatePresence mode="wait">
            {!isOn || switchVisible ? (
              <motion.div
                key="switch"
                animate={{ opacity: isOn ? 0 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <Switch isOn={isOn} setIsOn={setIsOn} />
              </motion.div>
            ) : showMessages && !showStrengths && !showWeaknesses && !showResult ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={messageIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.8
                  }}
                  className="text-black text-4xl font-bold text-center"
                >
                  <span className="hidden md:block">{desktopMessages[messageIndex]}</span>
                  <span className="block md:hidden whitespace-pre-line">{mobileMessages[messageIndex]}</span>
                </motion.div>
              </AnimatePresence>
            ) : showStrengths ? (
              <Strengths />
            ) : showWeaknesses ? (
              <Weaknesses />
            ) : null}
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default Loader;