"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson133';

export default function Lesson133Page() {
  return (
    <TypingGame
      lessonNumber={ 133 }
      sentences={ sentences }
      totalLessons={ 133 }
      lessonTitle="Lesson 133"
    />
  );
}