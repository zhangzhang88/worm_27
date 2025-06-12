"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson17';

export default function Lesson17Page() {
  return (
    <TypingGame
      lessonNumber={ 17 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 17"
    />
  );
}