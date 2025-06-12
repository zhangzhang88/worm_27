"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson51';

export default function Lesson51Page() {
  return (
    <TypingGame
      lessonNumber={ 51 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 51"
    />
  );
}