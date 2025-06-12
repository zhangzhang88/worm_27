"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson87';

export default function Lesson87Page() {
  return (
    <TypingGame
      lessonNumber={ 87 }
      sentences={ sentences }
      totalLessons={ 87 }
      lessonTitle="Lesson 87"
    />
  );
}