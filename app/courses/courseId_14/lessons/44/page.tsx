"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson44';

export default function Lesson44Page() {
  return (
    <TypingGame
      lessonNumber={ 44 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 44"
    />
  );
}