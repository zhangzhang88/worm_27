"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson114';

export default function Lesson114Page() {
  return (
    <TypingGame
      lessonNumber={ 114 }
      sentences={ sentences }
      totalLessons={ 114 }
      lessonTitle="Lesson 114"
    />
  );
}