"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson5';

export default function Lesson5Page() {
  return (
    <TypingGame
      lessonNumber={ 5 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 5"
    />
  );
}