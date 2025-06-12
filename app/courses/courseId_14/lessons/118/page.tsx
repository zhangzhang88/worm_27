"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson118';

export default function Lesson118Page() {
  return (
    <TypingGame
      lessonNumber={ 118 }
      sentences={ sentences }
      totalLessons={ 118 }
      lessonTitle="Lesson 118"
    />
  );
}