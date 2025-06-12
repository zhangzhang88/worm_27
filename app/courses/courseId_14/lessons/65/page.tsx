"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson65';

export default function Lesson65Page() {
  return (
    <TypingGame
      lessonNumber={ 65 }
      sentences={ sentences }
      totalLessons={ 65 }
      lessonTitle="Lesson 65"
    />
  );
}