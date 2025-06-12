"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson32';

export default function Lesson32Page() {
  return (
    <TypingGame
      lessonNumber={ 32 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 32"
    />
  );
}