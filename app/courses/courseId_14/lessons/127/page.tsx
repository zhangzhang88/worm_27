"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson127';

export default function Lesson127Page() {
  return (
    <TypingGame
      lessonNumber={ 127 }
      sentences={ sentences }
      totalLessons={ 127 }
      lessonTitle="Lesson 127"
    />
  );
}