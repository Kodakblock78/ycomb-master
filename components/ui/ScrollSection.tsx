"use client";

import React from 'react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import ColoredTextBlock from './ColoredTextBlock';
import Help_block from './Block-help';
import Operate101 from './Operate101';

const ScrollSection = () => {
  const isVisible = useScrollAnimation(300);

  return (
    <>
      <ColoredTextBlock />
      <div className={`space-y-0 transition-all duration-1000 ${
        isVisible ? 'slide-up opacity-100' : 'slide-hidden opacity-0'
      }`}>
        <Help_block />
        <Operate101 />
      </div>
    </>
  );
};

export default ScrollSection;
