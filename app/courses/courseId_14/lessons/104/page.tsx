"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson104';

export default function Lesson104Page() {
  return (
    <TypingGame
      lessonNumber={ 104 }
      sentences={ sentences }
      totalLessons={ 104 }
      lessonTitle="Lesson 104"
    />
  );
}