"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson28';

export default function Lesson28Page() {
  return (
    <TypingGame
      lessonNumber={ 28 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 28"
    />
  );
}