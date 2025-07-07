"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson125';

export default function Lesson125Page() {
  return (
    <TypingGame
      lessonNumber={ 125 }
      sentences={ sentences }
      totalLessons={ 125 }
      lessonTitle="Lesson 125"
    />
  );
}