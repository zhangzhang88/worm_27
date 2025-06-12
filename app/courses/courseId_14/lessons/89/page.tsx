"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson89';

export default function Lesson89Page() {
  return (
    <TypingGame
      lessonNumber={ 89 }
      sentences={ sentences }
      totalLessons={ 89 }
      lessonTitle="Lesson 89"
    />
  );
}