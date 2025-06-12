"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson16';

export default function Lesson16Page() {
  return (
    <TypingGame
      lessonNumber={ 16}
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 16"
    />
  );
}