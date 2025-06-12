"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson34';

export default function Lesson34Page() {
  return (
    <TypingGame
      lessonNumber={ 34 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 34"
    />
  );
}