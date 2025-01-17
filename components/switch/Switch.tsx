import React from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  isOn: boolean;
  setIsOn: (isOn: boolean) => void;
}

const Switch = ({ isOn = false, setIsOn }: SwitchProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-16">
        {!isOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              y: [0, 10, 0],
              opacity: 1,
            }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            className="text-white"
          >
            <div className="text-white text-2xl">스위치를 클릭해주세요</div>
            <div className="text-white text-2xl text-center">↓</div>
          </motion.div>
        )}
      </div>
      <div
        className={`w-48 aspect-video rounded-xl ${
          isOn ? 'bg-white' : 'bg-black'
        } border-4 border-[#121331]`}
      >
        <div className="flex h-full w-full px-2 items-center gap-x-2">
          <div className="w-6 h-6 flex-shrink-0 rounded-full border-4 border-[#121331] bg-white" />
          <label
            htmlFor="switch"
            className="has-[:checked]:scale-x-[-1] w-full h-10 border-4 border-[#121331] rounded cursor-pointer"
          >
            <input
              type="checkbox"
              id="switch"
              className="hidden"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <div className="w-full h-full bg-[#f24c00] relative">
              <div className="w-0 h-0 z-20 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[20px] border-t-[#121331] relative">
                <div className="w-0 h-0 absolute border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[15px] border-t-[#e44901] -top-5 -left-[18px]" />
              </div>
              <div className="w-[24px] h-9 z-10 absolute top-[9px] left-0 bg-[#f24c00] border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]" />
              <div className="w-[25px] h-9 z-10 absolute top-[9px] left-[24px] bg-[#c44002] border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]" />
            </div>
          </label>
          <div
            className={`w-6 h-1 flex-shrink-0 ${
              isOn ? 'bg-black' : 'bg-white'
            } rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default Switch;
