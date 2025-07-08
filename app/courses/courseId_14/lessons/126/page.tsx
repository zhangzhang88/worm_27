"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson126';

export default function Lesson126Page() {
  return (
    <TypingGame
      lessonNumber={ 126 }
      sentences={ sentences }
      totalLessons={ 126 }
      lessonTitle="Lesson 126"
    />
  );
}