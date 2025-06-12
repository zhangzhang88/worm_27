"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson93';

export default function Lesson93Page() {
  return (
    <TypingGame
      lessonNumber={ 93 }
      sentences={ sentences }
      totalLessons={ 93 }
      lessonTitle="Lesson 93"
    />
  );
}