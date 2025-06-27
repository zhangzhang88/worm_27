"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson123';

export default function Lesson123Page() {
  return (
    <TypingGame
      lessonNumber={ 123 }
      sentences={ sentences }
      totalLessons={ 123 }
      lessonTitle="Lesson 123"
    />
  );
}