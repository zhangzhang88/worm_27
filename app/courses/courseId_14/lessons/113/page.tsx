"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson113';

export default function Lesson113Page() {
  return (
    <TypingGame
      lessonNumber={ 113 }
      sentences={ sentences }
      totalLessons={ 113 }
      lessonTitle="Lesson 113"
    />
  );
}