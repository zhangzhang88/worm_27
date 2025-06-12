"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson53';

export default function Lesson53Page() {
  return (
    <TypingGame
      lessonNumber={ 53 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 53"
    />
  );
}