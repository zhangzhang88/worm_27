"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson26';

export default function Lesson26Page() {
  return (
    <TypingGame
      lessonNumber={ 26 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 26"
    />
  );
}