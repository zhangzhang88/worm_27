"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson86';

export default function Lesson86Page() {
  return (
    <TypingGame
      lessonNumber={ 86 }
      sentences={ sentences }
      totalLessons={ 86 }
      lessonTitle="Lesson 86"
    />
  );
}