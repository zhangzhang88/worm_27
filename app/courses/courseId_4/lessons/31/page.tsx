"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson31';

export default function Lesson31Page() {
  return (
    <TypingGame
      lessonNumber={ 31 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 31"
    />
  );
}