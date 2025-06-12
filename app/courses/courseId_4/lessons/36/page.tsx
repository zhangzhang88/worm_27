"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson36';

export default function Lesson36Page() {
  return (
    <TypingGame
      lessonNumber={ 36 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 36"
    />
  );
}