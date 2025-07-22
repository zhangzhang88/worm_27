"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson137';

export default function Lesson137Page() {
  return (
    <TypingGame
      lessonNumber={ 137 }
      sentences={ sentences }
      totalLessons={ 137 }
      lessonTitle="Lesson 137"
    />
  );
}