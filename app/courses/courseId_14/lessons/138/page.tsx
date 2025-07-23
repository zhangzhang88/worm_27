"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson138';

export default function Lesson138Page() {
  return (
    <TypingGame
      lessonNumber={ 138 }
      sentences={ sentences }
      totalLessons={ 138 }
      lessonTitle="Lesson 138"
    />
  );
}