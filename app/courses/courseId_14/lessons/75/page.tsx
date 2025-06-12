"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson75';

export default function Lesson75Page() {
  return (
    <TypingGame
      lessonNumber={ 75 }
      sentences={ sentences }
      totalLessons={ 75 }
      lessonTitle="Lesson 75"
    />
  );
}