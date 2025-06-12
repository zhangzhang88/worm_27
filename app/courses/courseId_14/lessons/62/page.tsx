"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson62';

export default function Lesson60Page() {
  return (
    <TypingGame
      lessonNumber={ 62 }
      sentences={ sentences }
      totalLessons={ 62 }
      lessonTitle="Lesson 62"
    />
  );
}