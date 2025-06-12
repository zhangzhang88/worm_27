"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson47';

export default function Lesson47Page() {
  return (
    <TypingGame
      lessonNumber={ 47 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 47"
    />
  );
}