"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson124';

export default function Lesson124Page() {
  return (
    <TypingGame
      lessonNumber={ 124 }
      sentences={ sentences }
      totalLessons={ 124 }
      lessonTitle="Lesson 124"
    />
  );
}