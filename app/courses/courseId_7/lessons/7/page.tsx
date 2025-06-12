"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson7';

export default function Lesson7Page() {
  return (
    <TypingGame
      lessonNumber={ 7 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 7"
    />
  );
}