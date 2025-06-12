"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson1';

export default function Lesson1Page() {
  return (
    <TypingGame
      lessonNumber={ 1 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 1"
    />
  );
}