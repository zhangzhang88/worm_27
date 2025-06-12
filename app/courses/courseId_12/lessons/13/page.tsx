"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson13';

export default function Lesson13Page() {
  return (
    <TypingGame
      lessonNumber={ 13 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 13"
    />
  );
}