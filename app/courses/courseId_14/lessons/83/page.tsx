"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson83';

export default function Lesson83Page() {
  return (
    <TypingGame
      lessonNumber={ 83 }
      sentences={ sentences }
      totalLessons={ 83 }
      lessonTitle="Lesson 83"
    />
  );
}