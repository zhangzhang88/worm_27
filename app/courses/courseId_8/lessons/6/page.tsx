"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson6';

export default function Lesson6Page() {
  return (
    <TypingGame
      lessonNumber={ 6 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 6"
    />
  );
}