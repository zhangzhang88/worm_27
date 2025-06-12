"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson49';

export default function Lesson49Page() {
  return (
    <TypingGame
      lessonNumber={ 49 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 49"
    />
  );
}