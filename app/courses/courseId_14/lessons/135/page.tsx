"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson135';

export default function Lesson135Page() {
  return (
    <TypingGame
      lessonNumber={ 135 }
      sentences={ sentences }
      totalLessons={ 135 }
      lessonTitle="Lesson 135"
    />
  );
}