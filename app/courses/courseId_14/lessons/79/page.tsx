"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson79';

export default function Lesson79Page() {
  return (
    <TypingGame
      lessonNumber={ 79 }
      sentences={ sentences }
      totalLessons={ 79 }
      lessonTitle="Lesson 79"
    />
  );
}