"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson57';

export default function Lesson57Page() {
  return (
    <TypingGame
      lessonNumber={ 57 }
      sentences={ sentences }
      totalLessons={ 57 }
      lessonTitle="Lesson 57"
    />
  );
}