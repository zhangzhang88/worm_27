"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson84';

export default function Lesson84Page() {
  return (
    <TypingGame
      lessonNumber={ 84 }
      sentences={ sentences }
      totalLessons={ 84 }
      lessonTitle="Lesson 84"
    />
  );
}