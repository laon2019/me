'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Switch from '@/components/switch/Switch';
import Loading from '@/components/loading/Loading';
import StudyJourneyDemo from '@/components/RadioRetro/RadioRetro';
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
  const [showJourney, setShowJourney] = useState(false);
  const [showStrengths, setShowStrengths] = useState(false);
  const [showWeaknesses, setShowWeaknesses] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const backgrounds = [
    'bg-white',
    'bg-blue-50',
    'bg-purple-50',
    'bg-indigo-50'
  ];

  const mobileMessages = [
    "안녕하세요\n프론트엔드 개발자\n조규범입니다.",
    "저에 대해\n소개하겠습니다."
  ];

  const desktopMessages = [
    "안녕하세요 프론트엔드 개발자 조규범입니다.",
    "저에 대해 소개하겠습니다."
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOn) {
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
              setShowJourney(true);
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
    }
  }, [isOn]);

  useEffect(() => {
    if (showJourney) {
      const timer = setTimeout(() => {
        setShowJourney(false);
        setShowStrengths(true);
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, [showJourney]);

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
            ) : showMessages && !showJourney && !showStrengths && !showWeaknesses && !showResult ? (
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
            ) : showJourney ? (
              <StudyJourneyDemo />
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