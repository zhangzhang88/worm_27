"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson63';

export default function Lesson63Page() {
  return (
    <TypingGame
      lessonNumber={ 63 }
      sentences={ sentences }
      totalLessons={ 63 }
      lessonTitle="Lesson 63"
    />
  );
}