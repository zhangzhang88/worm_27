"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson9';

export default function Lesson9Page() {
  return (
    <TypingGame
      lessonNumber={ 9 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 9"
    />
  );
}