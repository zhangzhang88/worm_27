"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson59';

export default function Lesson59Page() {
  return (
    <TypingGame
      lessonNumber={ 59 }
      sentences={ sentences }
      totalLessons={ 59 }
      lessonTitle="Lesson 59"
    />
  );
}