"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson88';

export default function Lesson88Page() {
  return (
    <TypingGame
      lessonNumber={ 88 }
      sentences={ sentences }
      totalLessons={ 88 }
      lessonTitle="Lesson 88"
    />
  );
}