"use client";

import React from 'react';
import TypingGame from './TypingGame';
import { sentences } from './wordDataLesson37';

export default function Lesson37Page() {
  return (
    <TypingGame
      lessonNumber={ 37 }
      sentences={ sentences }
      totalLessons={ 55 }
      lessonTitle="Lesson 37"
    />
  );
}