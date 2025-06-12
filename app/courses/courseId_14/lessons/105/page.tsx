"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson105';

export default function Lesson105Page() {
  return (
    <TypingGame
      lessonNumber={ 105 }
      sentences={ sentences }
      totalLessons={ 105 }
      lessonTitle="Lesson 105"
    />
  );
}