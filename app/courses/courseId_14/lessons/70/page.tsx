"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson70';

export default function Lesson70Page() {
  return (
    <TypingGame
      lessonNumber={ 70 }
      sentences={ sentences }
      totalLessons={ 70 }
      lessonTitle="Lesson 70"
    />
  );
}