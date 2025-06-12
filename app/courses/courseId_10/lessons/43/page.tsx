"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson43';

export default function Lesson43Page() {
  return (
    <TypingGame
      lessonNumber={ 43 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 43"
    />
  );
}