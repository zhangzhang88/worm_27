"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson27';

export default function Lesson27Page() {
  return (
    <TypingGame
      lessonNumber={ 27 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 27"
    />
  );
}