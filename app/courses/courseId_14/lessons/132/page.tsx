"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson132';

export default function Lesson131Page() {
  return (
    <TypingGame
      lessonNumber={ 132 }
      sentences={ sentences }
      totalLessons={ 132 }
      lessonTitle="Lesson 132"
    />
  );
}