"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson3';

export default function Lesson3Page() {
  return (
    <TypingGame
      lessonNumber={ 3 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 3"
    />
  );
}