"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson58';

export default function Lesson58Page() {
  return (
    <TypingGame
      lessonNumber={ 58 }
      sentences={ sentences }
      totalLessons={ 58 }
      lessonTitle="Lesson 58"
    />
  );
}